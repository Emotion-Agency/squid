<script lang='ts' setup>
interface iProps {
  isFixed?: boolean
}

defineProps<iProps>()
</script>

<template>
  <button
    class="next-page-btn bottom-nav-btn"
    :class="[isFixed && 'bottom-nav-btn--fixed']"
  >
    <slot></slot>
    <span class="next-page-btn__arrow">
      <IconsArrowDown class="next-page-btn__arrow-img" />
    </span>
  </button>
</template>
