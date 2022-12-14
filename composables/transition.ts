import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from '~/assets/scripts/utils/resetScroll'

export const useTransition = () => {
  const route = useRoute()
  const { isLoaded, isInEditor, isWaiting } = useLoadState()

  watch(isLoaded, async () => {
    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import(
        '~/assets/scripts/utils/appAnimation'
      )
      setTimeout(() => {
        appAnimation()
      }, 150)
    }
  })

  onMounted(async () => {
    setTimeout(() => {
      resetScroll()
    }, 500)

    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import(
        '~/assets/scripts/utils/appAnimation'
      )
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })
  const pageTransition: TransitionProps = {
    duration: 250,
    mode: 'out-in',
    css: false,
    appear: true,
    onEnter(el, done) {
      isWaiting.value = false
      document.documentElement.style.cursor = 'auto'
      setTimeout(() => {
        resetScroll()
      }, 150)

      gsap.fromTo(
        el,
        { opacity: 0 },
        { duration: 0.5, opacity: 1, onComplete: done }
      )
    },

    onLeave(el, done) {
      isWaiting.value = true
      document.documentElement.style.cursor = 'wait'
      setTimeout(() => {
        window.ss.isFixed = true
      }, 500)

      gsap.fromTo(
        el,
        { opacity: 1 },
        { duration: 0.5, opacity: 0, y: -100, onComplete: done }
      )
      setTimeout(() => {
        resetScroll()
      }, 500)
    },
  }

  route.meta.pageTransition = { ...pageTransition }
}
