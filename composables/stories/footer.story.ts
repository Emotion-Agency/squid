import { useGetStory } from './getStory'

export const useFooterStory = async () => {
  const initStory = ref(null)

  const res = await useGetStory('contacts-info')
  initStory.value = res.value

  const story = computed(() => {
    return initStory.value?.content
  })

  return { story }
}
