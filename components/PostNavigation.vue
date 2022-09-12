<script lang='ts' setup>
  interface iProps {
    prevPostLink: string
    nextPostLink: string
    allPostsLink: string
  }

  defineProps<iProps>()

</script>

<template>
  <nav class="post-nav">
    <div class="container post-nav__wrapper">
      <NuxtLink
        :to="prevPostLink"
        class="post-nav__arrow-btn"
        aria-label="Previous post"
      >
        <IconsLongArrowLeft class="post-nav__arrow" />
      </NuxtLink>
      <NuxtLink
        :to="allPostsLink"
        class="post-nav__btn"
      >VIEW ALL POSTS</NuxtLink>
      <NuxtLink
        :to="nextPostLink"
        class="post-nav__arrow-btn"
        aria-label="Next post"
      >
        <IconsLongArrowRight class="post-nav__arrow" />
      </NuxtLink>
    </div>
  </nav>
</template>