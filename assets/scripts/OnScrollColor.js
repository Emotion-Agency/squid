import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class OnScrollColor {
  constructor($el, opts = {}) {
    gsap.registerPlugin(ScrollTrigger)
    this.$el = $el
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
        end: window.innerHeight * 2.5,
        scrub: 0.1,
        scroller: document.getElementById('scroll-container'),
      },
    })

    this.tl.fromTo(
      this.$el,
      {
        backgroundColor: 'rgba(0, 17, 35, 1)',
        color: 'rgba(255, 255, 255, 1)',
      },
      {
        backgroundColor: 'rgba(0, 17, 35, 1)',
        color: 'rgba(255, 255, 255, 1)',
        ease: 'linear.none',
      }
    )
  }

  destroy() {
    this.tl.kill()
  }
}
