<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import MainLayout from '@/layouts/MainLayout.vue'
import NotariusLayout from '@/layouts/NotariusLayout.vue'
import UserLayout from '@/layouts/UserLayout.vue'

const route = useRoute()
const store = useStore()
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

.router-link-active.router-link-exact-active.sidebar-item {
  background: #24334b;
}

.router-link-active.router-link-exact-active .sidebar-item {
  background: #24334b !important;
}


.sidebar {
  background: #1baa75;
  padding: 50px 0 10px;
  box-sizing: border-box;

  &.active {
    width: 73px;
    padding: 20px 0;

    & .sidebar-head {
      flex-direction: column;
      align-items: start;
      gap: 20px;
      margin: 0;
      margin-left: 14.5px;
    }

    & .sidebar-title {
      display: none;
    }

    & .sidebar-link {
      display: none;
    }

    & .sidebar-item {
      padding: 0;
      justify-content: center;
    }

    & .sidebar-close {
      transform: rotate(180deg);
    }

    & .sidebar-icons {
      padding: 10px 0;
    }
  }

  &-mini-item {
    background: #3f5984;
  }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &-title {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 25px 12px 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;

    &:hover {
      transition: 0.2s;
      background: #24334b;
    }

    &.active {
      background: #24334b;
    }

    &.sidebar-another-item {
      background: #3f5984;
      position: relative;
    }
  }

  &-up {
    position: absolute;
    z-index: 1;
    right: 10px;
    transform: rotate(180deg);
    transition: 0.3s;

    &.active {
      transform: rotate(0);
    }
  }

  &-list {
    padding: 20px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ffffff;
  }

  &-link {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    max-width: 195px;
  }

  &-close {
    cursor: pointer;
  }
}

@media screen and (max-width:530px) {
 .sidebar {
  width: 100%;

  &.active {
    width: 0;
  }
 }
}

.content {
  padding: 60px;
  box-sizing: border-box;
  max-width: 95%;
  flex-grow: 1;
}

@media screen and (max-width:768px) {
  .content {
    padding: 20px;
  }
}
</style>
