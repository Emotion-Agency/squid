import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class RotateOnScroll {
  constructor($el) {
    this.$el = $el

    gsap.registerPlugin(ScrollTrigger)
  }

  animate() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: document.body,
          pin: false,
          scrub: 0.2,
          start: 'top top',
          scroller: document.getElementById('scroll-container'),
          end: '+=10000',
        },
      })
      .to(this.$el, {
        rotation: 360 * 5,
        duration: 1,
        ease: 'none',
      })
  }

  destroy() {
    this.tl && this.tl.kill()
  }
}
