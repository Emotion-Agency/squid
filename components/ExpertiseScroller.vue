<script lang='ts' setup>
let es
onMounted(async () => {
  const { ExpertiseScroller } = await import('~/assets/scripts/ExpertiseScroller')
  const $el = document.querySelector('.expertise-6')
  const $wrapper = document.querySelector('.expertise-6__text-wrapper')
  const $children = document.querySelectorAll('.expertise-6__text')

  es = new ExpertiseScroller($el,$wrapper,$children)
})

onBeforeUnmount(() => {
  es && es.destroy()
})
</script>

<template>
  <section class="section expertise-6">
    <div class="container expertise-6__wrapper">
      <h2 class="expertise-6__title">ROI</h2>
      <div class="expertise-6__scroll-wrapper">
        <div class="expertise-6__text-wrapper">
          <p class="expertise-6__text">
            COSTA FARMS MET THEIR $1 BILLION FINANCIAL GOAL.
          </p>
          <p class="expertise-6__text">
            Id senectus cras magna cursus id aliquet sit fames dignissim.
          </p>
          <p class="expertise-6__text">
            Morbi porttitor diam tristique sodales neque id nisl tempus.
          </p>
          <p class="expertise-6__text">
            Feugiat in mauris porttitor consequat est tortor viverra.
          </p>
          <p class="expertise-6__text">
            COSTA FARMS MET THEIR $1 BILLION FINANCIAL GOAL.
          </p>
          <p class="expertise-6__text">
            Id senectus cras magna cursus id aliquet sit fames dignissim.
          </p>
          <p class="expertise-6__text">
            Morbi porttitor diam tristique sodales neque id nisl tempus.
          </p>
          <p class="expertise-6__text">
            Feugiat in mauris porttitor consequat est tortor viverra.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>