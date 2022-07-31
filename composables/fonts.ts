const fontsMetaList = [
  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/ClashDisplay-Bold.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/ClashDisplay-Light.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/ClashDisplay-Regular.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/ClashDisplay-Semibold.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgic-Regular.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFn-Cond.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFn-Regular.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFnIt-Cond.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFnIt-Reg.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicItal-Cond.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicItal-UCn.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
]
export const useFonts = () => {
  useHead({
    link: [...fontsMetaList],
  })
}
