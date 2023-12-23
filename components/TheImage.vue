<script setup lang="ts">
import { transformImage } from '~/assets/scripts/storyblokImage'

interface iProps {
  src?: string
  alt?: string
  imgClass?: string
  transform?: boolean
  scale?: number
  width?: number
  height?: number
  isLazy?: boolean
  disabledParallax?: boolean
}

const props = withDefaults(defineProps<iProps>(), {
  transform: true,
  scale: 1.07,
  isLazy: true,
  alt: 'Squid',
})

const width = props.width ?? 0
const height = props.height ?? 0

const transformedSrc = computed(() => {
  if (props.width || props.height) {
    return transformImage(props.src, { size: `${width}x${height}` })
  } else {
    return transformImage(props.src)
  }
})

const getImageResolution = computed(() => {
  const resolution = (height / width) * 100
  return resolution.toFixed(2) + '%'
})

const resolution = ref(null)

if (width && height) {
  resolution.value = getImageResolution
}

const source = computed(() => {
  return props.transform ? transformedSrc.value : props.src
})
</script>

<template>
  <div
    v-if="src"
    class="p-img-wrapper"
    :style="resolution && { paddingBottom: resolution.value, height: '0px' }"
  >
    <div
      class="p-img-container"
      :class="resolution && 'p-img-container--cover'"
      :data-parallax="!disabledParallax && 0.06"
    >
      <img
        class="parallax-img"
        :class="[imgClass]"
        :src="source"
        :alt="alt"
        :data-parallax="!disabledParallax && 0.06"
        :data-scale="!disabledParallax && scale"
        :data-scale-animation="!disabledParallax && true"
        data-pli
      />
    </div>
  </div>
</template>
