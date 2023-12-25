<script lang="ts" setup>
interface iPoint {
  _uid: string
  roi_point_title: string
  roi_point_description: string
}

interface iProps {
  title: string
  description: string
  items: iPoint[]
  isHome?: boolean
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
  <section
    ref="$el"
    class="section expertise-6"
    :class="isHome && 'expertise-6--home'"
  >
    <div ref="$container" class="container expertise-6__wrapper">
      <TheSquare class="expertise-6__square" />
      <div class="expertise-6__content">
        <h2 class="expertise-6__title">{{ title }}</h2>
        <p class="expertise-6__desc">
          {{ description }}
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
              {{ item.roi_point_title }}
            </h3>
            <p class="expertise-6__text">{{ item.roi_point_description }}</p>
            <NuxtLink to="/portfolio/" class="expertise-6__btn"
              >VIEW CASE STUDY</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
