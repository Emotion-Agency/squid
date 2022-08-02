const fontsMetaList = [
  {
    rel: 'preload',
    type: 'font/ttf',
    href: '/fonts/SeriouslyNostalgicFn-Regular.otf',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/ttf',
    href: '/fonts/SeriouslyNostalgicFnIt-Cond.otf',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/ttf',
    href: '/fonts/SeriouslyNostalgicFnIt-Reg.otf',
    crossorigin: 'anonymous',
    as: 'font',
  },
]
export const useFonts = () => {
  useHead({
    link: [...fontsMetaList],
  })
}
