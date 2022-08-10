<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm post-1">
      <div class="container post-1__wrapper">
        <h1 class="post-1__title">
          COSTA
          <span class="post-1__style-title"> FARMS</span>
        </h1>
      </div>
      <div class="post-1__btns-wrapper">
        <button class="post-1__btn">PREVIOUS</button>
        <button class="post-1__btn">NEXT</button>
      </div>
      <BottomNavigation />
    </section>
    <section class="section section--nm post-2">
      <div class="post-2__wrapper">
        <TheImage class="post-2__img" src="/images/post/1.jpg" alt="Image" />
      </div>
    </section>
    <section class="section post-3">
      <div class="container post-3__wrapper">
        <div class="grid post-3__text-wrapper">
          <h2 class="post-3__title">THE SCOPE</h2>
          <p class="post-3__desc">
            As the number one horticultural grower in the country, Costa Farms
            wanted to elevate their “white label” brand to a consumer-facing
            brand and launch a disruptive, bold campaign that supported both the
            corporate growth goals and brand marketing vision.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
