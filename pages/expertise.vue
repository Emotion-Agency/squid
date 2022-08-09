<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm expertise-1">
      <div class="container expertise-1__wrapper">
        <div class="expertise-1__text-wrapper">
          <h1 class="expertise-1__title">
            WE ARE
            <span class="expertise-1__style-title"> EXPERT</span> COMMUNICATORS.
          </h1>
        </div>
      </div>
      <BottomNavigation class="navigation-notfixed" />
    </section>
    <section class="section expertise-2">
      <div class="container expertise-2__wrapper">
        <div class="grid expertise-2__text-wrapper">
          <p class="expertise-2__text">
            We are here to fight for what’s right for your business and
            challenge you to do the same. Etiam porta sem malesuada magna mollis
            euismod. Etiam porta sem malesuada magna mollis euismod. Vivamus
            sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Nullam quis risus eget urna mollis ornare vel eu leo. Fusce dapibus,
            tellus ac cu.
          </p>
        </div>
      </div>
    </section>
    <section class="section expertise-3">
      <div class="container expertise-3__wrapper">
        <IconsCircle class="expertise-3__img" />
      </div>
    </section>
    <section class="section expertise-4">
      <div class="container expertise-4__wrapper">
        <h2 class="expertise-4__title">SPECIALTIES</h2>
        <div class="expertise-4__list-wrapper">
          <ul class="expertise-4__list">
            <li class="expertise-4__li">
              <h3 class="expertise-4__block-title">Strategic planning</h3>
              <p class="expertise-4__desc">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                et. Maecenas sed diam eget risus varius blandit sit amet non
                magna. Morbi leo risus, porta ac consectetur ac, vestibulum at
                eros. Maecenas sed diam eget risus varius blandit sit amet non
                magna.
              </p>
            </li>
            <li class="expertise-4__li">
              <h3 class="expertise-4__block-title">CREATIVE & design</h3>
              <p class="expertise-4__desc">
                Fusce dapibus, tellus ac cursus commodo, tortor mauris
                condimentum nibh, ut fermentum massa justo sit amet risus.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section expertise-5">
      <div class="container grid expertise-5__wrapper">
        <TheAccordion class="expertise-5__accordion">
          <p class="expertise-5__rotate-text">MASTER PLAN</p>
        </TheAccordion>
      </div>
    </section>
    <section class="section expertise-6">
      <div class="container expertise-6__wrapper">
        <h2 class="expertise-6__title">ROI</h2>
        <p class="expertise-6__text">
          COSTA FARMS MET THEIR $1 BILLION FINANCIAL GOAL.
        </p>
      </div>
    </section>
    <section class="section expertise-7">
      <div class="container expertise-7__wrapper">
        <div class="grid expertise-7__text-wrapper">
          <h2 class="expertise-7__title">A DESIGN AGENCY WITH A GAMEPLAN.</h2>
          <p class="expertise-7__desc">
            Aenean lacinia bibendum nulla sed consectetur. Donec sed odio dui.
            Etiam porta sem malesuada magna mollis euismod. Etiam porta sem
            malesuada magna mollis euismod. Vivamus sagittis lacus vel augue
            laore.
          </p>
        </div>
      </div>
    </section>

    <section class="section expertise-8">
      <div class="container expertise-8__wrapper">
        <button class="expertise-8__btn">
          <span class="expertise-8__text">Step One</span>
          <span class="expertise-8__text">CONTACT US</span>
          <span class="expertise-8__arrow">
            <IconsArrowBtnDown />
          </span>
        </button>
      </div>
    </section>
  </main>
</template>
