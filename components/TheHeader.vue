<template>
  <main>
    <header class="header">
      <div class="container header__wrapper">
        <div class="header__left-elem">
          <button class="header__burger">
            <span class="header__line"></span>
            <span class="header__line"></span>
            <span class="header__line"></span>
          </button>
          <ul class="header__nav">
            <li class="header__li">
              <NuxtLink to="/" class="header__text"> EXPERTISE </NuxtLink>
            </li>
            <li class="header__li">
              <NuxtLink to="/" class="header__text"> CASE STUDIES </NuxtLink>
            </li>
            <li class="header__li">
              <NuxtLink to="/" class="header__text"> ABOUT US </NuxtLink>
            </li>
            <li class="header__li">
              <NuxtLink to="/" class="header__text"> SQUID THOUGHTS </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="header__right-elem">
          <NuxtLink to="/" class="header__logo">
            <IconsTheLogo class="header__logo-img" />
          </NuxtLink>
        </div>
      </div>
    </header>
  </main>
</template>
