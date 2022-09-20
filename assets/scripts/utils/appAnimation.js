import gsap from 'gsap'
import textAnimate from './textAnimate'

export const appAnimation = () => {
  const $aT = document.querySelectorAll('[data-a-t]:not(.page-leave-to)')
  const $aO = document.querySelectorAll('[data-a-o]:not(.page-leave-to)')
  const $ah = document.querySelectorAll('[data-a-h]:not(.page-leave-to)')

  const tl = gsap.timeline()
  const ease = 'power2.out'

  $aT.length &&
    tl.to($aT, { duration: 1, y: '0%', opacity: 1, ease, stagger: 0.1 }, 0.2)
  $aO.length && tl.to($aO, { duration: 1, opacity: 1, ease }, 0.2)

  setTimeout(() => {
    $ah.length &&
      $ah.forEach(el => {
        textAnimate.in(el)
      })
  }, 200)
}
