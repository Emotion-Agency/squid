<template>
  <div
    v-if="!isCompleted"
    ref="$el"
    class="loader container"
  >
    <div class="loader__container">
      <div
        ref="$percent"
        class="loader__percent"
      >
        <span class="loader__percent-span">0%</span>
      </div>
      <div
        ref="$progress"
        class="loader__progress"
      ></div>
    </div>

  </div>
</template>

<script lang='ts' setup>
import gsap from 'gsap'


const { isLoaded, isInEditor } = useLoadState()


const isCompleted = ref(false)

 watch(isInEditor,() => {
  if (isInEditor.value) {
    isCompleted.value = true
    isLoaded.value = true
    document.body.classList.add('in-storyblok')

  }
 })

let loader
const $el = ref(null)
const $progress = ref(null)
const $percent = ref(null)

const emit = defineEmits(['loaded'])

const animation = () => {
  const tl = gsap.timeline({
    onComplete: () => {
      isLoaded.value = true
      emit('loaded')
      isCompleted.value = true
    }
  })

  tl.to($progress.value,{
    duration: 1.8,
    x: '100%',
    ease: 'power2.inOut',
  })
  tl.to($percent.value,{
    duration: 1.6,
    y: '-100%',
    opacity: 0,
    ease: 'power2.inOut',
  },0.2)
  tl.to($el.value,{
    duration: 0.5,
    opacity: 0,
    ease: 'power2.inOut',
  }, 1)
}
const afterLoad = () => {

  animation()
  window.ss && (window.ss.isFixed = false)
}

onMounted(async () => {
  if (isInEditor.value) {
    isCompleted.value = true
    isLoaded.value = true
    document.body.classList.add('in-storyblok')
    return
  }
  const { Loader } = await import('~/assets/scripts/Loader')
  loader = new Loader(afterLoad)
  loader.init()
})

</script>