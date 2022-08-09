<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm about-1">
      <div class="container about-1__wrapper">
        <div class="about-1__text-wrapper">
          <h1 class="about-1__title">
            WE ARE THE AGENCY
            <span class="about-1__style-title"> SQUID</span>.
          </h1>
        </div>
      </div>
      <BottomNavigation class="navigation-notfixed" />
    </section>
    <section class="section about-2">
      <div class="container about-2__wrapper">
        <div class="about-2__text-wrapper">
          <p class="about-2__text">
            We are an industry-agnostic agency that focuses on doing great work
            for great people. We think big. We think smart. We ask the tough
            questions, and shed light in dark spaces. We are a driven team that
            partners with driven teams. We are a passionate group of talented
            individuals that are here to make your business better.
          </p>
        </div>
      </div>
    </section>
    <section class="section about-3">
      <div class="container grid about-3__wrapper">
        <TheImage class="about-3__img" src="/images/about/1.jpg" alt="Image" />
      </div>
    </section>
  </main>
</template>
