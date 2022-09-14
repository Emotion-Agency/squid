<script setup lang="ts">
import { useProjectsStories } from '~/composables/stories/projects.story'
import { useTransition } from '~/composables/transition'


useTransition()
useObserver('.section')


const route = useRoute()

const slug = route.params.slug

const { stories } = await useProjectsStories()


const posts = computed(() => {
  return stories.value
})

const post = computed(() => {
  return stories.value.find(story => story.slug === slug).content
})


const prevPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx <= 0 ? posts.value[posts.value.length - 1] : posts.value[idx - 1]
})

const nextPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx >= posts.value.length - 1 ? posts.value[0] : posts.value[idx + 1]
})


console.log(post.value)

</script>

<template>
  <main>

    <section class="section section--nm post-1">
      <div class="container post-1__wrapper">
        <div class="post-1__title">
          <RichText :text="post.title[0].text" />
        </div>
        <div
          v-if="posts.length > 1"
          class="post-1__btns-wrapper"
        >
          <NuxtLink
            :to="`/portfolio/${prevPost.slug}`"
            class="post-1__btn post-1__btn--prev"
          >PREVIOUS</NuxtLink>
          <NuxtLink
            :to="`/portfolio/${nextPost.slug}`"
            class="post-1__btn post-1__btn--next"
          >NEXT</NuxtLink>
        </div>
      </div>
      <TheSocials class="bottom-nav-socials" />
      <NextBlockButton>Scroll</NextBlockButton>
    </section>
    <section class="section section--nm post-2">
      <div class="post-2__wrapper">
        <TheImage
          :transform="true"
          class="post-2__img"
          :src="post.image.filename"
          alt="Image"
        />
      </div>
    </section>
    <section class="section post-3">
      <BlokTextBlock1
        class="post-3__wrapper"
        :blok="{
          aligned: post.scope[0]?.aligned,
          main_text: post.scope[0]?.main_text,
          title: post.scope[0]?.title
        }"
      />
    </section>
    <div
      v-if="post"
      v-editable="post"
    >
      <Blok
        v-for="blok in post.body"
        :key="blok._uid"
        :body="blok.body"
      />
    </div>

    <section class="section post-4">
      <div class="container post-4__wrapper">
        <div class="post-4__line"></div>
        <ul class="grid post-4__list">
          <li class="post-4__li">
            <h3 class="post-4__title">Role</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Research</p>
              <p class="post-4__text">Strategy</p>
              <p class="post-4__text">Creative</p>
              <p class="post-4__text">Direction</p>
              <p class="post-4__text">Production</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Deliverables</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Marketing & Branding Strategy</p>
              <p class="post-4__text">Branding/Art Direction</p>
              <p class="post-4__text">Copywriting/Brand Voice</p>
              <p class="post-4__text">Videography/Photography</p>
              <p class="post-4__text">Digital Presence</p>
              <p class="post-4__text">Website Design</p>
              <p class="post-4__text">Social Media Strategy/Launch</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Client</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">Costa Farms</p>
            </div>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Company Type</h3>
            <div class="post-4__text-wrapper">
              <p class="post-4__text">B2C / B2B</p>
              <p class="post-4__text">Agriculture</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section class="section post-20">
      <div class="container post-20__wrapper">
        <div class="post-20__line"></div>
        <ul class="grid post-20__list">
          <li class="post-20__li">
            <h3 class="post-20__title">Credits: The Team</h3>
            <div class="post-20__text-wrapper">
              <p class="post-20__text">Creative Director: Brent Marmo</p>
              <p class="post-20__text">
                Strategic Planning Director: Miles Marmo
              </p>
              <p class="post-20__text">
                Art Director and Designer: Tanya Jacobson
              </p>
              <p class="post-20__text">
                Designer and Producer: Braden Schlegel
              </p>
            </div>
          </li>
          <li class="post-20__li">
            <h3 class="post-20__title">Partners</h3>
            <div class="post-20__text-wrapper">
              <p class="post-20__text">
                Videographer: Johnathon Doe Studios / Johnathon Doe Studios
              </p>
              <p class="post-20__text">
                Photographer: Braden Schlegel / Johnathon Doe
              </p>
              <p class="post-20__text">Media Team: Johnathon Doe Studios</p>
              <p class="post-20__text">Post-Production: Johnathon Doe</p>
              <p class="post-20__text">
                Digital-Production: Johnathon Doe / Johnathon Doe Studios
              </p>
              <p class="post-20__text">VFX Production: Johnathon Doe</p>
            </div>
          </li>
        </ul>
        <div
          v-if="posts.length > 1"
          class="post-20__link-wrapper"
        >
          <h3 class="post-20__link-title">Other Case Studies</h3>
          <PostNavigation
            class="post-20__nav"
            :prev-post-link="`/portfolio/${prevPost.slug}/`"
            :next-post-link="`/portfolio/${nextPost.slug}/`"
            all-posts-link="/portfolio/"
          />
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
