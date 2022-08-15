<script lang='ts' setup>
const emit = defineEmits(['close'])
</script>

<template>
  <div class="menu">
    <div class="container grid menu__wrapper">
      <ul class="menu__list">
        <li class="menu__li">
          <NuxtLink
            to="/expertise/"
            class="menu__text"
            @click="emit('close')"
          > EXPERTISE </NuxtLink>
        </li>
        <li class="menu__li">
          <NuxtLink
            to="/thoughts?filter=case_studies"
            class="menu__text"
            @click="emit('close')"
          > CASE STUDIES </NuxtLink>
        </li>
        <li class="menu__li">
          <NuxtLink
            to="/about/"
            class="menu__text"
            @click="emit('close')"
          > ABOUT US </NuxtLink>
        </li>
        <li class="menu__li">
          <NuxtLink
            to="/thoughts/"
            class="menu__text"
            @click="emit('close')"
          > SQUID THOUGHTS </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
