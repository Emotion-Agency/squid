export const useFooterStory = async () => {
  const initStory = ref(null)
  const storyapi = useStoryblokApi()
  const config = useRuntimeConfig()

  try {
    const { data } = await storyapi.get('cdn/stories/contact', {
      version: config.public.ENVIROMENT === 'development' ? 'draft' : 'draft',
    })
    initStory.value = data.story
  } catch (e) {
    console.log(e.message)
  }

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
