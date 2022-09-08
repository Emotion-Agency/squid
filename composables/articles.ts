import { keysGenerator } from '~~/assets/scripts/utils/ea'

export const useArticles = () => {
  interface iArticles {
    id: string
    title: string
    category: string
    date: string
    client: string
    description: string
    image: string
    slug: string
  }

  const articles = ref<iArticles[]>([
    {
      id: keysGenerator(8),
      title: 'TCF BANK',
      slug: 'tcf-bank',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/2.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'Lorem',
      slug: 'lorem',
      category: 'AGENCY',

      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/3.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'ipsum',
      slug: 'ipsum',
      category: 'LATEST WORK',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/4.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'dolor',
      slug: 'dolor',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/5.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'amet',
      slug: 'amet',
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
      slug: 'tcf-bank',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/2.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'Lorem',
      slug: 'lorem',
      category: 'AGENCY',

      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/3.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'ipsum',
      slug: 'ipsum',
      category: 'LATEST WORK',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/4.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'dolor',
      slug: 'dolor',
      category: 'CASE STUDIES',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/5.jpg',
    },
    {
      id: keysGenerator(8),
      title: 'amet',
      slug: 'amet',
      category: 'AGENCY',
      date: 'August 24, 2021',
      client: 'Miles Marmo',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ligula porta felis euismod semper.',
      image: '/images/thoughts/6.jpg',
    },
  ])

  const filteredArticles = ref<iArticles[]>(articles.value)

  const router = useRouter()
  const route = useRoute()

  const selectCategory = (category: string) => {
    setTimeout(() => {
      window.parallax && window.parallax.update()
    }, 500)

    if (category === 'ALL') {
      filteredArticles.value = articles.value
      router.push({ query: null })
      return
    }

    filteredArticles.value = [...articles.value].filter(
      post => post.category === category
    )
    router.push(
      `/squid-blog/?filter=${category.toLocaleLowerCase().replace(' ', '_')}`
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

  return { articles, filteredArticles, selectCategory, activeCategory }
}
