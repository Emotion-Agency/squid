<script lang='ts' setup>
import { iImage } from '~/types/story'


  interface iProps {
    name?: string
    category?: string
    date?: string | number
    author?: string
    description?: string
    link?: string
    image?: iImage
  }

  const props = defineProps<iProps>()

    const formattedDate = useFormattedDate(props.date)

  const formattedDescription = computed(() => {
    const descriptionWords = props.description.split(' ')
    if (!descriptionWords.length) {
      return ''
    }

    if (descriptionWords.length <= 40) {
      return props.description
    }

    return descriptionWords.slice(0, 40).join(' ') + '...'
  })

</script>

<template>
  <section class="section section--nm featured">
    <div class="featured__wrapper">
      <div class="container featured__left-block">
        <h1
          data-a-h
          class="featured__title"
        >{{name}}</h1>
        <p
          data-a-t
          class="featured__small-text"
        >
          <span class="featured__italic-text"> Category: {{category}} </span>
          <span
            v-if="formattedDate && author"
            class="featured__info"
          ><time>{{formattedDate}}</time> / <small>{{author}}</small></span>
        </p>
        <p
          data-a-t
          class="featured__desc"
        >
          {{formattedDescription}}
        </p>
        <TextButton
          data-a-t
          class="featured__btn"
          tag="nuxt-link"
          :to="link"
        >
          READ MORE
        </TextButton>
      </div>
      <div
        data-a-o
        class="featured__right-block"
      >
        <TheImage
          :transform="true"
          class="featured__img"
          :src="image?.filename"
          :width="1400"
          alt="Image"
        />
      </div>
    </div>
  </section>
</template>
