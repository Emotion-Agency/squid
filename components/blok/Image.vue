<script lang='ts' setup>
import { iImage } from '~/types/story'

  interface iContent {
    fullscreen?: boolean
    halfscreen?: boolean
    image: iImage
  }

  interface iProps {
    blok: iContent
  }

  defineProps<iProps>()
</script>

<template>

  <div
    v-if="!blok.fullscreen"
    class="container"
  >
    <TheImage
      :transform="true"
      :src="blok.image.filename"
    />
  </div>
  <TheImage
    v-else
    :transform="true"
    :src="blok.image.filename"
  />
</template>