<script lang='ts' setup>
  import {iStyledText} from '~/types/story'
import { useBreakLine } from '~/composables/breakLine'



  interface iContent {
    title?: iStyledText[]
    text: string
  }

  interface iProps {
   blok: iContent
  }

  defineProps<iProps>()


    const breakLine = useBreakLine()

</script>

<template>
  <div class="container">
    <div class="container text-block-2">
      <RichText
        class="text-block-2__title"
        :text="blok.title[0].text"
      />

      <p
        class="text-block-2__desc"
        v-html="breakLine(blok.text)"
      />
    </div>
  </div>
</template>