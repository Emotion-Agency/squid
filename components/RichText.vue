<template>
  <div v-html="richtext"></div>
</template>
 
<script setup lang="ts">
import { Richtext } from 'storyblok-js-client'


interface iProps {
  text: Richtext
}

const props = defineProps<iProps>()


const storyapi = useStoryblokApi()
const richtext = computed(() => {
  return storyapi.richTextResolver.render(props.text)
})
</script>