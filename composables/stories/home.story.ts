export const useHomeStory = async () => {
  const initStory = ref(null)
  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/index', {
      version: 'draft',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  useStoryblokBridge(initStory.value.id, evStory => {
    initStory.value = evStory
  })

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
