<script lang="ts" setup>
const onClick = () => {
  window.ss.state.target = window.ss.max
}
</script>

<template>
  <section class="expertise-8">
    <div class="container grid expertise-8__wrapper">
      <TheSquare class="expertise-8__square" />
      <button class="expertise-8__btn" @click="onClick">
        <span class="expertise-8__text">Step One</span>
        <span class="expertise-8__text">CONTACT US</span>
        <span class="expertise-8__arrow">
          <IconsArrowBtnDown />
        </span>
      </button>
    </div>
  </section>
</template>
