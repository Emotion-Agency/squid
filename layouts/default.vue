<script setup lang="ts">
import { useFonts } from '~/composables/fonts'
import emitter from 'tiny-emitter/instance.js'

useFonts()

const { isInEditor } = useLoadState()

const parallaxInit = async () => {
  const { Parallax } = await import('@emotionagency/parallax')

  window.parallax = new Parallax({ mobile: false })
}

onMounted(async () => {


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
    })

    sbBridge.pingEditor(() => {
      if (sbBridge.isInEditor()) {
        isInEditor.value = true
      }
    })
  }, 200)
})

onBeforeUnmount(() => {
  window.parallax && window.parallax.destroy()
})

useHead({
  htmlAttrs: {
    lang: 'en-US',
  },
})
</script>

<template>
  <div id="app">

    <Head>
      <Title>Squid Agency</Title>
      <Meta
        name="viewport"
        content="width=device-width"
      >
      </Meta>
      <Meta
        property="og:locale"
        content="en_US"
      />
      <Meta
        property="og:type"
        content="website"
      />
      <Meta
        property="og:url"
        content="https://agencysquid.com/"
      />
      <Meta
        property="article:publisher"
        content="https://www.facebook.com/agencysquid/"
      />
      <Meta
        property="og:image"
        content="/meta/Squid-Wordmark.png"
      />
      <Meta
        property="og:image:width"
        content="180"
      />
      <Meta
        property="og:image:height"
        content="180"
      />
      <Meta
        property="og:image:type"
        content="image/png"
      />
      <Meta
        name="twitter:card"
        content="summary_large_image"
      />
      <Meta
        name="twitter:image"
        content="/meta/twitter.png"
      />
      <Link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      >
      </Link>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </Head>
    <AppLoader />

    <AppGrid />
    <UiLoader />

    <SmoothScroll>
      <TheHeader />
      <slot />
    </SmoothScroll>
  </div>
</template>
