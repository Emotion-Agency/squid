import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from '~/assets/scripts/utils/resetScroll'

export const useTransition = () => {
  const route = useRoute()
  const pageTransition: TransitionProps = {
    duration: 250,
    mode: 'out-in',
    css: false,
    appear: true,
    onEnter(el, done) {
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
