import gsap from 'gsap'
import { TransitionProps } from 'nuxt/dist/app/compat/capi'
import { resetScroll } from '~/assets/scripts/utils/resetScroll'

export const useTransition = () => {
  const { isLoaded, isInEditor } = useLoadState()

  watch(isLoaded, async () => {
    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import(
        '~/assets/scripts/utils/appAnimation'
      )
      setTimeout(() => {
        appAnimation()
      }, 150)
    }
  })

  onMounted(async () => {
    setTimeout(() => {
      resetScroll()
    }, 500)

    if (isLoaded.value && !isInEditor.value) {
      const { appAnimation } = await import(
        '~/assets/scripts/utils/appAnimation'
      )
      setTimeout(() => {
        appAnimation()
      }, 800)
    }
  })
}
