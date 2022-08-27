<script lang='ts' setup>
interface iProps {
  isFixed?: boolean
}

defineProps<iProps>()

const onClick = () => {
  window.ss.state.target = window.ss.state.target + window.innerHeight
}
</script>

<template>
  <button
    class="next-page-btn bottom-nav-btn"
    :class="[isFixed && 'bottom-nav-btn--fixed']"
    @click="onClick"
  >
    <slot></slot>
    <span class="next-page-btn__arrow">
      <IconsArrowDown class="next-page-btn__arrow-img" />
    </span>
  </button>
</template>
