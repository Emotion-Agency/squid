<script lang='ts' setup>

interface iContent {
    quote: string
    author: string
  }

  interface iProps {
   blok: iContent
  }

 defineProps<iProps>()
</script>



<template>
  <div class="section section--nm quote">
    <div class="container grid quote__wrapper">
      <blockquote class="quote__title">
        {{blok.quote}}
      </blockquote>
      <p class="quote__rotate-text">{{blok.author}}</p>
    </div>
  </div>
</template>