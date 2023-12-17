<script lang="ts" setup>
import { resize } from '~/assets/scripts/utils/ea/resize/resize'

interface iProps {
  title: string
  text: string
  id: string
  isOpen: boolean
  lastItem: boolean
  numberItem: number
}

const props = defineProps<iProps>()

const emit = defineEmits(['clicked'])

const $el = ref(null)
const $child = ref(null)
const height = ref(0)

const onResize = () => {
  height.value = $child.value.scrollHeight * 0.01
  $el.value.style.setProperty('--h', `${height.value}px`)
}

const onClick = () => {
  resize.on(onResize)
  emit('clicked', props.id)
}

onBeforeUnmount(() => {
  resize.off(onResize)
})
</script>

<template>
  <button
    ref="$el"
    class="accordion__btn"
    :class="[isOpen && 'opened']"
    @click="onClick"
  >
    <div class="accordion__line" />
    <div class="accordion__content">
      <p class="accordion__number">0{{ numberItem }}</p>
      <h2 class="accordion__title">{{ title }}</h2>
      <div class="accordion__plus-container">
        <span></span>
        <span></span>
      </div>
      <p ref="$child" class="accordion__text">
        {{ text }}
      </p>
    </div>
    <div v-if="lastItem" class="accordion__line" />
  </button>
</template>
