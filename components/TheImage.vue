<script setup lang="ts">
interface iProps {
  src: string
  alt: string
}

defineProps<iProps>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    loading="lazy"
  />
</template>
