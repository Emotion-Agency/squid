import { resetScroll } from '~/assets/scripts/utils/resetScroll'
import { appAnimation } from '~/assets/scripts/utils/appAnimation'

export const useTransition = () => {
  const { isLoaded, isInEditor } = useLoadState()

  watch(isLoaded, () => {
    if (isLoaded.value && !isInEditor.value) {
      setTimeout(() => {
        appAnimation()
      }, 150)
    }
  })

  onMounted(() => {
    setTimeout(() => {
      resetScroll()
    }, 500)

    if (isLoaded.value && !isInEditor.value) {
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })
}
