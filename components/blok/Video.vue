<script lang='ts' setup>
  interface iContent {
    fullscreen?: boolean
    platform?: 'youtube' | 'vimeo'
    url: string
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
    <p>Video Component</p>
  </div>
</template>