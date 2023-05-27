<template>
  <section class="catalog">
    <div class="container">
      <h1>Каталог услуг</h1>
      <div class="catalog__top">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          class="catalog__tab"
          :class="{ active: tab.id === isActive }"
          @click="isActive = tab.id"
        >
          {{ tab.title }}
        </div>
      </div>
      <template
        v-for="tab in tabs"
        :key="tab.id"
      >
        <div
          v-if="tab.id === isActive"
          class="catalog__content"
        >
          <router-link
            v-for="content in tab.content"
            :key="content"
            to="/services-catalog/attorney"
          >
            <SuccessContentIcon/>
            {{ content }}
          </router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import SuccessContentIcon from '@/components/guest/NotariusList/Icons/SuccessContentIcon.vue'

const isActive = ref(3)

onMounted(() => {
  window.scrollTo({ top: 0 })
})

const tabs = ref([
  {
    id: 0,
    title: 'Сделки',
    content: [''],
  },
  {
    id: 1,
    title: 'Завещание и наследство',
    content: [''],
  },
  {
    id: 2,
    title: 'Прочие нотариальные действия',
    content: [''],
  },
  {
    id: 3,
    title: 'Доверенности',
    content: [
      'Доверенность на управление и (или) распоряжение автомототранспортным средством',
      'Доверенность на отчуждение (распоряжение) недвижимым имуществом (с правом продажи, дарения, мены, заключения найма, и аренды, залога и т.д.)',
      'Доверенность на ведение наследственного дела',
      'Доверенность на получение пенсии и пособии',
      'Доверенность на участие в суде',
      'Доверенность на получение денежных средств (зарп. платы, премии, выплаты, выигрыша и получения документов)',
    ],
  },
  {
    id: 4,
    title: 'Заявления',
    content: [''],
  },
])
</script>

<style lang="scss">
.catalog {
  h1 {
    text-align: center;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  &__tab {
    background: #1baa75;
    padding: 11px 20px;
    box-shadow: 0 0 0 transparent;
    color: #f6f6f6;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;

    &.active {
      background: #3f5984;
      box-shadow: 0 10px 20px #99dbaf;
    }
  }

  &__content {
    padding: 30px 0;

    a {
      position: relative;
      padding-left: 23px;
      box-sizing: border-box;
      display: block;
      margin: 15px 0;
      color: #3f5984;

      svg {
        position: absolute;
        top: 0;
        left: -10px;
      }
    }
  }
}
</style>
