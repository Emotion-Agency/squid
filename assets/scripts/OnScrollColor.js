import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class OnScrollColor {
  constructor($el, opts = {}) {
    gsap.registerPlugin(ScrollTrigger)
    this.$el = $el
    this.$home = document.querySelector('.video__overlay')
    // this.$wrapper = $wrapper
    this.offset = opts.offset || 0
    this.breakpoint = opts.breakpoint || 960

    this.animation()
  }

  animation() {
    this.tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.$el,
        pin: false,
        start: 0,
        end: window.innerHeight * 1.5,
        scrub: 0.1,
        scroller: document.getElementById('scroll-container'),
      },
    })

    this.tl.fromTo(
      this.$home,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      0
    )
  }

  destroy() {
    this.tl.kill()
  }
}
