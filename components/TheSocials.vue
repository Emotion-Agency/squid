<script lang='ts' setup>
const { closeMenu } = useMenu()

</script>

<template>
  <ul class="socials">
    <li class="socials__li">
      <a
        href="#"
        class="socials__link"
        target="_blank"
        rel="noreferer noopener"
      >
        <IconsFacebook class="socials__socials-img" />
      </a>
    </li>
    <li class="socials__li">
      <a
        href="#"
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
