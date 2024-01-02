<script lang="ts" setup>
import SquidLogo from './SquidLogo.vue'

const $el = ref(null)

const { isOpenMenu, closeMenu, toggleMenu, headerColor } = useMenu()

const { isLoaded } = useLoadState()

let navbarPos

onMounted(async () => {
  const { default: NavbarPos } = await import(
    '~/assets/scripts/utils/navbarPos'
  )
  navbarPos = new NavbarPos()
  navbarPos.init()
})

onBeforeUnmount(() => {
  navbarPos && navbarPos.destroy()
})
</script>

<template>
  <header
    ref="$el"
    class="header navbar"
    :class="[
      isOpenMenu && 'header--active',
      !isLoaded && 'loading',
      `header--${headerColor}`,
    ]"
  >
    <div class="header__wrapper">
      <div class="header__left-elem">
        <button
          aria-label="Burger menu"
          class="header__burger"
          :class="[isOpenMenu && 'header__burger--active']"
          @click="toggleMenu"
        >
          <span class="header__line"></span>
          <span class="header__line"></span>
          <span class="header__line"></span>
        </button>
      </div>
      <SquidLogo />
    </div>
    <TheMenu :class="[isOpenMenu && 'menu--active']" @close="closeMenu()" />
  </header>
</template>
