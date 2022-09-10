<script setup lang="ts">
import { useTransition } from '~/composables/transition'
useTransition()
useObserver('.section')
</script>

<template>
  <main>
    <section class="section section--nm blog-1">
      <div class="blog-1__img-wrapper">
        <TheImage class="blog-1__img" src="/images/blog/1.jpg" alt="Image" />
      </div>
      <TheSocials class="bottom-nav-socials" />
    </section>
    <div class="container blog-wrapper">
      <article class="article">
        <section class="section section--nm blog-2">
          <div class="blog-2__wrapper">
            <div class="blog-2__main">
              <p class="blog-2__category-name">Category: Project</p>
              <p class="blog-2__date">August 28, 2022 / Miles Marmo</p>
              <h1 class="blog-2__title">CLARITY HARD SPARKLING WATER</h1>
              <div class="blog-2__long-text">
                <p class="blog-2__desc">
                  Eel River Brewing is the country’s first 100% certified
                  organic brewery and regionally has had great success in
                  northern California and southern Oregon. They observed that
                  not everyone who visited their “on-premises” operations was
                  looking for a microbrew. The large consumer gap was wanting a
                  cleaner, lighter, and “healthier” adult beverage. So, they
                  developed a hard sparkling water line that represented the Eel
                  River organic beer brand with its ethos: a clean beverage with
                  simple, high-quality ingredients.
                </p>
                <p class="blog-2__desc">
                  Eel River Brewing used its knowledge and proprietary brew
                  process to create a product that only used three clean,
                  natural ingredients – water, flavoring, alcohol offering 5%
                  ABV and less than 100 calories.
                </p>
              </div>
            </div>
            <div class="blog-2__about">
              <div class="blog-2__line"></div>
              <div class="grid blog-2__about-list">
                <div class="blog-2__about-block">
                  <h3 class="blog-2__about-title">Services Provided:</h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Business Consulting</li>
                    <li class="blog-2__about-text">Naming</li>
                    <li class="blog-2__about-text">Branding</li>
                    <li class="blog-2__about-text">Packaging Design</li>
                    <li class="blog-2__about-text">Web UI/UX Design</li>
                    <li class="blog-2__about-text">Web Development</li>
                    <li class="blog-2__about-text">Marketing</li>
                    <li class="blog-2__about-text">Advertising</li>
                  </ul>
                </div>
                <div class="blog-2__about-block">
                  <h3 class="blog-2__about-title">Client:</h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Eel River Brewing</li>
                  </ul>
                  <h3 class="blog-2__about-title blog-2__about-title--distance">
                    Project:
                  </h3>
                  <ul class="blog-2__about-wrapper">
                    <li class="blog-2__about-text">Product Launch</li>
                    <li class="blog-2__about-text">B2B + B2C</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="blog-2__images">
              <TheImage
                class="blog-2__img"
                src="/images/blog/2.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-2__img"
                src="/images/blog/3.jpg"
                alt="Image"
              />
            </div>
          </div>
        </section>
        <section class="section blog-3">
          <div class="blog-3__wrapper">
            <div class="blog-3__text-wrapper">
              <h2 class="blog-3__title">Clarity’s Differentiators</h2>
              <p class="blog-3__desc">
                We knew it was wise to capitalize on the parent brewery’s, Eel
                River Brewing, brand equity and their true subject matter
                expertise on producing cleaner, better-for-you, boozy drinks.
                Those two factors were strong differentiators in a very
                competitive marketplace and influences packaging updates,
                sales/marketing materials, and website.
              </p>
            </div>
            <div class="blog-3__img-wrapper">
              <TheImage
                class="blog-3__img"
                src="/images/blog/7.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-3__img"
                src="/images/blog/8.jpg"
                alt="Image"
              />
            </div>
            <div class="blog-3__centered-wrapper">
              <p class="blog-3__centered-text">
                Knowing the consumer was predominately millennials, we designed
                and built a mobile first website to engage consumers on-the-go
                and deliver messages to them at retail inspiring trail and
                conversion.
              </p>
            </div>
          </div>
        </section>
        <section class="section blog-4">
          <div class="blog-4__wrapper">
            <h2 class="blog-4__title">HITTING THE MARKET</h2>
            <div class="blog-4__list-wrapper">
              <ul class="blog-4__list">
                <li class="blog-4__li">
                  <h3 class="blog-4__block-title">OUR PHILOSOPHY</h3>
                  <p class="blog-4__desc">
                    We are changing the standard of agency culture by putting
                    the well-being of the person first. We respect, appreciate,
                    and cheer-on our employees in all aspects of their lives as
                    we understand that without them, we wouldn’t be successful.
                  </p>
                </li>
                <li class="blog-4__li">
                  <h3 class="blog-4__block-title">OUR VALUES</h3>
                  <p class="blog-4__desc">
                    We believe that mental health is the foundation for
                    purposeful thinking, successful creative, and a positive
                    work environment. In order for everyone to bring their best
                    selves and best work to the agency, we understand that we
                    need our team to be mentally nourished, personally
                    supported, and occupationally fulfilled.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="blog-4__img-wrapper">
            <TheImage
              class="blog-4__img"
              src="/images/blog/9.jpg"
              alt="Image"
            />
            <div class="blog-4__double-imgs">
              <TheImage
                class="blog-4__double-img"
                src="/images/blog/10.jpg"
                alt="Image"
              />
              <TheImage
                class="blog-4__double-img"
                src="/images/blog/11.jpg"
                alt="Image"
              />
            </div>
            <TheImage
              class="blog-4__img"
              src="/images/blog/12.jpg"
              alt="Image"
            />
          </div>
        </section>
      </article>
      <aside class="aside">
        <div class="aside__wrapper">
          <div class="aside__filter">
            <h2 class="aside__filter-title">CATEGORIES</h2>
            <ul class="aside__filter-list">
              <li class="aside__filter-li">
                <button class="aside__filter-btn">CASE STUDIES</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">LATEST WORK</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">EXPERTISE</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">CAREERS</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">AGENCY LIFE</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">MISC</button>
              </li>
              <li class="aside__filter-li">
                <button class="aside__filter-btn">VIEW ALL</button>
              </li>
            </ul>
          </div>
          <div class="aside__posts">
            <h2 class="aside__posts-main">LATEST POSTS</h2>
            <ul class="aside__posts-list">
              <li class="aside__posts-li">
                <NuxtLink to="/" class="aside__link">
                  <img
                    class="aside__posts-img"
                    src="/images/blog/4.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">Now hiring!</p>
                    </div>
                    <p class="aside__posts-name">Careers</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="aside__posts-li">
                <NuxtLink to="/" class="aside__link">
                  <img
                    class="aside__posts-img"
                    src="/images/blog/5.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">
                        The importance of mental health care for your team.
                      </p>
                    </div>
                    <p class="aside__posts-name">Agency Life</p>
                  </div>
                </NuxtLink>
              </li>
              <li class="aside__posts-li">
                <NuxtLink to="/" class="aside__link">
                  <img
                    class="aside__posts-img"
                    src="/images/blog/6.jpg"
                    alt="Image"
                  />
                  <div class="aside__posts-block">
                    <div class="aside__posts-text">
                      <p class="aside__posts-date">August 24, 2021</p>
                      <p class="aside__posts-title">New website: who dis?</p>
                    </div>
                    <p class="aside__posts-name">Latest Work</p>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="aside__tags">
            <h2 class="aside__tags-main">TAGS</h2>
            <p class="aside__tags-text">
              Advertising / Art / Agency / SEO / Digital
            </p>
          </div>
        </div>
      </aside>
    </div>
  </main>
  <TheFooter />
</template>
