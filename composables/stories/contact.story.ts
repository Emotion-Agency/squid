import { useCustomBridge } from '../customBridge'
import { useGetStory } from './getStory'

export const useContactStory = async () => {
  const initStory = ref(null)

  const res = await useGetStory('contact')
  initStory.value = res.value

  if (process.client) {
    useCustomBridge(initStory.value.id, evStory => {
      initStory.value = evStory
    })
  }
  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
