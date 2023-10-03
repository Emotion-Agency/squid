<script lang="ts" setup>
import { useFooterStory } from '~~/composables/stories/footer.story'
const { closeMenu } = useMenu()

const { story } = await useFooterStory()
</script>

<template>
  <ul class="socials">
    <li class="socials__li">
      <a
        aria-label="Facebook link"
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
        aria-label="Linkedin link"
        :href="story?.linkedin"
        class="socials__link"
        target="_blank"
        rel="noreferer noopener"
      >
        <IconsLinkedin class="socials__socials-img" />
      </a>
    </li>
    <li class="socials__li">
      <a
        aria-label="Instagram link"
        :href="story?.instagram"
        class="socials__link"
        target="_blank"
        rel="noreferer noopener"
      >
        <IconsInstagram class="socials__socials-img" />
      </a>
    </li>
    <li class="socials__li">
      <NuxtLink to="/contact/" class="socials__link" @click="closeMenu">
        contact
      </NuxtLink>
    </li>
  </ul>
</template>
