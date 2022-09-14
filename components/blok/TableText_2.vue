<script lang='ts' setup>
interface iItem {
    title: string
    text: string
    _uid: string
  }

  interface iContent {
    content: iItem[]
    title: string
  }

  interface iProps {
   blok: iContent
  }

defineProps<iProps>()

</script>

<template>
  <section class="section table-text-2">
    <div class="container table-text-2__wrapper">
      <h2 class="table-text-2__title">{{blok.title}}</h2>
      <div class="table-text-2__list-wrapper">
        <ul class="table-text-2__list">
          <li
            v-for="item in blok.content"
            :key="item._uid"
            class="table-text-2__li"
          >
            <h3 class="table-text-2__block-title">{{item.title}}</h3>
            <p class="table-text-2__desc">
              {{item.text}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>