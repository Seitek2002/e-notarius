<template>
  <section
    id="acts"
    class="base"
  >
    <div class="container">
      <div class="base__content">
        <div class="base__left">
          <h1>Нормативно-правовая база</h1>
          <ul>
            <li
              v-for="item in items"
              :key="item.id"
            >
              <a
                :href="item.url"
                target="_blank"
              >
                {{ item.title }}
                <ArrowIcon class="base__image"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="base__right">
          <img
            src="/src/assets/images/Base/img.png"
            alt="file-img"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ArrowIcon from '@/components/guest/Home/Icons/ArrowIcon.vue'

const items = [
  {
    id: 0,
    title: 'Кодекс КР о неналоговых доходах',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/111820',
  },
  {
    id: 1,
    title: 'Закон КР \'О Нотариате\'',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/78',
  },
  {
    id: 2,
    title: 'Гражданский Кодекс КР',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/111521?cl=ru-ru',
  },
  {
    id: 3,
    title: 'Трудовой Кодекс КР',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/1505',
  },
  {
    id: 4,
    title: 'Земельный Кодекс КР',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/8',
  },
  {
    id: 5,
    title: 'Постановление Правительства КР \'О Вопросах нотариальной деятельности\'',
    url: 'http://cbd.minjust.gov.kg/act/view/ru-ru/95037',
  },
]
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.base {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
    @media screen and (max-width: 991px) {
      flex-direction: column-reverse;
      flex-wrap: wrap;
      margin-bottom: 70px;
    }
  }

  &__image {
    max-width: 24px;
    max-height: 24px;
    width: 100%;
    height: 100%;
  }
  &__left {
    a {
      max-width: 527px;
      color: $text-dark-blue;

      &:hover {
        text-decoration: underline;

        svg path {
          fill: #1BAA75;
        }
      }


      &:active ~ svg {
        path {
          fill: $text-light-green;
        }
      }

      &:active,
      &:hover,
      &:focus {
        color: $text-light-green;
      }
    }

    h1 {
      font-weight: 600;
      font-size: 36px;
      color: $text-dark-blue;
      margin-bottom: 65px;
      @media screen and (max-width: 991px) {
        font-size: 24px;
        line-height: 29px;
        margin-bottom: 35px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 43px;
      @media screen and (max-width: 991px) {
        gap: 30px;
      }
    }

    li {
      font-weight: 400;
      font-size: 16px;
      color: $text-dark-blue;

      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }

  &__right img {
    max-width: 100%;
    object-fit: cover;
  }
}
</style>
