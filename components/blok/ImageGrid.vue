<script lang="ts" setup>
import { iImage } from '~/types/story'
import Richtext from 'storyblok-js-client'

interface iGridItem {
  image: iImage
  _uid: string
}

interface iContent {
  title: string | Richtext
  image: iGridItem[]
  disable_parallax?: boolean
}

interface iProps {
  blok: iContent
}

defineProps<iProps>()
</script>

<template>
  <div class="image-grid">
    <div class="container image-grid__wrapper">
      <RichText :text="blok.title" class="image-grid__title" />
      <ul
        class="image-grid__img-list"
        :class="blok.title && 'image-grid__img-list--with-title'"
      >
        <li
          v-for="item in blok.image"
          :key="item._uid"
          class="image-grid__li"
          :data-parallax="!blok.disable_parallax && -0.1"
        >
          <figure>
            <TheImage
              :transform="true"
              :disabled-parallax="blok.disable_parallax"
              class="image-grid__img"
              :src="item.image.filename"
              :alt="item.image.alt"
            />
            <figcaption v-if="item.image.name" class="figcaption">
              {{ item.image.name }}
            </figcaption>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>
