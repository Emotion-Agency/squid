import { useGetStory } from './getStory'

export const useHomeStory = async () => {
  const initStory = ref(null)

  const res = await useGetStory('index')
  initStory.value = res.value

  if (process.client) {
    useStoryblokBridge(initStory.value.id, evStory => {
      initStory.value = evStory
    })
  }

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
