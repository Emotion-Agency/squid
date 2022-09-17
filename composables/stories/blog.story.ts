import { Ref } from 'nuxt/dist/app/compat/capi'
import { iStory } from '~/types/story'
import { useCustomBridge } from '../customBridge'

type tBlogStories = () => Promise<{
  stories: Ref<iStory[]>
  story: Ref<iStory>
  categories: Ref<iStory[]>
  tags: Ref<iStory[]>
  featuredPost: Ref<iStory>
  listenStory: (arg0: string | string[]) => void
}>

export const useBlogStories: tBlogStories = async () => {
  const stories = useState<iStory[]>('blogStory', null)
  const story = useState<iStory>('blogSingleStory', null)
  const categories = useState<iStory[]>('blogCategories', null)
  const tags = useState<iStory[]>('blogTags', null)

  const storyapi = useStoryblokApi()
  const config = useRuntimeConfig()

  try {
    const { data } = await storyapi.get('cdn/stories/?by_slugs=squid-blog/*', {
      version: config.public.ENVIROMENT === 'development' ? 'draft' : 'draft',
      cv: +new Date(),
      excluding_slugs: 'squid-blog/blog-categories/*,squid-blog/blog-tags/*',
      resolve_relations: ['Article.category'],
    })

    const categoriesData = await storyapi.get(
      'cdn/stories/?by_slugs=squid-blog/blog-categories/*',
      {
        version: 'draft',
        cv: +new Date(),
      }
    )

    const tagsData = await storyapi.get(
      'cdn/stories/?by_slugs=squid-blog/blog-tags/*',
      {
        version: 'draft',
        cv: +new Date(),
      }
    )

    stories.value = data.stories.filter(s => s.name !== 'Index')
    story.value = data.stories.find(s => s.name === 'Index')

    categories.value = categoriesData.data.stories
    tags.value = tagsData.data.stories
  } catch (e) {
    console.log(e.message)
  }

  const featuredPost = computed(() => {
    const featuredId = story?.value?.content?.Featured_article
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

  return { stories, story, categories, listenStory, tags, featuredPost }
}
