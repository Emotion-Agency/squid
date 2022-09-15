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

</script>

<template>
  <main>

    <section class="section section--nm post-1">
      <div class="container post-1__wrapper">
        <div class="post-1__title">
          <RichText :text="post?.title && post?.title[0].text" />
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
    <CaseInfo :items="post.case_info[0].case_info" />

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

    <CaseInfo
      class="post-20"
      :items="post.case_credits[0].case_credit"
    />

    <div class="container">
      <h3 class="post-20__link-title">Other Case Studies</h3>
      <PostNavigation
        class="post-20__nav"
        :prev-post-link="`/portfolio/${prevPost.slug}/`"
        :next-post-link="`/portfolio/${nextPost.slug}/`"
        all-posts-link="/portfolio/"
      />
    </div>
    <TheFooter />
  </main>
</template>
