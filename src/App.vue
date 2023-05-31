<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { RouterView, useRoute } from "vue-router";

import MainLayout from "@/layouts/MainLayout.vue";
import NotariusLayout from "@/layouts/NotariusLayout.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import { useStore } from "vuex";

const route = useRoute();
const store = useStore()
const layout = computed(() => {
  if (route.meta.layout === "user") return UserLayout;
  if (route.meta.layout === "notarius") return NotariusLayout;
  return MainLayout;
});

onMounted(() => {
  const storedMenuState = localStorage.getItem('sidebar');
  if (storedMenuState) {
    store.state.sidebar = JSON.parse(storedMenuState);
  }
})
 

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/base.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");




.sidebar {
  min-width: 75px;
  max-width: 75px;
  box-sizing: border-box;
  padding: 15px 0;
  background: #1BAA75;
  overflow: hidden;

  &.active {
    min-width: 280px;
    max-width: 280px;
    padding: 50px 0;

    & .sidebar-title {
      display: block;
    }

    & .sidebar-link {
      padding: 10px 20px 10px 25px;
      justify-content: unset;
    }

    & .sidebar-head {
      flex-direction: unset;
      gap: 35px;
      margin-bottom: 40px;
    }

  }

  &-head {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 20px;
    flex-direction: column-reverse;

    svg {
      cursor: pointer;
    }
  }

  &-title {
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    padding-left: 25px;
    display: none;
  }

  &-list {
    margin: 20px 0; 
  }

  &-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px 0;

    span {
      font-weight: 500;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 20px;
    }
  }

  &-link.another {
    background: #3F5984;
  }

  &-hr {
    width: 100%;
    height: 1px;
    background: #fff;
  }

  &-up {
    transition: .2s;

    &.active {
      transform: rotate(180deg);
    }
  }

}

.router-link-active.router-link-exact-active.sidebar-link {
  background: #24334B;
}

@media screen and (max-width:960px) {
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    height: 100%;
  }
}

@media screen and (max-width:769px) {
  .sidebar {
    min-width: 0;
    max-width: 0;

    &.active {
      min-width: 100%;
      max-width: 100%;
    }

    &-head {
      gap: 0;
      justify-content: space-between;
    }
  }
}

@media screen and (max-width:450px) {
  .sidebar {
    &.active {
      padding-top: 8px;
    }
  }
}

.content {
  padding: 60px;
  box-sizing: border-box;
  flex-grow: 1;
  max-width: 95%;
}

.sidebar.active~.content {
  max-width: 80%;
}

@media screen and (max-width: 960px) {
  .sidebar.active~.content {
    max-width: 95%;
  }
}

@media screen and (max-width: 769px) {
  .content {
    padding: 20px;
    max-width: 100%;
  }
}

.content {
  margin-left: auto;
}</style>
