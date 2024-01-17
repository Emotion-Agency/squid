<template>
  <div v-html="richtext"></div>
</template>

<script setup lang="ts">
import type { ISbRichtext } from 'storyblok-js-client'

interface iProps {
  text: ISbRichtext | string | []
}

const props = defineProps<iProps>()

const storyapi = useStoryblokApi()
const richtext = computed(() => {
  try {
    if (typeof props.text === 'string') return props.text

    if (Array.isArray(props.text)) return props.text.join('')
    return storyapi.richTextResolver.render(props.text)
  } catch (error) {
    return ''
  }
})
</script>
