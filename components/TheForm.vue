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

const onSubmit = () => {
  console.log('submitted')
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
