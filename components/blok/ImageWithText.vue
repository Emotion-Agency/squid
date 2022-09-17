<script lang='ts' setup>
import { iImage } from '~/types/story'

  interface iContent {
    image: iImage
    title: string
    disable_parallax: boolean
  }

  interface iProps {
    blok: iContent
  }

  defineProps<iProps>()
</script>

<template>
  <div class="image-with-text">
    <TheImage
      class="halfscreen"
      :transform="true"
      :src="blok.image.filename"
      :disabled-parallax="blok.disable_parallax"
    />
    <h2 class="h2 image-with-text__h">{{blok.title}}</h2>
  </div>
</template>