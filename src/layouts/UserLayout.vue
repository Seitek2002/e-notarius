<template>
  <div class="app-user-layout">
    <section :class="store.state.userSidebar ? 'sidebar active' : 'sidebar'">
      <div class="sidebar-wrapper">
        <div class="sidebar-head">
          <router-link to="/">
            <logo/>
          </router-link>
          <close
            class="sidebar-close"
            @click="store.state.userSidebar = !store.state.userSidebar"
          />
        </div>
        <h2 class="sidebar-title">
          Личный кабинет
        </h2>
        <div :class="store.state.userSidebar ? 'sidebar-list active' : 'sidebar-list'">
          <router-link
            v-for="(item, i) in sidebarList"
            :key="item.id"
            :to="item.link"
            class="sidebar-item"
            @click="firstIndex = i, SecondIndex = null"
          >
            <component
              :is="item.img"
              class="sidebar-icons"
            />
            <span class="sidebar-link">{{ item.text }}</span>
          </router-link>
        </div>
        <div :class="store.state.userSidebar ? 'sidebar-list active' : 'sidebar-list'">
          <router-link
            v-for="item in sidebarListSecond"
            :key="item.id"
            :to="item.link"
            class="sidebar-itemm"
          >
            <div class="sidebar-item">
              <component
                :is="item.img"
                class="sidebar-icons"
              />
              <span class="sidebar-link">{{ item.text }}</span>
            </div>
          </router-link>
        </div>

        <router-link
          to="/"
          :class="store.state.userSidebar ? 'sidebar-item sidebar-last-item close' : 'sidebar-item sidebar-last-item'"
        >
          <left class="sidebar-icons"/>
          <div class="sidebar-link sidebar-last-link">
            Выход с кабинета
          </div>
        </router-link>
      </div>
    </section>
    <section class="content">
      <OwnRoomTop :title="title"/>
      <router-view @islam="changeTitle"/>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import close from '@/layouts/Icons/sidebar/close.vue'
import imageExtra from '@/layouts/Icons/sidebar/imageExtra.vue'
import imageFive from '@/layouts/Icons/sidebar/imageFive.vue'
import imageFour from '@/layouts/Icons/sidebar/imageFour.vue'
import imageOne from '@/layouts/Icons/sidebar/imageOne.vue'
import imageThree from '@/layouts/Icons/sidebar/imageThree.vue'
import imageTwo from '@/layouts/Icons/sidebar/imageTwo.vue'
import imgFive from '@//layouts/Icons/sidebar/imgFive.vue'
import imgFour from '@/layouts/Icons/sidebar/imgFour.vue'
import imgOne from '@/layouts/Icons/sidebar/imgOne.vue'
import imgThree from '@/layouts/Icons/sidebar/imgThree.vue'
import imgTwo from '@/layouts/Icons/sidebar/imgTwo.vue'
import left from '@/layouts/Icons/sidebar/left.vue'
import logo from '@/layouts/Icons/sidebar/logo.vue'
import OwnRoomTop from './OwnRoomTop.vue'
import { useStore } from 'vuex'
const store = useStore()
const title = ref('Заявки') 
const firstIndex = ref(0)
const SecondIndex = ref(null)
const changeTitle = a => {
  title.value = a
}

const sidebarList = [
  {
    id: 0,
    img: imgOne,
    text: 'Заявки',
    link: '/order-list-user',
  },
  {
    id: 1,
    img: imgTwo,
    text: 'Мои шаблоны',
    link: '/exemple-user',
  },
  {
    id: 2,
    img: imgThree,
    text: 'Мои файлы',
    link: '/files-list-user',
  },
  {
    id: 3,
    img: imgFour,
    text: 'Переписка',
    link: '/messages-user',
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
    id: 0,
    img: imageOne,
    text: 'Шаблоны',
    link: '/temp-user',
  },
  {
    id: 1,
    img: imageTwo,
    text: 'Реестр нотариальных действий',
    link: '/applications-user',
  },
  {
    id: 1,
    img: imageExtra,
    text: 'Реестр нотариусов',
    link: '/applications-user',
  },
  {
    id: 2,
    img: imageThree,
    text: 'Руководства пользователя',
    link: '/manual-user',
  },
  {
    id: 3,
    img: imageFive,
    text: 'Реестр пользователей',
    link: '/registry-client-user',
  },
  {
    id: 3,
    img: imageFour,
    text: 'Профиль',
    link: '/profile-user',
  },
]
</script>

<style lang="scss" scoped>
.app-user-layout {
  display: flex;
  height: inherit;
}

.router-link-active.router-link-exact-active.sidebar-item {
  background: #24334b;
}

.router-link-active.router-link-exact-active .sidebar-item {
  background: #24334b !important;
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
      margin: 0 0 0 14.5px;
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

    &.active {
      display: none;
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

.content {
  flex: 1;
  padding: 60px;
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
