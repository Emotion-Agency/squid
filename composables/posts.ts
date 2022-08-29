import { keysGenerator } from '~~/assets/scripts/utils/ea'

export const usePosts = () => {
  interface iPost {
    id: string
    title: string
    category: string
    date: string
    client: string
    description: string
    image: string
  }

  const posts = ref<iPost[]>([
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/2.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'AGENCY',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/3.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'LATEST WORK',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/4.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/5.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'AGENCY',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/6.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'LATEST WORK',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/7.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/8.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'AGENCY',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/9.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      category: 'LATEST WORK',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/10.jpg',
    },
  ])

  const filteredPosts = ref<iPost[]>(posts.value)

  // const categories = ref([
  //   'CASE STUDIES',
  //   'LATEST WORK',
  //   'AGENCY',
  //   'PROJECTS',
  //   'EXPERTISE',
  //   'MISC',
  //   'ALL',
  // ])

  const router = useRouter()
  const route = useRoute()

  const selectCategory = (category: string) => {
    if (category === 'ALL') {
      filteredPosts.value = posts.value
      router.push('/thoughts/')
      return
    }

    filteredPosts.value = [...posts.value].filter(
      post => post.category === category
    )
    router.push(
      `/thoughts/?filter=${category.toLocaleLowerCase().replace(' ', '_')}`
    )
  }

  const activeCategory = computed(() => {
    return String(route?.query?.filter || 'ALL')
      ?.toUpperCase()
      ?.replace('_', ' ')
  })

  onMounted(() => {
    selectCategory(activeCategory.value)
  })

  return { posts, filteredPosts, selectCategory, activeCategory }
}
