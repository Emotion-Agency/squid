<script setup lang="ts">
import { useAppStore } from '~/store/app'
import { useFonts } from '~/composables/fonts'
import emitter from 'tiny-emitter/instance.js'

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

  setTimeout(() => {

    const sbBridge = new window.StoryblokBridge()

    sbBridge.on(['input', 'published', 'change'], event => {

      emitter.emit('storyChange', event.story)
      // initStory.value = event.story
    })
  }, 200)
})

onBeforeUnmount(() => {
  window.parallax && window.parallax.destroy()
})


useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<template>
  <div id="app">

    <Head>
      <Title>Squid Agency</Title>
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
      <Script src="https://player.vimeo.com/api/player.js"></Script>

    </Head>
    <AppGrid />
    <UiLoader />

    <SmoothScroll>
      <TheHeader />
      <slot />
    </SmoothScroll>

  </div>
</template>
