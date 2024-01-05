<script lang="ts" setup>
import { useFooterStory } from '~~/composables/stories/footer.story'

const { story } = await useFooterStory()

const emailMarkup = computed(() => {
  if (!story.value.email) {
    return ''
  }
  const emailArr = story.value.email.split('@')

  return `<span class="contacts__style-email">${emailArr[0]}</span>@${emailArr[1]}`
})
</script>

<template>
  <div class="contacts">
    <div class="grid container contacts__wrapper">
      <div class="contacts__list-items">
        <p class="contacts__list-text">Let’s Start a Conversation</p>
        <div v-if="story.email" class="contacts__item">
          <h2 class="contacts__item-title">Email</h2>
          <a class="contacts__email" :href="`mailto:${story.email}`">
            <span class="contacts__email-text" v-html="emailMarkup" />
            <span class="contacts__email-line" />
          </a>
        </div>
        <div v-if="story.phone" class="contacts__item">
          <h2 class="contacts__item-title">Phone</h2>
          <a
            class="contacts__link"
            :href="`tel:${story.phone.replace(/\D/g, '')}`"
          >
            {{ story.phone }}
          </a>
        </div>
        <div v-if="story.adress && story.adress[0]" class="contacts__item">
          <h2 class="contacts__item-title">Office</h2>
          <a
            :href="story.adress[0].map_link"
            target="_blank"
            rel="noreferer noopener"
            class="contacts__link"
          >
            {{ story.adress[0].adress }}
          </a>
        </div>
      </div>
      <TheForm class="contacts__form" />
    </div>
  </div>
</template>
