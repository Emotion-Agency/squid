import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'
import { useCustomBridge } from '../customBridge'

type tProjectStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
  categories: Ref<iStory[]>
  featuredPost: Ref<iStory>
  listenStory: (arg0: string | string[]) => void
}>

export const useProjectsStories: tProjectStories = async () => {
  const stories = useState<iStory[]>('projectsStory', null)
  const story = useState<iStory>('projectStory', null)
  const categories = useState<iStory[]>('projectCategories', null)
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=portfolio/*', {
      version:
        config.public.ENVIROMENT === 'development' ? 'draft' : 'published',
      excluding_slugs: 'portfolio/case-categories/*',
      resolve_relations: ['case.category'],
    })

    const categoriesData = await storyapi.get(
      'cdn/stories/?by_slugs=portfolio/case-categories/*',
      {
        version:
          config.public.ENVIROMENT === 'development' ? 'draft' : 'published',
      }
    )

    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')

    categories.value = categoriesData.data.stories
  } catch (e) {
    console.log(e.message)
  }

  const featuredPost = computed(() => {
    const featuredId = story?.value?.content?.Featured_case
    return stories.value.find(story => story.uuid === featuredId)
  })

  useCustomBridge(story.value.id, evStory => {
    story.value = evStory
  })

  const listenStory = (slug: string) => {
    const currentStory = stories.value.find(story => story.slug === slug)
    useCustomBridge(currentStory.id, evStory => {
      stories.value = stories.value.filter(story => story.slug !== slug)
      stories.value = [...stories.value, evStory]
    })
  }

  return { stories, story, categories, listenStory, featuredPost }
}
