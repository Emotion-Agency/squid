<template>
  <main>
    <header class="header">
      <div class="header__wrapper">
        <div class="header__left-elem">
          <button class="header__burger">
            <span class="header__line"></span>
            <span class="header__line"></span>
            <span class="header__line"></span>
          </button>
          <Teleport to="body"> <TheMenu style="display: none" /></Teleport>
        </div>
        <NuxtLink to="/" class="header__logo">
          <IconsLogo class="header__logo-img header__logo-img--1" />
          <IconsLogoSquid class="header__logo-img header__logo-img--2" />
        </NuxtLink>
      </div>
    </header>
  </main>
</template>
