<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { usePosts } from '~/composables/posts'
useTransition()
useObserver('.section')

const { filteredPosts, selectCategory, activeCategory } = usePosts()
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
          <TextButton
            class="thoughts-1__btn"
            tag="nuxt-link"
            to="/portfolio/stage-seven"
          >
            READ MORE
          </TextButton>
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
          <button
            class="thoughts-2__btn"
            :class="[
              activeCategory === 'CASE STUDIES' && 'thoughts-2__btn--active',
            ]"
            @click="selectCategory('CASE STUDIES')"
          >
            CASE STUDIES
          </button>
          <div class="thoughts-2__line">/</div>
          <button
            class="thoughts-2__btn"
            :class="[
              activeCategory === 'LATEST WORK' && 'thoughts-2__btn--active',
            ]"
            @click="selectCategory('LATEST WORK')"
          >
            LATEST WORK
          </button>
          <div class="thoughts-2__line">/</div>
          <button
            class="thoughts-2__btn"
            :class="[activeCategory === 'AGENCY' && 'thoughts-2__btn--active']"
            @click="selectCategory('AGENCY')"
          >
            AGENCY
          </button>
          <button
            class="thoughts-2__btn"
            :class="[
              activeCategory === 'PROJECTS' && 'thoughts-2__btn--active',
            ]"
            @click="selectCategory('PROJECTS')"
          >
            PROJECTS
          </button>
          <div class="thoughts-2__line">/</div>
          <button
            class="thoughts-2__btn"
            :class="[
              activeCategory === 'EXPERTISE' && 'thoughts-2__btn--active',
            ]"
            @click="selectCategory('EXPERTISE')"
          >
            EXPERTISE
          </button>
          <div class="thoughts-2__line">/</div>
          <button
            class="thoughts-2__btn"
            :class="[activeCategory === 'MISC' && 'thoughts-2__btn--active']"
            @click="selectCategory('MISC')"
          >
            MISC
          </button>
          <div class="thoughts-2__line">/</div>
          <button
            class="thoughts-2__btn"
            :class="[activeCategory === 'ALL' && 'thoughts-2__btn--active']"
            @click="selectCategory('ALL')"
          >
            ALL
          </button>
        </div>
        <ul v-if="filteredPosts.length" class="thoughts-2__img-list">
          <Post
            v-for="item in filteredPosts"
            :id="item.id"
            :key="item.id"
            :title="item.title"
            :category="item.category"
            :client="item.client"
            :date="item.date"
            :description="item.description"
            :image="item.image"
            :link="`/portfolio/${item.slug}/`"
          />
        </ul>
        <div v-else class="no-posts">no posts yet</div>
        <button v-if="filteredPosts.length" class="thoughts-2__posts-btn">
          VIEW OLDER POSTS
        </button>
      </div>
    </section>
    <TheFooter />
  </main>
</template>