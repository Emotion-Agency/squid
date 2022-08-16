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
    onEnter(_, done) {
      done()

      setTimeout(() => {
        resetScroll()
      }, 300)
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
    },
  }

  route.meta.pageTransition = { ...pageTransition }
}
