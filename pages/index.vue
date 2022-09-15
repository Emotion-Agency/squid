<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useProjectsStories } from '~/composables/stories/projects.story'
import { useHomeStory } from '~/composables/stories/home.story'
useTransition()
useObserver('.section')

const { stories: projects } = await useProjectsStories()




const $el = ref(null)
const $container = ref(null)
const $scroller = ref(null)

const $scrollEl = ref(null)
const $colorEl = ref(null)
let sa

const { story } = await useHomeStory()

console.log(story.value)


onMounted(async () => {
  const { HorizontalScroll } = await import(
    '~/assets/scripts/HorizontalScroll'
  )

  const { OnScrollColor } = await import(
    '~/assets/scripts/OnScrollColor'
  )

  const { OnScrollAppereance } = await import(
    '~/assets/scripts/OnScrollAppereance'
  )


  setTimeout(() => {

    new OnScrollColor($colorEl.value)

    new HorizontalScroll(
      $el.value,
      $container.value,
      $scroller.value
    )

    setTimeout(() => {

      sa = new OnScrollAppereance($scrollEl.value,$container.value)
    },100)
  },500)
})

onBeforeUnmount(() => {
  sa && sa.destroy()
})



const {bottomText, isRotated, isVisible} = useBottomBlock()
</script>

<template>
  <main>
    <div
      ref="$colorEl"
      class="color-changer"
    >
      <section
        data-bottom-s="'Don’t worry, the water’s fine'|false"
        class="section section--nm home-1"
      >
        <div class="container home-1__wrapper">
          <RichText
            class="home-1__title"
            :text="story.storytelling[0].screen_1[0].text"
          />
        </div>
        <TheSocials class="bottom-nav-socials" />
        <NextBlockButton
          :is-fixed="true"
          :is-rotated="isRotated"
          :is-visible="isVisible"
        >{{bottomText}}</NextBlockButton>
      </section>
      <section
        data-bottom-s="'Into uncharted territory'|false"
        class="section section--nm home-2"
      >
        <div class="container home-2__wrapper">
          <RichText
            class="home-1__title"
            :text="story.storytelling[0].screen_2[0].text"
          />
        </div>
      </section>
      <div class="home-all-w">
        <div
          ref="$container"
          class="wrapper"
        >
          <div
            ref="$scroller"
            class="scroller"
          >
            <div
              ref="$el"
              class="scroller-el"
            >
              <section
                data-bottom-s="'This is where we thrive'|true"
                class="section section--nm home-3"
              >
                <div class="container home-3__wrapper">
                  <div class="home-1__title">
                    <RichText :text="story.storytelling[0].screen_3[0].text" />
                    <RichText
                      class="home-1__title--gray"
                      :text="story.storytelling[0].screen_3[1].text"
                    />
                  </div>
                </div>
              </section>
              <section
                data-bottom-s="'Let’s explore'|true"
                class="section section--nm home-4"
              >
                <div class="container grid home-4__wrapper">
                  <RichText
                    class="home-4__text"
                    :text="story.storytelling[0].screen_4[0].text"
                  />
                </div>
              </section>
              <section
                data-bottom-s="'There’s more to see here'|true"
                class="section section--nm home-5"
              >
                <div class="container grid home-5__wrapper">
                  <TheAccordion
                    v-if="story.dropdown_list[0]"
                    class="home-5__accordion"
                    :items="story.dropdown_list[0].dropdown_points"
                  >
                    <p class="home-5__rotate-text">WE ARE</p>
                  </TheAccordion>
                </div>
              </section>
              <section
                data-bottom-s="'Join us in the abyss'|true"
                class="section section--nm home-6"
              >
                <div class="container grid home-6__wrapper">
                  <div class="home-6__text-wrapper">
                    <RichText
                      class="home-6__title"
                      :text="story.table_texts[0].title[0].text"
                    />


                    <div class="home-6__content">
                      <p class="home-6__desc">
                        {{story.table_texts[0].text}}
                      </p>
                      <NuxtLink
                        to="/about/"
                        class="home-6__btn-wrapper"
                      >
                        <div class="home-6__btn">LEARN MORE</div>
                        <small class="home-6__btn-text">about us</small>
                      </NuxtLink>
                    </div>
                  </div>
                  <div class="home-6__text-wrapper">
                    <RichText
                      class="home-6__title"
                      :text="story.table_texts[1].title[0].text"
                    />
                    <div class="home-6__content">
                      <p class="home-6__desc">
                        {{story.table_texts[1].text}}
                      </p>
                      <NuxtLink
                        to="/expertise/"
                        class="home-6__btn-wrapper"
                      >
                        <div class="home-6__btn">LEARN MORE</div>
                        <small class="home-6__btn-text">expertise</small>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </section>

              <section
                data-bottom-s="'let’s go deeper'|false"
                class="section section--nm home-7"
              >
                <div class="grid home-7__wrapper">
                  <div class="container home-7__top-block">
                    <RichText
                      class="home-7__top-title"
                      :text="story.headings[0].text"
                    />
                  </div>
                  <div
                    ref="$scrollEl"
                    class="container home-7__bottom-block"
                    data-bottom-s="'see for yourself'|false"
                  >
                    <RichText
                      class="home-7__bottom-title"
                      :text="story.headings[1].text"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

    </div>
    <section
      data-bottom-s="undefined"
      class="section home-8"
    >
      <div class="home-8__wrapper">
        <div class="container home-8__text">
          <h1 class="home-8__title">CASE STUDIES</h1>
          <p class="home-8__desc">
            {{story.cases_description}}
          </p>
        </div>
      </div>
      <ul class="container home-8__img-list">
        <li
          v-for="post in projects"
          :key="post._uid"
          class="home-8__img-li"
        >
          <NuxtLink
            class="home-8__img-link"
            :to="`/portfolio/${post.slug}/`"
          >
            <TheImage
              :src="post.content?.preview_image?.filename ?? post.content?.image?.filename"
              alt="Image"
            />
            <div class="home-8__text-wrapper">
              <p class="home-8__name">{{post.name}}</p>
              <div class="home-8__line-wrapper">
                <span class="home-8__line"></span>
              </div>
              <button class="home-8__link"> view case study </button>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </section>
    <section
      v-if="story.clients_list[0].clients_points.length"
      data-bottom-s="undefined"
      class="section home-9"
    >
      <div class="container home-9__wrapper">
        <div class="home-9__title-wrapper">
          <h2 class="home-9__title">SOME CLIENTS WE’VE HELPED</h2>
        </div>
        <div class="home-9__list-wrapper">
          <ul class="home-9__list">
            <li
              v-for="item in story.clients_list[0].clients_points"
              :key="item._uid"
              class="home-9__li"
            >
              <div class="home-9__item-wrapper">
                <h3 class="home-9__item-text">
                  {{item.title}}
                </h3>
                <div class="home-9__item-img-wrapper">

                  <img
                    class="home-9__item-img"
                    :src="item.image.filename"
                    alt=""
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
