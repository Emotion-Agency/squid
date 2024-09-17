<script setup lang="ts">
interface iProps {
  videoId: string
}

const props = defineProps<iProps>()

const $el = ref(null)

onMounted(() => {
  const containerHeight = window.innerHeight
  const containerWidth = window.innerWidth

  // @ts-ignore
  new window.Vimeo.Player($el.value, {
    id: props.videoId,
    loop: true,
    autoplay: true,
    background: true,
    playsinline: true,
    responsive: containerWidth > containerHeight,
    // width: window.innerWidth,
    height: containerHeight,
  })
})
</script>

<template>
  <div ref="$el" class="s-video">
    <slot />
  </div>
</template>
