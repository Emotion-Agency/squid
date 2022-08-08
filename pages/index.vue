<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm home-1">
      <div class="container home-1__wrapper">
        <h1 class="home-1__title">
          JUMP
          <span class="home-1__style-title"> IN</span>
        </h1>
      </div>
      <BottomNavigation />
    </section>
    <section class="section section--nm home-2">
      <div class="container home-2__wrapper">
        <h1 class="home-2__title">
          DIVE
          <span class="home-2__style-title"> DEEP</span>
        </h1>
      </div>
    </section>
    <div class="wrapper">
      <section class="section section--nm home-3">
        <div class="container home-3__wrapper">
          <h1 class="home-3__title">
            BENEATH
            <span class="home-3__title-wrapper">
              <span class="home-3__style-title"> THE</span>
              <span class="home-3__style-title"> SURFACE</span></span
            >
          </h1>
        </div>
      </section>
      <section class="section section--nm home-4">
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
            <span class="home-4__style-text">UNCHARTED</span
            ><span class="home-4__style-text"> waters</span>.
          </h1>
        </div>
      </section>
      <section class="section section--nm home-5">
        <div class="container grid home-5__wrapper">
          <TheAccordion class="home-5__accordion">
            <p class="home-5__rotate-text">WE ARE</p>
          </TheAccordion>
        </div>
      </section>
      <section class="section section--nm home-6">
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
      <section class="section section--nm home-7">
        <div class="grid home-7__wrapper">
          <div class="container home-7__top-block">
            <h2 class="home-7__top-title">
              Our drive matches<span class="home-7__title-style"> yours</span>.
            </h2>
          </div>
          <div class="container home-7__bottom-block">
            <h2 class="home-7__bottom-title">
              YOUR<span class="home-7__title-style"> SUCCESS </span> DETERMINES
              OURS.
            </h2>
          </div>
        </div>
      </section>
    </div>
    <section class="section section--nm home-8">
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
          <TheImage src="/images/home/1.jpg" alt="Image" />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">COSTA FARMS</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink to="/" class="home-8__link"> view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage src="/images/home/2.jpg" alt="Image" />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">NOONAN GOLF CO</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink to="/" class="home-8__link"> view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage src="/images/home/3.jpg" alt="Image" />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">NULEEV</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink to="/" class="home-8__link"> view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage src="/images/home/4.jpg" alt="Image" />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">GREATWATERS</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink to="/" class="home-8__link"> view case study </NuxtLink>
          </div>
        </li>
        <li class="home-8__img-li">
          <TheImage src="/images/home/5.jpg" alt="Image" />
          <div class="home-8__text-wrapper">
            <p class="home-8__name">FITVINE WINE</p>
            <div class="home-8__line-wrapper">
              <span class="home-8__line"></span>
            </div>
            <NuxtLink to="/" class="home-8__link"> view case study </NuxtLink>
          </div>
        </li>
      </ul>
    </section>
    <section class="section section--nm home-9">
      <div class="container home-9__wrapper">
        <div class="home-9__title-wrapper">
          <h2 class="home-9__title">SOME CLIENTS WE’VE HELPED</h2>
        </div>
        <div class="home-9__list-wrapper">
          <ul class="home-9__list">
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                White Claw Hard Seltzer
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                American gem trade association
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link"> ARCTIC CAT </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                American gem trade association
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link"> ARCTIC CAT </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                White Claw Hard Seltzer
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
            <li class="home-9__li">
              <NuxtLink to="/" class="home-9__link">
                LUCE LINE BREWING CO
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <TheContacts/>
  </main>
</template>
