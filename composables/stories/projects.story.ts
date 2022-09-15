import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'

type tProjectStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
  categories: Ref<iStory[]>
}>

export const useProjectsStories: tProjectStories = async () => {
  const stories = useState<iStory[]>('projectsStory', null)
  const story = useState<iStory>('projectStory', null)
  const categories = useState<iStory[]>('projectCategories', null)

  const storyapi = useStoryblokApi()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=portfolio/*', {
      version: 'draft',
      excluding_slugs: 'portfolio/case-categories/*',
      resolve_relations: ['portfolio.Featured_case', 'case.category'],
    })

    const categoriesData = await storyapi.get(
      'cdn/stories/?by_slugs=portfolio/case-categories/*',
      {
        version: 'draft',
      }
    )

    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')

    categories.value = categoriesData.data.stories
  } catch (e) {
    console.log(e.message)
  }

  stories.value = stories.value
    .map(s => {
      useStoryblokBridge(s.id, evStory => {
        s = evStory as any
      })
      return s
    })
    .filter(s => s.name !== 'Index')

  return { stories, story, categories }
}
