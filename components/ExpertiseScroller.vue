<script lang='ts' setup>


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
  const { ExpertiseScroller } = await import('~/assets/scripts/ExpertiseScroller')

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
  >
    <div
      ref="$container"
      class="container expertise-6__wrapper"
    >
      <h2 class="expertise-6__title">ROI</h2>
      <div class="expertise-6__scroll-wrapper">
        <div
          ref="$wrapper"
          class="expertise-6__text-wrapper"
        >
          <p
            v-for="item in items"
            :key="item._uid"
            ref="$children"
            class="expertise-6__text"
          >
            {{item.roi_point}}
          </p>

        </div>
      </div>
    </div>
  </section>
</template>