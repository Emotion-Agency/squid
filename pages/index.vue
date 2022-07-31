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
          <span class="home-1__italic-title"> IN</span>
        </h1>
        <button class="home-1__btn">
          Don’t worry, the water’s fine
          <span class="home-1__arrow">
            <IconsArrowDown class="home-1__arrow-img" />
          </span>
        </button>
      </div>
      <ul class="home-1__socials">
        <li class="home-1__li">
          <a
            href="#"
            class="home-1__link"
            target="_blank"
            rel="noreferer noopener"
          >
            <IconsFacebook class="home-1__socials-img" />
          </a>
        </li>
        <li class="home-1__li">
          <a
            href="#"
            class="home-1__link"
            target="_blank"
            rel="noreferer noopener"
          >
            <IconsLinkedin class="home-1__socials-img" />
          </a>
        </li>
        <li class="home-1__li">
          <NuxtLink to="/" class="home-1__link"> contact </NuxtLink>
        </li>
      </ul>
    </section>
  </main>
</template>
