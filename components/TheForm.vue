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
  {
    title: 'Message',
    required: false,
    id: 'message',
    name: 'Message',
    placeholder: 'Type Field',
    type: 'textarea',
    error: false,
    value: '',
  },
])

const isErrors = computed(
  () => !!inputsList.filter(input => input.error).length
)

const $inputs = ref(null)

const onSubmit = async () => {
  try {
    const formData = new FormData()

    inputsList.forEach(el => {
      formData.append(el.name, el.value)
    })
    await fetch('https://formspree.io/f/xrgngrzb', {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    })
    setTimeout(() => {
      inputsList.forEach(input => (input.value = ''))
      $inputs.value?.forEach(input => input?.reset())
    }, 0)
    alert('Thank you for your message!')
  } catch (error) {
    alert('Something went wrong! Pease try again later.')
    console.log(error)
  }
}

const onChange = val => {
  const input = inputsList.find(input => input.id === val.id)
  if (!input) return
  input.value = val.value
  input.error = val.error
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
    </div>
    <button type="submit" class="form__btn" :disabled="isErrors">
      <span>SEND</span>
    </button>
  </form>
</template>
