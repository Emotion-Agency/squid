<script lang="ts" setup>
interface iProps {
  body: any
}

defineProps<iProps>()

const getBlokName = name => {
  switch (name) {
    case 'text_block_1':
      return defineAsyncComponent(
        () => import(`~/components/blok/TextBlock_1.vue`)
      )
      case 'text_block_2':
      return defineAsyncComponent(
        () => import(`~/components/blok/TextBlock_2.vue`)
      )
    case 'image':
      return defineAsyncComponent(() => import(`~/components/blok/Image.vue`))
      case 'image_with_title':
      return defineAsyncComponent(() => import(`~/components/blok/ImageWithText.vue`))
    case 'video':
      return defineAsyncComponent(() => import(`~/components/blok/Video.vue`))
    case 'dark_block':
      return defineAsyncComponent(
        () => import(`~/components/blok/DarkBlock.vue`)
      )
    case 'image_grid':
      return defineAsyncComponent(
        () => import(`~/components/blok/ImageGrid.vue`)
      )
    case 'quote':
      return defineAsyncComponent(() => import(`~/components/blok/Quote.vue`))
    case 'table_text_1':
      return defineAsyncComponent(
        () => import(`~/components/blok/TableText.vue`)
      )
    case 'table_text_2':
      return defineAsyncComponent(
        () => import(`~/components/blok/TableText_2.vue`)
      )
  }
}
</script>

<template>
  <section
    v-if="body && body.length"
    class="section article-section"
  >
    <div
      v-for="(blok) in body"
      :key="blok._uid"
      v-editable="blok"
    >
      <component
        :is="getBlokName(blok.component)"
        :blok="blok"
      />
    </div>
  </section>
</template>
