<script lang="ts" setup>
const emit = defineEmits(['close'])

interface iMenuItem {
  to: string
  text: string
  description: string
}

const menuItems: iMenuItem[] = [
  {
    to: '/expertise/',
    text: 'EXPERTISE',
    description: 'Our offerings, experience, and process',
  },
  {
    to: '/portfolio/',
    text: 'CASE STUDIES',
    description: 'Current robust projects.',
  },
  {
    to: '/about/',
    text: 'ABOUT US',
    description: 'Our story, values, and principles',
  },
  {
    to: '/squid-blog/',
    text: 'SQUID THOUGHTS',
    description: 'Mini case studies, resources, and thoughts.',
  },
]

const menuContent = {
  firstTitle:
    'We are here to fight for what’s right for your business and challenge you to do the same.',
  secondTitle: 'Want to discuss a new project or get in touch?',
  email: 'hello@agencysquid.com',
}
</script>

<template>
  <div class="menu">
    <div class="menu__bg"></div>
    <div class="container grid menu__wrapper">
      <ul class="menu__list">
        <li v-for="item in menuItems" :key="item.text" class="menu__li">
          <NuxtLink :to="item.to" class="menu__link" @click="emit('close')">
            <span class="menu__text">{{ item.text }}</span>
            <span class="menu__desc">{{ item.description }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="menu__content">
        <h2 class="menu__main-title">{{ menuContent.firstTitle }}</h2>
        <div class="menu__contact-block">
          <span class="menu__connect-text">Let’s connect</span>
          <h2 class="menu__main-title menu__main-title--2">
            {{ menuContent.secondTitle }}
          </h2>
          <a class="menu__email" :href="`mailto:${menuContent.email}}`">
            <span class="menu__email-text"> {{ menuContent.email }} </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
