<script lang='ts' setup>
  import { useFooterStory } from '~~/composables/stories/footer.story'
const { closeMenu } = useMenu()


const { story } = await useFooterStory()
</script>

<template>
  <ul class="socials">
    <li class="socials__li">
      <a
        :href="story?.facebook"
        class="socials__link"
        target="_blank"
        rel="noreferer noopener"
      >
        <IconsFacebook class="socials__socials-img" />
      </a>
    </li>
    <li class="socials__li">
      <a
        :href="story?.linkedin"
        class="socials__link"
        target="_blank"
        rel="noreferer noopener"
      >
        <IconsLinkedin class="socials__socials-img" />
      </a>
    </li>
    <li class="socials__li">
      <NuxtLink
        to="/contacts/"
        class="socials__link"
        @click="closeMenu"
      > contact </NuxtLink>
    </li>
  </ul>
</template>
