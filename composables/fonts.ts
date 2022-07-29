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
    href: '/fonts/ClashDisplay-Extralight.woff2',
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
    href: '/fonts/ClashDisplay-Medium.woff2',
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
    href: '/fonts/SeriouslyNostalgic-Condensed.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgic-ExtraCond.woff2',
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
    href: '/fonts/SeriouslyNostalgic-SemiCond.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgic-UltraCond.woff2',
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
    href: '/fonts/SeriouslyNostalgicFn-SemiCond.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFn-UCn.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFn-XCn.woff2',
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
    href: '/fonts/SeriouslyNostalgicFnIt-SmCn.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFnIt-UCn.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicFnIt-XCn.woff2',
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
    href: '/fonts/SeriouslyNostalgicItal-Reg.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicItal-SmCn.woff2',
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

  {
    rel: 'preload',
    type: 'font/woff2',
    href: '/fonts/SeriouslyNostalgicItal-XCn.woff2',
    crossorigin: 'anonymous',
    as: 'font',
  },
]
export const useFonts = () => {
  useHead({
    link: [...fontsMetaList],
  })
}
