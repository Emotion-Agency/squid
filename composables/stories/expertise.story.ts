import { useCustomBridge } from '../customBridge'

export const useExpertiseStory = async () => {
  const initStory = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/expertise', {
      version: 'draft',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  useCustomBridge(initStory.value.id, evStory => {
    initStory.value = evStory
  })

  const story = computed(() => {
    console.log(initStory.value.id, initStory.value)
    return initStory.value?.content
  })

  return { story }
}
