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
    <section class="section post-4">
      <div class="container post-4__wrapper">
        <div class="post-4__line"></div>
        <ul class="grid post-4__list">
          <li class="post-4__li">
            <h3 class="post-4__title">Role</h3>
            <p class="post-4__text">
              Research<br />
              Strategy<br />
              Creative<br />
              Direction<br />
              Production
            </p>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Deliverables</h3>
            <p class="post-4__text">
              Marketing & Branding Strategy<br />
              Branding/Art Direction<br />
              Copywriting/Brand Voice<br />
              Videography/Photography<br />
              Digital Presence<br />
              Website Design<br />
              Social Media Strategy/Launch
            </p>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Client</h3>
            <p class="post-4__text">Costa Farms</p>
          </li>
          <li class="post-4__li">
            <h3 class="post-4__title">Company Type</h3>
            <p class="post-4__text">
              B2C / B2B<br />
              Agriculture
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="section post-5">
      <div class="post-5__wrapper">
        <TheImage class="post-5__img" src="/images/post/2.jpg" alt="Image" />
      </div>
    </section>
    <section class="section post-6">
      <div class="container post-6__wrapper">
        <TheImage class="post-6__img" src="/images/post/3.jpg" alt="Image" />
      </div>
    </section>
    <section class="section post-7">
      <div class="container post-7__wrapper">
        <div class="grid post-7__content-wrapper">
          <h3 class="post-7__title">
            THE <span class="post-7__style-title"> CHALLENGE</span>
          </h3>
          <p class="post-7__desc">
            For over 60 years, Costa Farms has provided major retailers with
            indoor, blooming, and perennial plants and grown to be the #1 grower
            of indoor plants in the U.S. With the business goal of expanding the
            company from a $700,000 in sales to a $ billion in 2 years meant
            that brand awareness and an aggressive push-pull brand marketing
            strategy needed to be strategized and executed quickly.
          </p>
          <h3 class="post-7__title">
            THE <span class="post-7__style-title"> SOLUTION</span>
          </h3>
          <p class="post-7__desc">
            Creating a consumer brand identity that captured the company vision,
            supported the brand pyramid, and connected with loyal and new
            consumers by being legible in retail and digital channels was the
            goal. From that, a launch campaign was concepted and produced to
            prove that Costa Farms grows and brings plants to everyone,
            regardless of growing experience, allowing self-expression within
            any interior space.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
