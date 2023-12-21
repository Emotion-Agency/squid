<script lang="ts" setup>
interface iPoint {
  _uid: string
  roi_point: string
}

interface iProps {
  title: string
  items: iPoint[]
}

defineProps<iProps>()

let es

const $el = ref(null)
const $wrapper = ref(null)
const $children = ref(null)
const $container = ref(null)

onMounted(async () => {
  const { ExpertiseScroller } = await import(
    '~/assets/scripts/ExpertiseScroller'
  )

  es = new ExpertiseScroller($wrapper.value, $el.value, $children.value)
})

onBeforeUnmount(() => {
  es && es.destroy()
})
</script>

<template>
  <section ref="$el" class="section expertise-6">
    <div ref="$container" class="container expertise-6__wrapper">
      <div class="expertise-6__content">
        <h2 class="expertise-6__title">ROI</h2>
        <p class="expertise-6__desc">
          Lorem ipsum dolor, blah words and a little blurb about our select case
          studies.
        </p>
      </div>
      <div class="expertise-6__scroll-wrapper">
        <ul ref="$wrapper" class="expertise-6__list-items">
          <li
            ref="$children"
            v-for="item in items"
            :key="item._uid"
            class="expertise-6__item"
          >
            <h3 class="expertise-6__item-title">
              White Claw Hard Seltzer becomes #1 hard seltzer brand, growing
              300%+ for the first 4 years.
            </h3>
            <p class="expertise-6__text">White Claw Hard Seltzer</p>
            <NuxtLink to="/portfolio/" class="expertise-6__btn"
              >VIEW CASE STUDY</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
