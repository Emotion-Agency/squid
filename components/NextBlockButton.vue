<script lang="ts" setup>
interface iProps {
  isFixed?: boolean
  isRotated?: boolean
  isVisible?: boolean
}

withDefaults(defineProps<iProps>(), {
  isVisible: true,
})

const onClick = () => {
  window.ss.state.target = window.ss.state.target + window.innerHeight
}
</script>

<template>
  <button
    class="next-page-btn bottom-nav-btn"
    :class="[
      isFixed && 'bottom-nav-btn--fixed',
      !isVisible && 'bottom-nav-btn--hidden',
    ]"
    @click="onClick"
  >
    <slot></slot>
    <span
      class="next-page-btn__arrow"
      :class="[isRotated && 'next-page-btn__arrow--rotated']"
    >
      <IconsArrowDown class="next-page-btn__arrow-img" />
    </span>
  </button>
</template>
