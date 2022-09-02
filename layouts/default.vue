<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { useFonts } from '~/composables/fonts'

useFonts()

const appStore = useAppStore()

const parallaxInit = async () => {
  const { Parallax } = await import('@emotionagency/parallax')
  window.parallax = new Parallax({ mobile: false })
}

onMounted(async () => {
  const { default: supportsWebP } = await import('supports-webp')

  if (await supportsWebP) {
    appStore.setIsWebp(true)
  } else {
    appStore.setIsWebp(false)
  }
  const { hello } = await import('~/assets/scripts/utils/hello')
  hello()

  const { winSizes } = await import('~/assets/scripts/utils/winSizes')
  const { resize } = await import('@/assets/scripts/utils/ea')
  resize.on(winSizes)

  await parallaxInit()

})

onBeforeUnmount(() => {
  window.parallax && window.parallax.destroy()
})
</script>

<template>
  <div id="app">

    <Head>
      <Title>Emotion</Title>
      <Meta
        name="viewport"
        conten="width=device-width, initial-scale=1"
      >
      </Meta>
      <Link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      >
      </Link>
    </Head>
    <AppGrid />
    <UiLoader />

    <SmoothScroll>
      <TheHeader />
      <slot />
    </SmoothScroll>

  </div>
</template>
