<script lang='ts' setup>
  import {iStyledText} from '~/types/story'


  interface iContent {
    title?: iStyledText[]
    text: string
  }

  interface iProps {
   blok: iContent
  }

  defineProps<iProps>()



</script>

<template>
  <div class="container">
    <div class="container text-block-2">
      <RichText
        class="text-block-2__title"
        :text="blok.title[0].text"
      />

      <p class="text-block-2__desc">
        {{blok.text}}
      </p>
    </div>
  </div>
</template>