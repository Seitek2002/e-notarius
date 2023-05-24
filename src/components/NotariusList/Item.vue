<template>
  <RouterLink
    :to="'/notarius-page/' + item.id"
    class="register__profile"
  >
    <div class="register__img">
      <img
        class="register__avatar"
        :src="item.avatar"
        alt="Profile1-item"
      >
      <h1>{{ item.name }}</h1>
    </div>
    <div class="register__stars">
      <Stars/>
      <h1>{{ item.rating }}</h1>
      <p>{{ item.votes }} оцен.</p>
    </div>
    <p class="register__street">
      <template
        v-for="place in item.geo"
        :key="place"
      >
        {{ place }} <br>
      </template>
    </p>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import Stars from '@/components/icons/Register/Stars.vue'

const props = defineProps(['item'])
</script>

<style lang="scss">
.register {
  &__avatar {
    object-fit: cover;
  }
}
</style>
