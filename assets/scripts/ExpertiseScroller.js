import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

export class ExpertiseScroller {
  constructor($el, $wrapper, $children) {
    this.$el = $el
    this.$wrapper = $wrapper
    this.$children = [...$children]

    gsap.registerPlugin(ScrollTrigger)

    this.init()
  }

  init() {
    if (screen.width > 1060) {
      this.setHeight()
      this.animate()
    }
  }

  animate() {
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$el.querySelector('.container'),
          pin: false,
          scrub: 0.1,
          start: 'top',
          end: this.$el.getBoundingClientRect().bottom - window.innerHeight,
          scroller: document.getElementById('scroll-container'),
        },
      })
      .to(this.$wrapper, {
        y:
          -this.$wrapper.scrollHeight +
          this.$children[this.$children.length - 1].scrollHeight,
        ease: 'none',
      })
  }

  setHeight() {
    this.$el.style.height =
      this.$children.length * (window.innerHeight * 0.5) + 'px'
  }

  destroy() {
    this.tl && this.tl.kill()
  }
}
