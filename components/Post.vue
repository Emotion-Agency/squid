<script lang='ts' setup>
  interface iProps {
    id: string
    title: string
    category: string
    date: string
    client: string
    description: string
    image: string
    slug: string
  }

  defineProps<iProps>()
</script>

<template>

  <li class="thoughts-2__li">
    <TheImage
      class="thoughts-2__img"
      :src="image"
      alt="Image"
    />
    <div class="thoughts-2__block">
      <div class="thoughts-2__text-wrapper">
        <div class="thoughts-2__name">
          <h3 class="thoughts-2__block-title">{{title}}</h3>
          <p class="thoughts-2__category">{{category}}</p>
        </div>
        <div class="thoughts-2__desc">
          <p class="thoughts-2__date">{{date}} / {{client}}</p>
          <p class="thoughts-2__text">
            {{description}}
          </p>
          <TextButton
            class="thoughts-2__text-btn"
            tag="nuxt-link"
            :to="`/thoughts/${slug}/`"
          >
            READ MORE
          </TextButton>
        </div>
      </div>
    </div>
  </li>
</template>