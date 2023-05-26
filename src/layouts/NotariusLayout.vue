<template>
  <div class="app-notarius-layout">
    <section :class="store.state.notariusSidebar ? 'sidebar active' : 'sidebar'">
      <div class="sidebar-wrapper">
        <div class="sidebar-head">
          <router-link to="/">
            <logo />
          </router-link>
          <close @click="store.state.notariusSidebar = !store.state.notariusSidebar" />
        </div>
        <h2 class="sidebar-title">
          Личный кабинет
        </h2>
        <div :class="store.state.notariusSidebar ? 'sidebar-list active' : 'sidebar-list'">
          <router-link v-for="(item, i) in sidebarList" :key="item.id" :to="item.link" class="sidebar-item"
            @click="(firstIndex = i)">
            <component :is="item.img" class="sidebar-icons" />
            <!-- <img :src="item.img" alt="icons" class="sidebar-icons"> -->
            <span class="sidebar-link">{{ item.text }}</span>
          </router-link>
        </div>

        <div :class="store.state.notariusSidebar ? 'sidebar-list active' : 'sidebar-list'">
          <router-link to="/">
            <div class="sidebar-item">
              <imageOne class="sidebar-icons" />
              <span class="sidebar-link">Шаблоны</span>
            </div>
          </router-link>

          <div @click="secondIndex = !secondIndex">
            <div :class="secondIndex ? 'sidebar-item active' : 'sidebar-item'">
              <imageTwo class="sidebar-icons" />
              <span class="sidebar-link">Реестр нотариальных действий</span>
              <up v-show="!store.state.notariusSidebar" :class="secondIndex ? 'sidebar-up active' : 'sidebar-up'" />
            </div>
          </div>
          <div v-show="secondIndex && !store.state.notariusSidebar">
            <div v-for="(item, i) in showRendering" :key="item.text"
              :class="thirdIndex === i ? ' sidebar-item sidebar-mini-item active' : 'sidebar-item sidebar-mini-item'"
              @click="thirdIndex = i; firstIndex = null">
              <router-link class="sidebar-link" :to="item.link">
                {{ item.text }}
              </router-link>
            </div>
          </div>

          <router-link v-for="item in sidebarListSecond" :key="item.id" :to="item.link">
            <div class="sidebar-item">
              <component :is="item.img" />
              <span class="sidebar-link">{{ item.text }}</span>
            </div>
          </router-link>
        </div>

        <router-link to="/"
          :class="store.state.notariusSidebar ? 'sidebar-item sidebar-last-item close' : 'sidebar-item sidebar-last-item '">
          <left />
          <div class="sidebar-link sidebar-last-link">
            Выход с кабинета
          </div>
        </router-link>
      </div>
    </section>
    <div class="content">
      <OwnRoomTop :title="title" />
      <router-view @islam="changeTitle" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import close from '@/layouts/Icons/sidebar/close.vue'
import imageFour from '@/layouts/Icons/sidebar/imageFour.vue'
import imageFive from '@/layouts/Icons/sidebar/imageFive.vue'
import imageOne from '@/layouts/Icons/sidebar/imageOne.vue'
import imageThree from '@/layouts/Icons/sidebar/imageThree.vue'
import imageTwo from '@/layouts/Icons/sidebar/imageTwo.vue'
import imgFive from '@/layouts/Icons/sidebar/imgFive.vue'
import imgFour from '@/layouts/Icons/sidebar/imgFour.vue'
import imgOne from '@/layouts/Icons/sidebar/imgOne.vue'
import imgThree from '@/layouts/Icons/sidebar/imgThree.vue'
import imgTwo from '@/layouts/Icons/sidebar/imgTwo.vue'
import left from '@/layouts/Icons/sidebar/left.vue'
import logo from '@/layouts/Icons/sidebar/logo.vue'
import up from '@/layouts/Icons/sidebar/up.vue'
import OwnRoomTop from './OwnRoomTop.vue'
import { useStore } from 'vuex'

const store = useStore()
const title = ref('Заявки') 
const firstIndex = ref(0)
const secondIndex = ref(false)
const showRendering = ref([
  // {
  //   text: 'Реестр должностных лиц',
  //   link: '#',
  // },
  {
    text: 'Реестр должностных лиц ОМСУ',
    link: '/omsu',
  },
  {
    text: 'Реестр должностных лиц загранучреждений',
    link: '/foreign-missions',
  },
  {
    text: 'Реестр нотариусов',
    link: '/notarius-list-authed',
  },
  {
    text: 'Реестр нотариальных действий',
    link: '/applications-notarius',
  },
  {
    text: 'Реестр наследственных дел',
    link: '/reestr-of-heritance',
  },
  {
    text: 'Черный список',
    link: '/black-list',
  },
])
const thirdIndex = ref(null)
const sidebarList = [
  {
    id: 0,
    img: imgOne,
    text: 'Нотариальное действие',
    link: '/order-list-notarius',
  },
  {
    id: 1,
    img: imgTwo,
    text: 'Мои шаблоны',
    link: 'exemple-notarius',
  },
  {
    id: 2,
    img: imgThree,
    text: 'Мои файлы',
    link: '/files-list-notarius',
  },
  {
    id: 3,
    img: imgFour,
    text: 'Переписка',
    link: '/messages-notarius',
  },
  {
    id: 4,
    img: imgFive,
    text: 'Мои платежи',
    link: '/',
  },
]
const sidebarListSecond = [
  {
    id: 1,
    img: imageThree,
    text: 'Руководства пользователя',
    link: '/manual-notarius',
  },
  {
    id: 2,
    img: imageFour,
    text: 'Профиль',
    link: '/',
  },
  {
    id: 3,
    img: imageFive,
    text: 'Реестр пользователей',
    link: '/',
  },
]

const changeTitle = a => {
  title.value = a
}
</script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active.sidebar-item {
  background: #24334b;
}

.router-link-active.router-link-exact-active .sidebar-item {
  background: #24334b !important;
}

.app-notarius-layout {
  display: flex;
}

.content { 
  padding: 60px;
  flex: 1;
}

.sidebar {
  width: 280px;
  background: #1baa75;
  padding: 50px 0 10px;
  box-sizing: border-box;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
  }

  &.active {
    width: 73px;
    padding: 20px 0;
    overflow: hidden;

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
    margin: 0 10px 50px 25px;
  }

  &-title {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    margin-left: 25px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 25px 12px 20px;
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

@media screen and (max-width:1490px) {
  .sidebar {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
  }
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
 .sidebar {
  width: 100%;
  &.active {
    width: 0;
  }
 }
 .content {
    margin-left: 0;
  }
}
</style>
