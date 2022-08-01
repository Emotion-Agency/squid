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
        <NextPageButton>
          Don’t worry, the water’s fine
          <span class="next-page-btn__arrow">
            <IconsArrowDown class="next-page-btn__arrow-img" />
          </span>
        </NextPageButton>
      </div>
      <TheSocials />
    </section>
    <section class="section section--nm home-2">
      <div class="container home-2__wrapper">
        <h1 class="home-2__title">
          DIVE
          <span class="home-2__style-title"> DEEP</span>
        </h1>
        <NextPageButton>
          Into uncharted territory
          <span class="next-page-btn__arrow">
            <IconsArrowDown class="next-page-btn__arrow-img" />
          </span>
        </NextPageButton>
      </div>
      <TheSocials />
    </section>
    <div class="wrapper">
      <section class="section section--nm home-3">
        <div class="container home-3__wrapper">
          <h1 class="home-3__title">
            BENEATH
            <span class="home-3__style-title home-3__style-title--1"> THE</span>
            <span class="home-3__style-title home-3__style-title--2">
              SURFACE</span
            >
          </h1>
          <NextPageButton>
            This is where we thrive
            <span class="next-page-btn__arrow">
              <IconsArrowDown class="next-page-btn__arrow-img" />
            </span>
          </NextPageButton>
        </div>
        <TheSocials />
      </section>
      <section class="section section--nm home-4">
        <div class="container home-4__wrapper">
          <h1 class="home-4__text">
            The first step in
            <span class="home-4__style-text">ELEVATING A BRAND</span> is jumping
            in. It takes <span class="home-4__style-text">COURAGE</span> and
            <span class="home-4__style-text">commitment</span>, but we don’t
            embark alone. We
            <span class="home-4__style-text">INVITE YOUR TEAM</span> to be an
            integrated part of ours as we
            <span class="home-4__style-text">NAVIGATE</span> deep into
            <span class="home-4__style-text">UNCHARTED waters</span>.
          </h1>
          <NextPageButton>
            Let’s explore
            <span class="next-page-btn__arrow">
              <IconsArrowDown class="next-page-btn__arrow-img" />
            </span>
          </NextPageButton>
        </div>
        <TheSocials />
      </section>
    </div>
  </main>
</template>
