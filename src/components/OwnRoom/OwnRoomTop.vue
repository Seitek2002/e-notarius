<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <div class="top__action">
      <div class="top__user">
        <div
          class="top__user-wrapper"
          @click="isDropdownShow = !isDropdownShow"
        >
          <OrderListUserIcon/>
          <!-- <h2 v-if="store.state.auth.chin">ЧН Абдыгулов Баяман Алыкулович</h2> -->
          <h2> {{ store.state.auth.fullName }} </h2>
          <DropdownIcon
            :class="isDropdownShow ? 'active' : ''"
          />
        </div>
        <div
          v-show="isDropdownShow"
          class="top__user-dropdown"
        >
          <router-link to="#">
            Редактировать профиль
          </router-link>
          <router-link to="#">
            Сменить пароль
          </router-link>
          <a
            href="#"
            @click.prevent="logOut"
          >Выход с кабинета</a>
        </div>
      </div>
      <div class="top__notification">
        <NotificationIcon/>
      </div>
      <div class="header__lang--wrapper">
        <Lang/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import DropdownIcon from '@/components/OwnRoom/Icons/DropdownIcon.vue'
import NotificationIcon from '@/components/icons/OrderList/NotificationIcon.vue'
import OrderListUserIcon from '@/components/icons/OrderList/OrderListUserIcon.vue'
import Lang from '@/components/Lang/Lang.vue'

const router = useRouter()
const store = useStore()

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
</style>
