<script lang='ts' setup>

const isOpenMenu = ref(false)

const openMenu = () => {
  isOpenMenu.value = true
}

const closeMenu = () => {
  isOpenMenu.value = false

}

const toggleMenu = () => {
  isOpenMenu.value === true ? closeMenu() : openMenu()
}
</script>

<template>
  <main>
    <header
      class="header"
      :class="[isOpenMenu && 'header--active']"
    >
      <div class="header__wrapper">
        <div class="header__left-elem">
          <button
            class="header__burger"
            :class="[isOpenMenu && 'header__burger--active']"
            @click="toggleMenu"
          >
            <span class="header__line"></span>
            <span class="header__line"></span>
            <span class="header__line"></span>
          </button>
          <Teleport to="body">
            <TheMenu
              :class="[isOpenMenu && 'menu--active']"
              @close="closeMenu()"
            />
          </Teleport>
        </div>
        <NuxtLink
          to="/"
          class="header__logo"
          @click="closeMenu()"
        >
          <IconsLogo class="header__logo-img header__logo-img--1" />
          <IconsLogoSquid class="header__logo-img header__logo-img--2" />
        </NuxtLink>
      </div>
    </header>
  </main>
</template>
