import { raf, delayPromise } from '~/assets/scripts/utils/ea'

export const useBottomBlock = () => {
  const bottomText = ref('Scroll')
  const isRotated = ref(false)
  const isVisible = ref(true)
  const $items = ref(null)

  const animate = () => {
    $items.value.forEach($item => {
      const data = $item.dataset.bottomS
      const text = data.split('|')[0].replace("'", '').replace("'", '')
      const rotated = data.split('|')[1] === 'true'

      if (
        $item.getBoundingClientRect().top <= 0 &&
        $item.getBoundingClientRect().left <= 0
      ) {
        bottomText.value = text
        isRotated.value = rotated

        isVisible.value = !(data === 'undefined')
      }
    })
  }

  onMounted(async () => {
    await delayPromise(500)
    $items.value = document.querySelectorAll('[data-bottom-s]')

    raf.on(animate)
  })

  onBeforeUnmount(() => {
    raf.off(animate)
  })

  return { bottomText, isRotated, isVisible }
}
