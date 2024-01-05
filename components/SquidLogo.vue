<script lang="ts" setup>
import lottie from 'lottie-web'
const { closeMenu } = useMenu()

const $el = ref<HTMLElement>(null)

onMounted(() => {
  lottie.loadAnimation({
    container: $el.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/squid.json',
  })
})
</script>

<template>
  <NuxtLink
    to="/"
    aria-label="Squid Agency"
    class="header__logo"
    @click="closeMenu()"
  >
    <div ref="$el" class="header__logo-img"></div>
  </NuxtLink>
</template>
