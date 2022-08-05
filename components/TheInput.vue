<template>
  <div class="input-content">
    <div
      class="input-wrapper"
      :class="[inputFocus && 'js-focus', error && 'js-error']"
    >
      <input
        :id="id"
        ref="$input"
        v-model="inputValue"
        class="input"
        :required="required"
        data-validation="required"
        :name="name"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      />
      <label :for="id" class="input-placeholder">
        {{ placeholder }}
        <abbr v-if="required" title="required"> * </abbr>
      </label>
      <!-- <transition name="fade" mode="out-in"> </transition> -->
      <!-- <slot /> -->
    </div>
    <small v-if="error" class="input-error">{{ validationText }}</small>
  </div>
</template>

<script setup lang="ts">
interface iProps {
  id: string
  type: string
  value?: string
  placeholder: string
  required?: boolean
  name?: string
  validation?: string
  validationText?: string
}

const props = defineProps<iProps>()
const emit = defineEmits(['inputValue'])

const {
  inputValue,
  inputFocus,
  error,
  $input,
  onFocus,
  onBlur,
  onInput,
  reset,
  throwError,
} = useInput(emit, props)

defineExpose({
  throwError,
  reset,
})
</script>
