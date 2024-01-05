<script lang="ts" setup>
import Richtext from 'storyblok-js-client'

interface iContent {
  title: Richtext
  text: Richtext
}

interface iProps {
  blok: iContent
}

defineProps<iProps>()
</script>

<template>
  <div class="section section--nm dark-block">
    <div class="container dark-block__wrapper">
      <div class="grid dark-block__text-wrapper">
        <RichText :text="blok.title" class="dark-block__title" />
        <RichText class="dark-block__text" :text="blok.text" />
      </div>
    </div>
  </div>
</template>
