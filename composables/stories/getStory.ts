import { iStory } from '~/types/story'

type tResStory = {
  data: {
    story: iStory
  }
}

export const useGetStory = async (route: string) => {
  const response = ref<iStory>(null)
  const retryCounter = ref(0)
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()
  const { isInEditor } = useLoadState()

  const getStory = async () => {
    if (!response.value) {
      try {
        const { data }: tResStory = await storyapi.get(`cdn/stories/${route}`, {
          version:
            config.public.ENVIROMENT === 'development' || isInEditor.value
              ? 'draft'
              : 'published',
          cv: Date.now(),

          resolve_relations: 'roi_points.case_study',
        })

        response.value = data.story
      } catch (e) {
        console.log(e.message)

        if (retryCounter.value > 2) {
          throw new Error("Can't get story")
        }

        await getStory()
        retryCounter.value = retryCounter.value + 1
      }
    }
  }
  await getStory()

  return response
}
