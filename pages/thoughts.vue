<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
</script>

<template>
  <main>
    <section class="section section--nm thoughts-1">
      <div class="thoughts-1__wrapper">
        <div class="container thoughts-1__left-block">
          <h1 class="thoughts-1__title">STAGE SEVEN</h1>
          <p class="thoughts-1__small-text">
            <span class="thoughts-1__italic-text"> Category: Project </span>
            August 28, 2022 / Miles Marmo
          </p>
          <p class="thoughts-1__desc">
            Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur. Curabitur blandit tempus
            porttitor, sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
          <button class="thoughts-1__btn">READ MORE</button>
        </div>
        <div class="thoughts-1__right-block">
          <TheImage
            class="thoughts-1__img"
            src="/images/thoughts/1.jpg"
            alt="Image"
          />
        </div>
      </div>
    </section>
  </main>
</template>
