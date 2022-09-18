<script setup lang="ts">
import { useTransition } from '~/composables/transition'
import { useAboutStory } from '~/composables/stories/about.story'

useTransition()
useObserver('.section')

const { story } = await useAboutStory()

const scrollBottom = () => {
  window.ss.state.target = window.ss.max
}


</script>

<template>
  <main>
    <PageMeta
      v-if="story.meta.length"
      :meta="story.meta[0]"
    />
    <section class="section section--nm about-1">
      <div class="container about-1__wrapper">
        <div
          v-if="story.screen_1[0]"
          v-editable="story.screen_1[0]"
          class="about-1__text-wrapper"
        >
          <RichText
            class="about-1__title"
            :text="story.screen_1[0].text"
          />
        </div>
      </div>
      <TheSocials class="bottom-nav-socials" />
      <NextBlockButton>Scroll</NextBlockButton>
    </section>
    <section
      v-editable="story"
      class="section about-2"
    >
      <div class="container about-2__wrapper">
        <div class="grid about-2__text-wrapper">
          <p class="about-2__text">
            {{story.screen_2}}
          </p>
        </div>
      </div>
    </section>
    <section class="section about-3">
      <BlokImage
        v-if="story.screen_3[0].image"
        v-editable="story.screen_3[0]"
        class="about-3__img"
        :blok="{
          image: story.screen_3[0].image,
          fullscreen: story.screen_3[0].fullscreen,
          halfscreen: story.screen_3[0].halfscreen,
        }"
      />
    </section>
    <section
      v-if="story.screen_4[0]"
      v-editable="story.screen_4[0]"
      class="section about-4"
    >
      <BlokTableText2
        class="about-4__table-text"
        :blok="{
          title: story.screen_4[0].title,
          content: story.screen_4[0].content
        }"
      />
    </section>
    <section
      v-if="story.screen_5[0]"
      v-editable="story.screen_5[0]"
      class="section about-5"
    >
      <BlokImageGrid
        class="about-5__img-grid"
        :blok="{
          title: story.screen_5[0].title,
          image: story.screen_5[0].image
        }"
      />
    </section>
    <section
      v-if="story.screen_6[0]"
      v-editable="story.screen_6[0]"
      class="section about-6"
    >
      <div class="container about-6__wrapper">
        <div class="grid about-6__text-wrapper">
          <h2 class="about-6__title">{{story.screen_6[0].title}}</h2>
          <p class="about-6__text">
            {{story.screen_6[0].main_text}}
          </p>
        </div>
      </div>
    </section>
    <section
      v-if="story.screen_7[0]"
      v-editable="story.screen_7"
      class="section about-7"
    >
      <BlokImageGrid
        class="about-7__img-grid"
        :blok="{
          title: story.screen_7?.title,
          image: story.screen_7
        }"
      />
    </section>
    <section
      v-if="story.screen_8[0]"
      v-editable="story.screen_8[0]"
      class="section about-8"
    >
      <BlokTableText :blok="story.screen_8[0]" />
    </section>
    <section
      v-if="story"
      v-editable="story"
      class="section about-9"
    >
      <div class="container about-9__wrapper">
        <div class="grid about-9__content">
          <h2 class="about-9__title">{{story.last_title}}</h2>
        </div>
        <div class="about-9__text-wrapper">
          <button
            class="about-9__text"
            @click="scrollBottom"
          >{{story.last_text_1}}</button>
          <button
            class="about-9__text"
            @click="scrollBottom"
          >{{story.last_text_2}}</button>
          <button
            class="about-9__text"
            @click="scrollBottom"
          >{{story.last_text_3}}</button>
        </div>
      </div>
    </section>
    <TheFooter />
  </main>
</template>
