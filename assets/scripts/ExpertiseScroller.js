import Scrolling from './Scrolling'
import { resize } from './utils/ea'

export class ExpertiseScroller extends Scrolling {
  constructor($wrapper, $el, $children) {
    super($wrapper, $el)
    this.$el = $wrapper

    this.$children = $children
    this.resize = this.resize.bind(this)
    resize.on(this.resize)
  }

  resize() {
    // this.setHeight()
    if (screen.width >= 1060) {
      super.init()
    }
  }

  get length() {
    return this.$children.length
  }

  get top() {
    const min = 0
    const max =
      this.$el.getBoundingClientRect().height -
      this.$children[this.length - 1].getBoundingClientRect().height
    return this.computeFromMinToMax(min, max)
  }

  setHeight() {
    this.$el.style.height = this.length * (window.innerHeight * 0.5) + 'px'
  }

  onScroll() {
    super.onScroll()

    this.$el.style.transform = `translateY(${-this.top + 'px'})`
  }
  destroy() {
    super.destroy()
    resize.off(this.resize)
  }
}
