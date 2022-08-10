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
    <section class="section thoughts-2">
      <div class="container thoughts-2__wrapper">
        <p class="thoughts-2__title">CATEGORIES</p>
        <div class="thoughts-2__filter">
          <button class="thoughts-2__btn">CASE STUDIES</button>
          <div class="thoughts-2__line">/</div>
          <button class="thoughts-2__btn">LATEST WORK</button>
          <div class="thoughts-2__line">/</div>
          <button class="thoughts-2__btn">AGENCY</button>
          <button class="thoughts-2__btn">PROJECTS</button>
          <div class="thoughts-2__line">/</div>
          <button class="thoughts-2__btn">EXPERTISE</button>
          <div class="thoughts-2__line">/</div>
          <button class="thoughts-2__btn">MISC</button>
          <div class="thoughts-2__line">/</div>
          <button class="thoughts-2__btn thoughts-2__btn--active">ALL</button>
        </div>
        <ul class="grid thoughts-2__img-list">
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/2.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/3.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/4.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/5.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/6.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/7.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/8.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/9.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
          <li class="thoughts-2__li">
            <TheImage
              class="thoughts-2__img"
              src="/images/thoughts/10.jpg"
              alt="Image"
            />
            <div class="thoughts-2__block">
              <div class="thoughts-2__text-wrapper">
                <h3 class="thoughts-2__block-title">TCF BANK</h3>
                <p class="thoughts-2__date">August 24, 2021 / Miles Marmo</p>
                <p class="thoughts-2__text">
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Vestibulum id ligula porta felis
                  euismod semper.
                </p>
                <button class="thoughts-2__block-btn">READ MORE</button>
              </div>
              <p class="thoughts-2__category">Category Project</p>
            </div>
          </li>
        </ul>
        <button class="thoughts-2__posts-btn">VIEW OLDER POSTS</button>
      </div>
    </section>
  </main>
</template>
