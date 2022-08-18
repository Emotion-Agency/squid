<script lang='ts' setup>
import { resize } from '~/assets/scripts/utils/ea/resize/resize'


interface iProps {
  title: string
  text: string
  id: string
  isOpen: boolean
}

const props = defineProps<iProps>()


const emit = defineEmits(['clicked'])

const $el = ref(null)
const $child = ref(null)
const height = ref(0)

const onResize = () => {
  height.value = $child.value.scrollHeight * 0.01
  $el.value.style.setProperty('--h',`${height.value}px`)
}

const onClick = () => {
  resize.on(onResize)
  emit('clicked',props.id)
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
    <h2 class="accordion__title">{{ title }}</h2>
    <p
      ref="$child"
      class="accordion__text"
    >
      {{ text }}
    </p>
    <p class="accordion__line"></p>
  </button>
</template>