<script lang="ts" setup>
import { useBreakLine } from '~/composables/breakLine'

interface iContent {
  title?: string
  main_text: string
  aligned?: boolean
}

interface iProps {
  blok: iContent
}

defineProps<iProps>()

const breakLine = useBreakLine()
</script>

<template>
  <div class="container">
    <div
      class="text-block-1"
      :class="!blok.aligned && 'text-block-1--aligned'"
    >
      <h2
        v-if="blok.title"
        class="text-block-1__title"
      >{{ blok.title }}</h2>
      <p
        v-if="blok.main_text"
        class="text-block-1__desc"
        v-html="breakLine(blok.main_text)"
      />
    </div>
  </div>
</template>
