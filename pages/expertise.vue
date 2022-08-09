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
  </main>
</template>
