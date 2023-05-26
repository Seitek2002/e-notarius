<template>
  <section class="application">
    <div class="application-head">
      <div class="application-search">
        <input type="text" class="application-search__input">
        <button class="application-search__btn">
          <AppSearchIcon />
        </button>
      </div>
      <button class="application-export__btn">
        Экспортировать в Exсel
        <ExcelIcon />
      </button>
    </div>
    <div class="application-mid">
      <button class="application-mid__btn" @click="isfilter = !isfilter">
        <template v-if="isfilter">
          <FilterDisabledIcon />
          Свернуть фильтр
        </template>
        <template v-else>
          <FilterEnabledIcon />
          Открыть фильтр
        </template>
      </button>
      <div class="application-mid__sort">
        <span class="application-mid__text">Сортировка за:</span>
        <button class="application-mid__select">
          2022 год
          <ArrowDownSmallIcon />
        </button>
      </div>
    </div>
    <div v-show="isfilter" class="application-bottom">
      <label class="application-bottom__label">
        Номер реестра
        <input type="number" class="application-bottom__input">
      </label>
      <label class="application-bottom__label">
        Дата добавления в реестр
        <input type="date" class="application-bottom__input">
      </label>
      <label class="application-bottom__label">
        ФИО Нотариуса
        <input type="text" class="application-bottom__input">
      </label>
    </div>
    <div class="application__table">
      <table>
        <thead>
          <tr>
            <th>
              <Sort title="ФИО" />
            </th>
            <th>
              <Dropdown title="Должность" :option="[]" />
            </th>
            <th>
              <Sort title="Дата рождения" />
            </th>
            <th>
              <Sort title="Мобильный телефон" />
            </th>
            <th>
              <Sort title="E-mail" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(offer, i) in paginatedItems" :key="i">
            <td>Биримкулов Нурамир Тагдырович</td>
            <td>Сотрудник Консульства</td>
            <td>01.01.2022</td>
            <td>0770 00 00 90</td>
            <td><a href="mailto:nur@bk.com">nur@bk.com</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="application__bottom">
      <ul class="pagination">
        <li v-if="currentPage > 1">
          <a @click="currentPage--">
            <ArrowPrevIcon />
            Пред.
          </a>
        </li>
        <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
          <a @click="currentPage = page">{{ page }}</a>
        </li>
        <li v-if="currentPage < totalPages">
          <a @click="currentPage++">
            След.
            <ArrowNextIcon />
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import Dropdown from '@/components/global/Tables/OfferTable/Dropdown.vue'
import Sort from '@/components/global/Tables/OfferTable/Sort.vue'
import ArrowDownSmallIcon from '@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue'
import ArrowNextIcon from '@/components/Pagination/Icons/ArrowNextIcon.vue'
import ArrowPrevIcon from '@/components/Pagination/Icons/ArrowPrevIcon.vue'
import AppSearchIcon from '@/views/Icons/AppSearchIcon.vue'
import ExcelIcon from '@/views/Icons/ExcelIcon.vue'
import FilterDisabledIcon from '@/views/Icons/FilterDisabledIcon.vue'
import FilterEnabledIcon from '@/views/Icons/FilterEnabledIcon.vue'

const isfilter = ref(true)

const files = new Array(39)
const itemsPerPage = 6

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(files.length / itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)

const paginatedItems = computed(() => files.slice(startIndex.value, endIndex.value))
const pages = computed(() => {
  const result = []
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i)
  }
  return result
})

const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Реестр должностных лиц ОМСУ'))()
})
</script>

<style lang="scss" scoped>
.application {
  flex: 1;

  &-head {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 40px 0;
    max-width: 100%;
  }

  &-search {
    width: 100%;
    display: flex;

    &__input {
      padding: 15px;
      width: 100%;

      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        color: #bdbdbd;
      }
    }

    &__btn {
      width: 80px;
      height: 50px;
      background: #1baa75;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-export__btn {
    border: 1px solid #1baa75;
    font-weight: 600;
    font-size: 14px;
    color: #1baa75;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 50px;
    width: 300px;
  }

  &-mid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    &__sort {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__btn {
      background: #1baa75;
      box-shadow: 0 10px 20px #99dbaf;
      font-weight: 600;
      font-size: 16px;
      color: #f6f6f6;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 30px;
      width: 235px;
    }

    &__text {
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }

    &__select {
      background: #ffffff;
      border: 1px solid #1baa75;
      padding: 12px 10px;
      font-weight: 600;
      font-size: 14px;
      width: 250px;
      color: #1baa75;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  &-bottom {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    gap: 40px;

    &__input {
      padding: 12px 10px;
      width: 100%;
      border: 1px solid #cdcdcd;

      &[type='number']::-webkit-inner-spin-button,
      &[type='number']::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &::placeholder {
        font-weight: 400;
        font-size: 14px;
        color: #bdbdbd;
      }
    }

    &__label {
      width: 100%;
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 17px auto;
  padding: 8px 10px;
  max-width: 583px;
  background: #fff;
  border: 1px solid #cdcdcd;

  li {
    font-family: 'Montserrat', sans-serif;
    color: #24334b;
    font-size: 16px;
    border: 1px solid transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
    }

    svg {
      margin: 0 9px;
    }

    &.active {
      border: 1px solid #1baa75;
      color: #1baa75;
    }
  }
}

.application__table {
  max-width: 73vw;
  overflow-x: scroll;
}

table {
  width: 120%;
  border-collapse: collapse;

  tr {
    height: 80px;
    transition: 0.5s;
  }

  .sort-table {
    justify-content: space-between;
  }

  thead {
    border: 1px solid #cdcdcd;
    border-bottom: 2px solid #cdcdcd;
    height: 64px;

    th {
      padding: 22px 10px;
      background: #ffffff;
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
      text-align: left;
    }
  }

  tbody {
    tr {
      border: 1px solid transparent;

      &:hover {
        background: #ffffff;
        border-color: #cdcdcd;
      }

      td {
        box-sizing: border-box;
        font-weight: 500;
        font-size: 14px;
        color: #24334b;
        text-align: left;
        padding: 22px 10px;

        a {
          color: #1BAA75;
          text-decoration-line: underline;
        }
      }
    }
  }
}
</style>
