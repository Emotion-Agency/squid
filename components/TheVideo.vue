<script setup lang="ts">
interface iProps {
  videoId: string
}

const props = defineProps<iProps>()

const $el = ref(null)

onMounted(() => {
  const containerHeight = $el.value.offsetHeight
  const containerWidth = $el.value.offsetWidth

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
  <div style="background-color: var(--bg)" ref="$el" class="video">
    <slot />
  </div>
</template>
