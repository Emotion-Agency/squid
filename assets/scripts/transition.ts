import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from './utils/resetScroll'

export const pageTransition: TransitionProps = {
  duration: 250,
  mode: 'out-in',
  css: false,
  appear: true,
  onEnter(el, done) {
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
    document.documentElement.style.cursor = 'wait'
    setTimeout(() => {
      window.ss.isFixed = true
    }, 200)

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
