import { useCustomBridge } from '../customBridge'

export const useExpertiseStory = async () => {
  const initStory = ref(null)
  const storyapi = useStoryblokApi()
  const config = useRuntimeConfig()

  try {
    const { data } = await storyapi.get('cdn/stories/expertise', {
      version:
        config.public.ENVIROMENT === 'development' ? 'draft' : 'published',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  useCustomBridge(initStory.value.id, evStory => {
    initStory.value = evStory
  })

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
