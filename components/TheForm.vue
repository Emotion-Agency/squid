<script setup lang="ts">
const inputsList = reactive([
  {
    title: 'Name',
    required: true,
    id: 'name',
    name: 'Name',
    placeholder: 'Type Field',
    type: 'text',
    validation: 'name',
    validationText: 'incorrect name',
    error: true,
    value: '',
  },
  {
    title: 'Email',
    required: true,
    id: 'email',
    name: 'Email',
    placeholder: 'Type Field',
    type: 'text',
    validation: 'email',
    validationText: 'incorrect email',
    error: true,
    value: '',
  },
  {
    title: 'Subject',
    required: true,
    id: 'subject',
    name: 'Subject',
    placeholder: 'Type Field',
    type: 'text',
    validation: 'subject',
    validationText: 'incorrect subject',
    error: true,
    value: '',
  },
])

const $inputs = ref(null)

const onSubmit = async () => {
  try {
    await fetch('https://formspree.io/f/xrgngrzb', {
      method: 'POST',
      body: JSON.stringify({
        name: inputsList[0].value,
        email: inputsList[1].value,
        subject: inputsList[2].value,
        message: inputsList[3].value,
      }),
    })
    inputsList.forEach(input => (input.value = ''))
    $inputs.value?.forEach(input => input?.reset())
  } catch (error) {
    alert('Something went wrong! Pease try again later.')
    console.log(error)
  }
}

const onChange = val => {
  console.log(val)
}
</script>

<template>
  <form class="form" novalidate @submit.prevent="onSubmit">
    <div class="form__inputs-wrapper">
      <TheInput
        v-for="(input, idx) in inputsList"
        ref="$inputs"
        :key="idx"
        :required="input.required"
        :id="input.id"
        :title="input.title"
        :name="input.name"
        :type="input.type"
        :validation="input.validation"
        :validationText="input.validationText"
        :error="input.error"
        :placeholder="input.placeholder"
        @input-value="onChange"
      />
      <TheInput
        id="message"
        title="Message"
        name="Message"
        type="textarea"
        placeholder="Type Field"
        @input-value="onChange"
      />
    </div>
    <button type="submit" class="form__btn">
      <span>SEND</span>
    </button>
  </form>
</template>
