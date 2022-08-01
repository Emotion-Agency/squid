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
        <NextPageButton>
          Don’t worry, the water’s fine
          <span class="home-1__arrow">
            <IconsArrowDown class="home-1__arrow-img" />
          </span>
        </NextPageButton>
      </div>
      <TheSocials />
    </section>
  </main>
</template>
