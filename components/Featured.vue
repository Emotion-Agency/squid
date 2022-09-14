<script lang='ts' setup>
import { iImage } from '~/types/story'


  interface iProps {
    name?: string
    category?: string
    date?: string
    author?: string
    description?: string
    link?: string
    image?: iImage
  }

  const props = defineProps<iProps>()

    const formattedDate = useFormattedDate(props.date)

</script>

<template>
  <section class="section section--nm featured">
    <div class="featured__wrapper">
      <div class="container featured__left-block">
        <h1 class="featured__title">{{name}}</h1>
        <p class="featured__small-text">
          <span class="featured__italic-text"> Category: {{category}} </span>
          <span class="featured__info"><time>{{formattedDate}}</time> / <small>{{author}}</small></span>
        </p>
        <p class="featured__desc">
          {{description}}
        </p>
        <TextButton
          class="featured__btn"
          tag="nuxt-link"
          :to="link"
        >
          READ MORE
        </TextButton>
      </div>
      <div class="featured__right-block">
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
