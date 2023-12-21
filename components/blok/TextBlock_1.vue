<script lang="ts" setup>
import Richtext from 'storyblok-js-client'

interface iContent {
  title?: string | any
  main_text: string | Richtext
  aligned?: boolean
}

interface iProps {
  blok: iContent
}

const props = defineProps<iProps>()

const typeOfMainText = computed(() => {
  return typeof props.blok.main_text
})

const breakLine = useBreakLine()
</script>

<template>
  <div class="container">
    <div class="text-block-1" :class="!blok.aligned && 'text-block-1--aligned'">
      <RichText
        v-if="blok.title"
        class="text-block-1__title"
        :text="blok.title[0].text"
      />
      <p
        v-if="blok.main_text && typeOfMainText === 'string'"
        v-html="breakLine(blok.main_text)"
      />
      <div
        v-else-if="blok.main_text && typeOfMainText === 'object'"
        class="text-block-1__desc"
      >
        <RichText :text="blok.main_text" />
      </div>
    </div>
  </div>
</template>
