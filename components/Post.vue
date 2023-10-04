<script lang="ts" setup>
import { Richtext } from 'storyblok-js-client'
import { iImage } from '~/types/story'

interface iProps {
  id: string
  title?: string
  category?: string
  date?: string | number
  author?: string
  description?: string | Richtext | object
  image?: iImage
  link?: string
}

const props = defineProps<iProps>()

const formattedDate = useFormattedDate(props.date)

const typeOfDescription = computed(() => {
  return typeof props.description
})

const formattedDescription = computed(() => {
  if (typeof props.description !== 'string') {
    return
  }

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
  <li class="thoughts-2__li">
    <NuxtLink :to="link" class="thoughts-2__link">
      <TheImage
        v-if="image?.filename"
        :transform="true"
        class="thoughts-2__img"
        :src="image.filename"
        alt="Image"
      />
      <div class="thoughts-2__block">
        <div class="thoughts-2__text-wrapper">
          <div class="thoughts-2__name">
            <h3 class="thoughts-2__block-title">{{ title }}</h3>
            <p class="thoughts-2__category">{{ category }}</p>
          </div>
          <div class="thoughts-2__desc">
            <p v-if="formattedDate && author" class="thoughts-2__date">
              {{ formattedDate }} / {{ author }}
            </p>
            <p v-if="typeOfDescription === 'string'" class="thoughts-2__text">
              {{ formattedDescription }}
            </p>
            <RichText
              v-else-if="typeOfDescription === 'object'"
              class="thoughts-2__text"
              :text="description"
            />
            <TextButton class="thoughts-2__text-btn" tag="button">
              READ MORE
            </TextButton>
          </div>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>
