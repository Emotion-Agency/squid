<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { iAccordionItem } from '~~/types/accordion'
useTransition()
useObserver('.section')

const $el = ref(null)
const $container = ref(null)
const $scroller = ref(null)

const $scrollEl = ref(null)
const $colorEl = ref(null)
let sa



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

const accordionItems: iAccordionItem[] = [
  {
    title: 'CHALLENGERS',
    text: 'We will fight for what’s right for your business and challenge you to do the same.'
  },
  {
    title: 'STRATEGIZORS',
    text: 'We will fight for what’s right for your business and challenge you to do the same.'
  },
  {
    title: 'CREATORS',
    text: 'We will fight for what’s right for your business and challenge you to do the same.'
  }
]

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
          <h1 class="home-1__title">
            JUMP
            <span class="home-1__style-title"> IN</span>
          </h1>
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
          <h1 class="home-2__title">
            DIVE
            <span class="home-2__style-title"> DEEP</span>
          </h1>
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
                  <h1 class="home-3__title">
                    BENEATH
                    <span class="home-3__title-wrapper">
                      <span class="home-3__style-title"> THE</span>
                      <span class="home-3__style-title"> SURFACE</span></span>
                  </h1>
                </div>
              </section>
              <section
                data-bottom-s="'Let’s explore'|true"
                class="section section--nm home-4"
              >
                <div class="container grid home-4__wrapper">
                  <h1 class="home-4__text">
                    The first step in
                    <span class="home-4__style-text">ELEVATING A BRAND</span> is jumping
                    in. It takes <span class="home-4__style-text">COURAGE</span> and
                    <span class="home-4__style-text">commitment</span>, but we don’t
                    embark alone. We
                    <span class="home-4__style-text"> INVITE</span>
                    <span class="home-4__style-text"> YOUR</span>
                    <span class="home-4__style-text"> TEAM </span> to be an integrated
                    part of ours as we
                    <span class="home-4__style-text">NAVIGATE</span> deep into
                    <span class="home-4__style-text">UNCHARTED</span><span class="home-4__style-text"> waters</span>.
                  </h1>
                </div>
              </section>
              <section
                data-bottom-s="'There’s more to see here'|true"
                class="section section--nm home-5"
              >
                <div class="container grid home-5__wrapper">
                  <TheAccordion
                    class="home-5__accordion"
                    :items="accordionItems"
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
                    <h2 class="home-6__title">
                      THE <span class="home-6__style-title">AGENCY</span>
                    </h2>
                    <div class="home-6__content">
                      <p class="home-6__desc">
                        We’re a hybrid mix of business consultants and creative
                        developers who make the lives of our clients easier. It’s a
                        collaboration of determined, strategic thinkers & doers.
                      </p>
                      <div class="home-6__btn-wrapper">
                        <button class="home-6__btn">LEARN MORE</button>
                        <p class="home-6__btn-text">about us</p>
                      </div>
                    </div>
                  </div>
                  <div class="home-6__text-wrapper">
                    <h2 class="home-6__title">
                      THE <span class="home-6__style-title">EXPERTISE</span>
                    </h2>
                    <div class="home-6__content">
                      <p class="home-6__desc">
                        We inspire innovative business opportunities for our clients by
                        creating smart communications. We go below the surface with
                        stealth instead of splash.
                      </p>
                      <div class="home-6__btn-wrapper">
                        <button class="home-6__btn">LEARN MORE</button>
                        <p class="home-6__btn-text">expertise</p>
                      </div>
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
                    <h2 class="home-7__top-title">
                      Our drive matches<span class="home-7__title-style"> yours</span>.
                    </h2>
                  </div>
                  <div
                    ref="$scrollEl"
                    class="container home-7__bottom-block"
                    data-bottom-s="'see for yourself'|false"
                  >
                    <h2 class="home-7__bottom-title">
                      YOUR<span class="home-7__title-style"> SUCCESS </span> DETERMINES
                      OURS.
                    </h2>
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
            Lorem ipsum dolor, blah words and a little blurb about our select
            case studies.
          </p>
        </div>
      </div>
      <ul class="grid container home-8__img-list">
        <li class="home-8__img-li">
          <TheImage
            src="/images/home/1.jpg"
            alt="Image"
          />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">COSTA FARMS</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink
              to="/"
              class="home-8__link"
            > view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage
            src="/images/home/2.jpg"
            alt="Image"
          />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">NOONAN GOLF CO</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink
              to="/"
              class="home-8__link"
            > view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage
            src="/images/home/3.jpg"
            alt="Image"
          />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">NULEEV</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink
              to="/"
              class="home-8__link"
            > view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage
            src="/images/home/4.jpg"
            alt="Image"
          />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">GREATWATERS</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink
              to="/"
              class="home-8__link"
            > view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage
            src="/images/home/5.jpg"
            alt="Image"
          />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">FITVINE WINE</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink
              to="/"
              class="home-8__link"
            > view case study </NuxtLink>
          </div>
        </li>
      </ul>
    </section>
    <section
      data-bottom-s="undefined"
      class="section home-9"
    >
      <div class="container home-9__wrapper">
        <div class="home-9__title-wrapper">
          <h2 class="home-9__title">SOME CLIENTS WE’VE HELPED</h2>
        </div>
        <div class="home-9__list-wrapper">
          <ul class="home-9__list">
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                White Claw Hard Seltzer
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                American gem trade association
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              > ARCTIC CAT </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                American gem trade association
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              > ARCTIC CAT </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                White Claw Hard Seltzer
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink
                to="/"
                class="home-9__link"
              >
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
