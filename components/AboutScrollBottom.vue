<script lang="ts" setup>
const onClick = () => {
  window.ss.state.target = window.ss.max
}
</script>

<template>
  <section class="section about-scroll">
    <div class="container grid about-scroll__wrapper">
      <TheSquare class="about-scroll__square" />
      <button class="about-scroll__btn" @click="onClick">
        <span class="about-scroll__text">WANT TO GET IN TOUCH?</span>
        <span class="about-scroll__arrow">
          <IconsArrowBtnDown />
        </span>
      </button>
    </div>
  </section>
</template>
