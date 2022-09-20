import gsap from 'gsap'
import SplitType from 'split-type'

const textAnimate = () => {
  let $toAnimate

  const prepare = $el => {
    if ($el.classList.contains('splitted')) {
      return
    }

    const text = new SplitType($el, {
      types: 'chars, words',
      tagName: 'span',
    })

    text.words?.forEach(word => {
      word.innerHTML = `<span class="word-inner">${word.innerHTML}</span>`
      word.setAttribute('data-word', word.innerText)
    })

    $toAnimate = [...$el.querySelectorAll('.char')]
    $el.classList.add('splitted')

    console.log($toAnimate)
  }

  return {
    in: $el => {
      prepare($el)
      $el.style.opacity = 1

      gsap.to($toAnimate, {
        duration: 1,
        x: '0%',
        opacity: 1,
        ease: 'expo.out',
        stagger: 0.06,
        overwrite: true,
      })
    },
    out: ($el, to = '110%') => {
      prepare($el)

      gsap.to($toAnimate, {
        duration: 1,
        x: to,
        opacity: 0,
        ease: 'expo.out',
        stagger: 0.02,
        overwrite: true,
      })
    },
  }
}

export default textAnimate()
