<script setup lang="ts">
onMounted(async () => {
  const { SmoothScroll } = await import('@emotionagency/smoothscroll')
  const { raf } = await import('@/assets/scripts/utils/ea')

  window.ss = new SmoothScroll({
    mobile: true,
    // breakpoint: 1060,
    passive: false,
    isFixed: false,
    friction: 0.07,
    stepSize: 0.9,
    scrollbar: true,
    useKeyboard: false,
    raf,
  })
})
</script>

<template>
  <div id="scroll-container">
    <slot />
  </div>
</template>