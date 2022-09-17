<script lang='ts' setup>
const emit = defineEmits(['close'])

interface iMenuItem {
  to: string,
  text: string
}

const menuItems: iMenuItem[] = [
  {
    to: '/expertise/',
    text: 'EXPERTISE',
  },
  {
    to: '/portfolio/',
    text: 'CASE STUDIES',
  },
  {
    to: '/about/',
    text: 'ABOUT US',
  },
  {
    to: '/squid-blog/',
    text: 'INCLINGS',
  }
]
</script>

<template>
  <div class="menu">
    <div class="menu__bg"></div>
    <div class="container grid menu__wrapper">
      <ul class="menu__list">
        <li
          v-for="item in menuItems"
          :key="item.text"
          class="menu__li"
        >
          <NuxtLink
            :to="item.to"
            class="menu__text"
            @click="emit('close')"
          > <span>{{ item.text }}</span> </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
