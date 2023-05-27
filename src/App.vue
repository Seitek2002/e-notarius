<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import NotariusLayout from '@/layouts/NotariusLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'

const route = useRoute()
const layout = computed(() => {
  if (route.meta.layout === 'user') return UserLayout
  if (route.meta.layout === 'notarius') return NotariusLayout
  return MainLayout
})
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/base.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  
@media screen and (max-width:1490px) {
  .content {
  margin-left: 73px;
}

}
@media screen and (max-width:768px) {
  .content {
    padding: 20px;
  }
}
@media screen and (max-width:530px) {
 .content {
    margin-left: 0;
  }
}
</style>
