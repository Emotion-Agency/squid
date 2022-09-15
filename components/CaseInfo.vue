<script lang='ts' setup>
  interface iPoint {
    point: string
    _uid: string
  }

  interface iItem {
    title: string
    points: iPoint[] 
    _uid: string
  }

  interface iProps {
    items: iItem[]
  }

  defineProps<iProps>()

</script>

<template>
  <section class="section case-info">
    <div class="container case-info__wrapper">
      <div class="case-info__line"></div>
      <ul class="case-info__list">
        <li
          v-for="item in items"
          :key="item._uid"
          class="case-info__li"
        >
          <h3 class="case-info__title">{{item.title}}</h3>
          <div class="case-info__text-wrapper">
            <p
              v-for="point in item.points"
              :key="point._uid"
              class="case-info__text"
            >{{point.point}}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>