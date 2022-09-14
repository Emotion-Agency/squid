<script lang="ts" setup>
import { iImage } from '~/types/story'

interface iGridItem {
  image: iImage
  _uid: string
}

interface iContent {
  title: string
  image: iGridItem[]
}

interface iProps {
  blok: iContent
}

defineProps<iProps>()
</script>

<template>
  <div class="image-grid">
    <div class="container image-grid__wrapper">
      <h2 class="image-grid__title">
        {{ blok.title }}
      </h2>
      <ul class="image-grid__img-list">
        <li
          v-for="item in blok.image"
          :key="item._uid"
          class="image-grid__li"
          data-parallax="-0.1"
        >
          <TheImage
            :transform="true"
            class="image-grid__img"
            :src="item.image.filename"
            :alt="item.image.alt"
          />
          <div
            v-if="item.image.title"
            class="image-grid__block"
          >
            <p class="image-grid__text">
              {{ item.image.title }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
