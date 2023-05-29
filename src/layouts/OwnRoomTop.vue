<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <svg @click="store.state.notariusSidebar = !store.state.notariusSidebar; store.state.userSidebar = !store.state.userSidebar" class="top-close" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="44" height="44" fill="white"/>
    <path d="M22 17L27 22L22 27" stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 17L21 22L16 27" stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <div class="top__action">
      <div class="top__user">
        <div class="top__user-wrapper" ref="dropDownRef" @click="isDropdownShow = !isDropdownShow">
          <OrderListUserIcon />
          <h2> {{ store.state.auth.fullName }} </h2>
          <DropdownIcon :class="isDropdownShow ? 'active' : ''" />
        </div>
        <div v-show="isDropdownShow" class="top__user-dropdown">
          <router-link to="#">
            Редактировать профиль
          </router-link>
          <router-link to="#">
            Сменить пароль
          </router-link>
          <a href="#" @click.prevent="logOut">Выход с кабинета</a>
        </div>
      </div>
      <div class="top__notification">
        <NotificationIcon />
      </div>
      <div class="header__lang--wrapper">
        <Lang />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { onClickOutside } from '@vueuse/core'

import DropdownIcon from '@/components/global/Tables/Icons/DropdownIcon.vue'
import NotificationIcon from '@/components/icons/OrderList/NotificationIcon.vue'
import OrderListUserIcon from '@/components/icons/OrderList/OrderListUserIcon.vue'
import Lang from '@/components/global/UI/Lang/Lang.vue'

const router = useRouter()
const store = useStore()

const dropDownRef = ref(null)

const logOut = () => {
  router.push('/')
  store.commit('setAuth')
  localStorage.clear()
}

const isDropdownShow = ref(false)
defineProps(['title'])
onMounted(() => {
  const user = localStorage.getItem('auth-user')
  if (user) store.state.auth = JSON.parse(user)
})

onClickOutside(dropDownRef, () => isDropdownShow.value = false);
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 24px;
    color: $text-light-green;
  }

  &-close {
    display: none;
    cursor: pointer;
  }

  &__action {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__user {
    width: 282px;
    position: relative;

    &-dropdown {
      position: absolute;
      top: 110%;
      left: 0;
      width: 100%;
      z-index: 10;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 15px;
      box-sizing: border-box;
      border: 1px solid #efefef;
      filter: drop-shadow(0px 10px 20px #e9e9e9);

      a {
        font-weight: 400;
        font-size: 14px;
        color: #24334b;
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      svg.active {
        transform: rotate(180deg);
      }
    }

    h2 {
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      width: 174px;
    }
  }
}

@media screen and (max-width:1050px) {
  .top {
    h1 {
      font-size: 18px;
    }
  }
}

@media screen and (max-width:860px) {
  .top {
    h2 {
      display: none;
    }

    &__user-wrapper {
      justify-content: end;
    }

    &__user {
      width: unset;
    }

    &__user-dropdown {
      width: 200px;
    }
  }
}

@media screen and (max-width:769px) {
  .top {
    position: relative;
    padding-bottom: 60px;

    h1 {
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &-close {
      display: block;
    }
  }
}
</style>
