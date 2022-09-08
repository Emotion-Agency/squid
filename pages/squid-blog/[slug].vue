<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')
</script>

<template>
  <main>
    <section class="section section--nm blog-1">
      <div class="blog-1__img-wrapper"></div>
    </section>
    <section class="section blog-2">
      <div class="container blog-2__wrapper">
        <div class="blog-2__left-block">
          <div class="blog-2__main">
            <p class="blog-2__category-name">Category: Project</p>
            <p class="blog-2__date">August 28, 2022 / Miles Marmo</p>
            <h1 class="blog-2__title">CLARITY HARD SPARKLING WATER</h1>
            <p class="blog-2__desc">
              Eel River Brewing is the country’s first 100% certified organic
              brewery and regionally has had great success in northern
              California and southern Oregon. They observed that not everyone
              who visited their “on-premises” operations was looking for a
              microbrew. The large consumer gap was wanting a cleaner, lighter,
              and “healthier” adult beverage. So, they developed a hard
              sparkling water line that represented the Eel River organic beer
              brand with its ethos: a clean beverage with simple, high-quality
              ingredients.
              <br /><br />
              Eel River Brewing used its knowledge and proprietary brew process
              to create a product that only used three clean, natural
              ingredients – water, flavoring, alcohol offering 5% ABV and less
              than 100 calories.
            </p>
          </div>
          <div class="blog-2__about">
            <div class="blog-2__line"></div>
            <div class="grid blog-2__about-list">
              <div class="blog-2__about-block">
                <h3 class="blog-2__about-title">Services Provided:</h3>
                <div class="blog-2__about-wrapper">
                  <p class="blog-2__about-text">Business Consulting</p>
                  <p class="blog-2__about-text">Naming</p>
                  <p class="blog-2__about-text">Branding</p>
                  <p class="blog-2__about-text">Packaging Design</p>
                  <p class="blog-2__about-text">Web UI/UX Design</p>
                  <p class="blog-2__about-text">Web Development</p>
                  <p class="blog-2__about-text">Marketing</p>
                  <p class="blog-2__about-text">Advertising</p>
                </div>
              </div>
              <div class="blog-2__about-block">
                <h3 class="blog-2__about-title">Client:</h3>
                <div class="blog-2__about-wrapper">
                  <p class="blog-2__about-text">Eel River Brewing</p>
                </div>
                <h3 class="blog-2__about-title blog-2__about-title--distance">
                  Project:
                </h3>
                <div class="blog-2__about-wrapper">
                  <p class="blog-2__about-text">Product Launch</p>
                  <p class="blog-2__about-text">B2B + B2C</p>
                </div>
              </div>
            </div>
          </div>
          <div class="blog-2__images"></div>
        </div>
        <div class="blog-2__right-block">
          <div class="blog-2__filter">
            <h2 class="blog-2__filter-title">CATEGORIES</h2>
            <ul class="blog-2__filter-list">
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">CASE STUDIES</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">LATEST WORK</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">EXPERTISE</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">CAREERS</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">AGENCY LIFE</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">MISC</button>
              </li>
              <li class="blog-2__filter-li">
                <button class="blog-2__filter-btn">VIEW ALL</button>
              </li>
            </ul>
          </div>
          <div class="blog-2__posts">
            <h2 class="blog-2__posts-main">LATEST POSTS</h2>
            <ul class="blog-2__posts-list">
              <li class="blog-2__posts-li">
                <NuxtLink to="/" class="blog-2__link">
                  <TheImage
                    class="blog-2__posts-img"
                    src="/images/blog/4.jpg"
                    alt="Image"
                  />
                  <div class="blog-2__posts-block">
                    <div class="blog-2__posts-text">
                      <p class="blog-2__posts-date">August 24, 2021</p>
                      <p class="blog-2__posts-title">Now hiring!</p>
                    </div>
                    <p class="blog-2__posts-name">Careers</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="blog-2__posts-li">
                <NuxtLink to="/" class="blog-2__link">
                  <TheImage
                    class="blog-2__posts-img"
                    src="/images/blog/5.jpg"
                    alt="Image"
                  />
                  <div class="blog-2__posts-block">
                    <div class="blog-2__posts-text">
                      <p class="blog-2__posts-date">August 24, 2021</p>
                      <p class="blog-2__posts-title">
                        The importance of mental health care for your team.
                      </p>
                    </div>
                    <p class="blog-2__posts-name">Agency Life</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="blog-2__posts-li">
                <NuxtLink to="/" class="blog-2__link">
                  <TheImage
                    class="blog-2__posts-img"
                    src="/images/blog/6.jpg"
                    alt="Image"
                  />
                  <div class="blog-2__posts-block">
                    <div class="blog-2__posts-text">
                      <p class="blog-2__posts-date">August 24, 2021</p>
                      <p class="blog-2__posts-title">New website: who dis?</p>
                    </div>
                    <p class="blog-2__posts-name">Latest Work</p>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="blog-2__tags">
            <h2 class="blog-2__tags-main">TAGS</h2>
            <p class="blog-2__tags-text">
              Advertising / Art / Agency / SEO / Digital
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
