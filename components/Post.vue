<script lang='ts' setup>
import { iImage } from '~~/types/story';

  interface iProps {
    id: string
    title?: string
    category?: string
    date?: string | number
    author?: string
    description?: string
    image?: iImage
    link?: string
  }

 const props =  defineProps<iProps>()

    const formattedDate = useFormattedDate(props.date)

</script>

<template>

  <li class="thoughts-2__li">
    <NuxtLink
      :to="link"
      class="thoughts-2__link"
    >
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
            <h3 class="thoughts-2__block-title">{{title}}</h3>
            <p class="thoughts-2__category">{{category}}</p>
          </div>
          <div class="thoughts-2__desc">
            <p class="thoughts-2__date">{{formattedDate}} / {{author}}</p>
            <p class="thoughts-2__text">
              {{description}}
            </p>
            <TextButton
              class="thoughts-2__text-btn"
              tag="button"
            >
              READ MORE
            </TextButton>
          </div>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>