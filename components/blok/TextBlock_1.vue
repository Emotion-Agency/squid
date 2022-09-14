<script lang='ts' setup>
  
  interface iContent {
    title?: string
    main_text: string
    aligned?: boolean
  }

  interface iProps {
   blok: iContent
  }

 defineProps<iProps>()

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
      >{{blok.title}}</h2>
      <p class="text-block-1__desc">
        {{ blok.main_text}}
      </p>
    </div>
  </div>
</template>