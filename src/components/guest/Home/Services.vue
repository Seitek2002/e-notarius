<template>
  <section
    id="notariuses"
    class="document"
  >
    <div class="container">
      <div class="document__content">
        <div class="document__block">
          <img
            src="/src/assets/images/Document/Doc_logo.png"
            alt="#"
          >
          <div class="document__box">
            <p class="document__row">
              Узнайте, как получить нотариальные услуги быстро, удобно и безопасно с помощью портала
            </p>
            <p class="document__link">
              <router-link to="/services-catalog">
                Подробнее
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <div class="services__content">
        <h2 class="services__title">
          Сервисы и публичные реестры
        </h2>
        <div class="services__block">
          <div
            v-for="item in routeItems"
            :key="item.title"
          >
            <RouterLink
              :to="item.to"
              class="services__box"
            >
              <component :is="item.img"/>
              <p>{{ item.title }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import AvtoIcon from '@/components/icons/Services/AvtoIcon.vue'
import Book from '@/components/icons/Services/Book.vue'
import Coin from '@/components/icons/Services/Coin.vue'
import Doc from '@/components/icons/Services/Doc.vue'
import Man from '@/components/icons/Services/Man.vue'

const routeItems = [
  {
    img: Doc,
    title: 'Проверка доверенности',
    to: '/check',
  },
  {
    img: AvtoIcon,
    title: 'Проверка заложенного движимого имущества',
    to: '/',
  },
  {
    img: Man,
    title: 'Розыск наследников',
    to: '/heirs-search',
  },
  {
    img: Book,
    title: 'Наследственные дела',
    to: '/',
  },
  {
    img: Coin,
    title: 'Реестр нотариусов КР',
    to: '/notarius-list',
  },
]
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.document {
  &__content {
    margin: 97px 0 167px 0;
    position: relative;
  }

  &__block {
    display: flex;
    justify-content: center;
    gap: 123px;
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 266px;
      top: 47px;
      background: $text-light-green;
      z-index: -1;
      box-shadow: 0 20px 35px #9ecdb8;
      @media screen and (max-width: 991px) {
        height: calc(100% - 146px);
        top: 166px;
      }
    }

    @media screen and (max-width: 991px) {
      flex-wrap: wrap;
      gap: 20px;
      flex-direction: column;
      align-items: center;
    }

    img {
      object-fit: cover;
      @media screen and (max-width: 991px) {
        height: 207px;
      }
    }
  }

  &__box {
    @media screen and (min-width: 992px) {
      padding: 47px 0 0;
    }
    @media screen and (max-width: 991px) {
      padding: 0 10px 0 20px;
    }
  }


  &__row {
    font-weight: 600;
    font-size: 28px;
    font-family: 'Montserrat', sans-serif;
    max-width: 635px;
    width: 100%;
    line-height: 140%;
    color: $bg-white;
    @media screen and (min-width: 992px) {
      margin-top: 50px;
      margin-bottom: 27px;
    }
    @media screen and (max-width: 991px) {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  a {
    color: $bg-white;
  }

  a:hover {
    text-decoration: underline;
  }

  &__link {
    cursor: pointer;
    color: $bg-white;
    text-decoration: underline;
  }
}

.services {
  &__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: $text-dark-blue;
    margin-bottom: 50px;
  }

  &__block {
    display: flex;
    justify-content: center;
    background: $bg-white;
    border: 1px solid $border-gray;
    height: 242px;
    margin-bottom: 120px;

    @media screen and (max-width: 991px) {
      flex-wrap: wrap;
      height: unset;
      justify-content: space-between;
    }
  }

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    width: 242px;
    height: 242px;

    svg {
      path {
        stroke: $bg-dark-blue;
      }
    }

    &:hover {
      background: $bg-dark-blue;
      filter: drop-shadow(0px 20px 35px $drop-dark-blue);

      p {
        color: $bg-white;
      }

      svg {
        path {
          stroke: $bg-white;
        }
      }
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      font-family: 'Montserrat', sans-serif;
      width: 150px;
      color: $text-dark-blue;
    }
  }
}
</style>
