<script lang='ts' setup>
import { iAccordionItem } from '~/types/accordion'
import { keysGenerator } from '~/assets/scripts/utils/ea'


interface iProps {
  items: iAccordionItem[]
}

const props = defineProps<iProps>()

const updatedItems = ref({ ...props }.items.map(item => ({ ...item,isOpen: false,id: keysGenerator(8) })))



const onClick = (id: string) => {
  updatedItems.value = updatedItems.value.map(el => {
    if (id === el.id) {
      return {
        ...el,isOpen: true
      }
    }

    return {
      ...el,isOpen: false
    }
  })

}
</script>

<template>
  <div class="accordion">
    <slot></slot>
    <AccordionItem
      v-for="item in updatedItems"
      :id="item.id"
      :key="item.title"
      :title="item.title"
      :text="item.text"
      :is-open="item.isOpen"
      @clicked="onClick"
    />

  </div>
</template>
