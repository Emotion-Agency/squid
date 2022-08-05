<template>
  <div class="contacts">
    <div class="grid container contacts__wrapper">
      <form class="contacts__form">
        <legend class="contacts__small-text">Let’s Start a Conversation</legend>
        <TheInput
          v-for="input in formData.inputs"
          :id="input.id"
          :key="input.id"
          ref="$inputs"
          class="contacts__input"
          :type="input.type"
          :placeholder="input.label"
          :required="input.required"
          :validation-text="input.validationText"
          :validation="input.validation"
          @input-value="onInputValue"
        />
      </form>
      <div class="contacts__block">
        <h2 class="contacts__title">Phone</h2>
        <p class="conctacts__info">(612) 799-6620</p>
      </div>
      <div class="contacts__block">
        <h2 class="contacts__title">Office</h2>
        <p class="conctacts__info">2521 27th Ave S Minneapolis MN 55406</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iInputData } from '~~/composables/input'

const $inputs = ref([])
const formData = reactive({
  hasErrors: true,
  inputs: [
    {
      required: true,
      id: 'email',
      name: 'Email',
      label: 'hello@agencysquid.com',
      type: 'email',
      validation: 'email',
      validationText: 'incorrect email',
      error: true,
      value: '',
    },
  ],
})

const onInputValue = (data: iInputData) => {
  const idx = formData.inputs.findIndex(el => el.id === data.id)
  formData.inputs[idx].value = data.value
  formData.inputs[idx].error = data.error
}
</script>
