<script lang='ts' setup>
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
      <div class="contacts__email-wrapper">
        <h2 class="contacts__small-text">{{story.title}}</h2>
        <a
          class="contacts__email"
          :href="`mailto:${story.email}`"
        >
          <span
            class="contacts__email-text"
            v-html="emailMarkup"
          />

          <span class="contacts__email-line"></span>
        </a>
      </div>
      <div
        v-if="story.phone"
        class="contacts__phone"
      >
        <h2 class="contacts__title">Phone</h2>
        <p class="conctacts__info">
          <a :href="`tel:${story.phone.replace(/\D/g, '')}`">{{story.phone}}</a>
        </p>
      </div>
      <div
        v-if="story.adress && story.adress[0]"
        class="contacts__place"
      >
        <h2 class="contacts__title">Office</h2>
        <p class="conctacts__info">
          <a
            :href="story.adress[0].map_link"
            target="_blank"
            rel="noreferer noopener"
          >
            {{story.adress[0].adress}}
          </a>
        </p>
      </div>
    </div>
  </div>
</template>
