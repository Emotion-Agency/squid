import gsap from 'gsap'
import { raf } from '@emotionagency/utils'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class OnScrollAppereance {
  constructor($el, $wrapper, opts = {}) {
    gsap.registerPlugin(ScrollTrigger)
    this.$el = $el
    this.$wrapper = $wrapper
    this.offset = opts.offset || 0
    this.breakpoint = opts.breakpoint || 960

    this.animation()

    this.onScrolling = this.onScrolling.bind(this)

    raf.on(this.onScrolling)
  }

  onScrolling() {
    console.log(
      this.$el.getBoundingClientRect().left -
        this.$wrapper.getBoundingClientRect().width +
        window.innerWidth
    )
  }

  animation() {
    if (screen.width > 1060) {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$wrapper,
          pin: false,
          start: this.$el.getBoundingClientRect().left,
          scrub: 0.1,
          scroller: document.getElementById('scroll-container'),
        },
      })
    } else {
      this.tl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$el,
          pin: false,
          end: '+=bottom',
          scrub: 0.1,
          scroller: document.getElementById('scroll-container'),
        },
      })
    }

    this.tl.to(this.$el, {
      y: 0,
      ease: 'linear.none',
    })
  }

  destroy() {
    this.tl.kill()
  }
}
