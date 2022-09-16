<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useBlogStories } from '~/composables/stories/blog.story'
useTransition()
useObserver('.section')

const route = useRoute()

const slug = route.params.slug

const { stories, categories, tags, listenStory } = await useBlogStories()

listenStory(slug)


const posts = computed(() => {
  return stories.value
})


const post = computed(() => {
  return stories.value.find(story => story.slug === slug).content
})

console.log(post.value)

const activeCategory = computed(() => {
  const activeId = post?.value?.category

  return categories.value.find(story => story.uuid === activeId)?.name
})



const prevPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx <= 0 ? posts.value[posts.value.length - 1] : posts.value[idx - 1]
})

const nextPost = computed(() => {
  const idx = posts.value.findIndex(post => post.slug === slug)

  return idx >= posts.value.length - 1 ? posts.value[0] : posts.value[idx + 1]
})

const lastPosts = computed(() => {
  return posts.value.filter(s => s._uid !== post.value._uid).slice(0, 3)
})

console.log(lastPosts.value)



const formattedDate =computed(() => {
  const date = stories.value.find(story => story.slug === slug).published_at ?? stories.value.find(story => story.slug === slug).created_at

  return useFormattedDate(date)
})

console.log(tags.value)
</script>

<template>
  <main>
    <section class="section section--nm blog-1">
      <div class="blog-1__img-wrapper">
        <TheImage
          class="blog-1__img"
          src="/images/blog/1.jpg"
          alt="Image"
        />
      </div>
      <TheSocials class="bottom-nav-socials" />
    </section>
    <div class="container blog-wrapper">
      <article class="article">
        <section class="section section--nm blog-2">
          <div class="blog-2__wrapper">
            <div class="blog-2__main">
              <p class="blog-2__category-name">Category: {{activeCategory}}</p>
              <p class="blog-2__date">{{formattedDate}} / Miles Marmo</p>
              <h1 class="blog-2__title">{{post.title}}</h1>
              <div class="blog-2__long-text">
                <p class="blog-2__desc">
                  {{post.description}}
                </p>
              </div>
            </div>
            <div class="blog-2__about">
              <div class="blog-2__line"></div>
              <div class="grid blog-2__about-list">
                <div class="blog-2__about-block">
                  <h3 class="blog-2__about-title">Services Provided:</h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Business Consulting</li>
                    <li class="blog-2__about-text">Naming</li>
                    <li class="blog-2__about-text">Branding</li>
                    <li class="blog-2__about-text">Packaging Design</li>
                    <li class="blog-2__about-text">Web UI/UX Design</li>
                    <li class="blog-2__about-text">Web Development</li>
                    <li class="blog-2__about-text">Marketing</li>
                    <li class="blog-2__about-text">Advertising</li>
                  </ul>
                </div>
                <div class="blog-2__about-block">
                  <h3 class="blog-2__about-title">Client:</h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Eel River Brewing</li>
                  </ul>
                  <h3 class="blog-2__about-title blog-2__about-title--distance">
                    Project:
                  </h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Product Launch</li>
                    <li class="blog-2__about-text">B2B + B2C</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="blog-2__images">
              <TheImage
                class="blog-2__img"
                src="/images/blog/2.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-2__img"
                src="/images/blog/3.jpg"
                alt="Image"
              />
            </div>
          </div>
        </section>
        <section class="section blog-3">
          <div class="blog-3__wrapper">
            <div class="blog-3__text-wrapper">
              <h2 class="blog-3__title">Clarity’s Differentiators</h2>
              <p class="blog-3__desc">
                We knew it was wise to capitalize on the parent brewery’s, Eel
                River Brewing, brand equity and their true subject matter
                expertise on producing cleaner, better-for-you, boozy drinks.
                Those two factors were strong differentiators in a very
                competitive marketplace and influences packaging updates,
                sales/marketing materials, and website.
              </p>
            </div>
            <div class="blog-3__img-wrapper">
              <TheImage
                class="blog-3__img"
                src="/images/blog/7.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-3__img"
                src="/images/blog/8.jpg"
                alt="Image"
              />
            </div>
            <div class="blog-3__centered-wrapper">
              <p class="blog-3__centered-text">
                Knowing the consumer was predominately millennials, we designed
                and built a mobile first website to engage consumers on-the-go
                and deliver messages to them at retail inspiring trail and
                conversion.
              </p>
            </div>
          </div>
        </section>
        <section class="section blog-4">
          <div class="blog-4__wrapper">
            <h2 class="blog-4__title">HITTING THE MARKET</h2>
            <div class="blog-4__list-wrapper">
              <ul class="blog-4__list">
                <li class="blog-4__li">
                  <h3 class="blog-4__block-title">OUR PHILOSOPHY</h3>
                  <p class="blog-4__desc">
                    We are changing the standard of agency culture by putting
                    the well-being of the person first. We respect, appreciate,
                    and cheer-on our employees in all aspects of their lives as
                    we understand that without them, we wouldn’t be successful.
                  </p>
                </li>
                <li class="blog-4__li">
                  <h3 class="blog-4__block-title">OUR VALUES</h3>
                  <p class="blog-4__desc">
                    We believe that mental health is the foundation for
                    purposeful thinking, successful creative, and a positive
                    work environment. In order for everyone to bring their best
                    selves and best work to the agency, we understand that we
                    need our team to be mentally nourished, personally
                    supported, and occupationally fulfilled.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="blog-4__img-wrapper">
            <TheImage
              class="blog-4__img"
              src="/images/blog/9.jpg"
              alt="Image"
            />
            <div class="blog-4__double-imgs">
              <TheImage
                class="blog-4__double-img"
                src="/images/blog/10.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-4__double-img"
                src="/images/blog/11.jpg"
                alt="Image"
              />
            </div>
            <TheImage
              class="blog-4__img"
              src="/images/blog/12.jpg"
              alt="Image"
            />
          </div>
        </section>
        <section class="section blog-5">
          <div class="blog-5__text-wrapper">
            <h3 class="blog-5__title">
              THE <span class="blog-5__title-italic">SOLUTION</span>
            </h3>
            <p class="blog-5__desc">
              Sales materials were developed to help the Eel River Brewing team
              educate distributors and retailers on why the product was
              different and how current brand advocates are repeat and loyal
              purchasers. We used ghosted-back black and white lifestyle imagery
              to focus on product and brand attributes while, secondarily,
              putting it in relatable environments.
            </p>
          </div>
          <div class="blog-5__imgs-wrapper">
            <h2 class="blog-5__text">
              Local success has led to national expansion.
            </h2>
            <ul class="blog-5__img-list">
              <li class="blog-5__img-li">
                <TheImage
                  class="blog-5__img"
                  src="/images/blog/13.jpg"
                  alt="Image"
                />
                <p class="blog-5__img-desc">
                  Option to add a caption to these images.
                </p>
              </li>
              <li class="blog-5__img-li">
                <TheImage
                  class="blog-5__img"
                  src="/images/blog/14.jpg"
                  alt="Image"
                />
              </li>
            </ul>
          </div>
        </section>
        <section class="section blog-6">
          <div class="blog-6__wrapper">
            <h3 class="blog-6__title">
              THE <span class="blog-6__title-italic">RESULTS</span>
            </h3>
            <p class="blog-6__desc">
              This innovative product provided Eel River Brewery with the
              opportunity to expand its market and convert to new consumers
              other than beer drinkers. Their local success has allowed them to
              expand nationally. Clarity Hard Sparkling Water has been picked up
              by retailers across the country.
            </p>
          </div>
        </section>
      </article>
      <aside class="aside">
        <div class="aside__wrapper">
          <div class="aside__filter">
            <h2 class="aside__filter-title">CATEGORIES</h2>
            <ul class="aside__filter-list">
              <li
                v-for="category in categories"
                :key="category._uid"
                class="aside__filter-li"
              >
                <NuxtLink
                  :class="[
                    activeCategory?.toLocaleLowerCase() === category.name?.toLocaleLowerCase() && 'aside__filter-btn--active',
                  ]"
                  :to="`/squid-blog/?filter=${category.name.toLocaleLowerCase()}`"
                  class="aside__filter-btn"
                >
                  {{category.name?.toLocaleLowerCase()}}
                </NuxtLink>
              </li>

            </ul>
          </div>
          <div class="aside__posts">
            <h2 class="aside__posts-main">LATEST POSTS</h2>
            <ul class="aside__posts-list">
              <li class="aside__posts-li">
                <NuxtLink
                  to="/"
                  class="aside__link"
                >
                  <img
                    class="aside__posts-img"
                    src="/images/blog/4.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">Now hiring!</p>
                    </div>
                    <p class="aside__posts-name">Careers</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="aside__posts-li">
                <NuxtLink
                  to="/"
                  class="aside__link"
                >
                  <img
                    class="aside__posts-img"
                    src="/images/blog/5.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">
                        The importance of mental health care for your team.
                      </p>
                    </div>
                    <p class="aside__posts-name">Agency Life</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="aside__posts-li">
                <NuxtLink
                  to="/"
                  class="aside__link"
                >
                  <img
                    class="aside__posts-img"
                    src="/images/blog/6.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">New website: who dis?</p>
                    </div>
                    <p class="aside__posts-name">Latest Work</p>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="aside__tags">
            <h2 class="aside__tags-main">TAGS</h2>
            <p class="aside__tags-text">
              <span
                v-for="(tag, idx) in tags"
                :key="tag._uid"
                class="aside__tags-text-wrapper"
              >
                {{tag.name}}
                <span v-if="idx + 1 < tags.length">/</span>
              </span>
            </p>
          </div>
        </div>
      </aside>
    </div>
    <PostNavigation
      class="post-20__nav"
      :prev-post-link="`/squid-blog/${prevPost.slug}/`"
      :next-post-link="`/squid-blog/${nextPost.slug}/`"
      all-posts-link="/squid-blog/"
    />
    <TheFooter />
  </main>
</template>
