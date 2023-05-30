<template>
  <section class="omsu">
    <div class="omsu-head">
      <div class="omsu-search">
        <input type="text" class="omsu-search__input" />
        <button class="omsu-search__btn">
          <AppSearchIcon />
        </button>
      </div>
      <button class="omsu-export__btn">
        Экспортировать в Exсel
        <ExcelIcon />
      </button>
    </div>
    <div class="omsu-mid">
      <button class="omsu-mid__btn" @click="isFilter = !isFilter">
        <template v-if="isFilter">
          <FilterDisabledIcon />
          Свернуть фильтр
        </template>
        <template v-else>
          <FilterEnabledIcon />
          Открыть фильтр
        </template>
      </button>
      <div class="omsu-mid__sort">
        <span class="omsu-mid__text">Сортировка за:</span>
        <button class="omsu-mid__select">
          2022 год
          <ArrowDownSmallIcon />
        </button>
      </div>
    </div>
    <div v-show="isFilter" class="omsu-bottom">
      <label class="omsu-bottom__label">
        Номер реестра
        <input type="number" class="omsu-bottom__input" />
      </label>
      <label class="omsu-bottom__label">
        Дата добавления в реестр
        <input type="date" class="omsu-bottom__input" />
      </label>
      <label class="omsu-bottom__label">
        ФИО Нотариуса
        <input type="text" class="omsu-bottom__input" />
      </label>
    </div>
    <div class="adaptive__sort">
      <div class="omsu-mid__sort">
        <span class="omsu-mid__text">Сортировка за:</span>
        <button class="omsu-mid__select">
          2022 год
          <ArrowDownSmallIcon />
        </button>
      </div>
    </div>
    <div class="omsu__adaptive">
      <div class="omsu__left">
        <label class="tooltip">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="#1BAA75" stroke-width="2" />
            <path
              d="M10.9998 16.9996C11.6625 16.9996 12.1998 16.4624 12.1998 15.7996C12.1998 15.1369 11.6625 14.5996 10.9998 14.5996C10.3371 14.5996 9.7998 15.1369 9.7998 15.7996C9.7998 16.4624 10.3371 16.9996 10.9998 16.9996Z"
              fill="#1BAA75" />
            <path
              d="M8.75 7.2497C8.75005 6.85567 8.85358 6.46856 9.05023 6.1271C9.24688 5.78565 9.52975 5.50183 9.87054 5.30403C10.2113 5.10623 10.5981 5.0014 10.9921 5.00001C11.3861 4.99863 11.7736 5.10075 12.1158 5.29616C12.458 5.49156 12.7428 5.77339 12.9418 6.11346C13.1409 6.45353 13.2471 6.8399 13.2499 7.23392C13.2528 7.62794 13.152 8.0158 12.9579 8.35867C12.7637 8.70155 12.4829 8.98743 12.1436 9.1877C11.5736 9.5249 11 10.0373 11 10.6997V12.1997"
              stroke="#1BAA75" stroke-width="2" stroke-linecap="round" />
          </svg><input type="checkbox" /><span>Таблицу можно скролить по<br />
            горизонтали либо Вы можете<br />
            использовать кнопки для<br />
            перемещения по таблице<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M6.64645 6.35355L17.9602 17.6673" stroke="#1BAA75" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M6.35355 17.3536L17.6673 6.03985" stroke="#1BAA75" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg></span>
        </label>
      </div>
      <div class="omsu__right">
        <svg @click="handleScrollLeft" width="40" height="40" viewBox="0 0 40 40" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <g clip-path="url(#clip0_2412_22742)">
            <path d="M22 16L18 20L22 24" stroke="#1BAA75" stroke-width="2" stroke-linejoin="round" />
          </g>
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
          <defs>
            <clipPath id="clip0_2412_22742">
              <rect width="16" height="16" fill="white" transform="translate(28 12) rotate(90)" />
            </clipPath>
          </defs>
        </svg>
        <svg @click="handleScrollRight" width="40" height="40" viewBox="0 0 40 40" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <g clip-path="url(#clip0_2412_22746)">
            <path d="M18 24L22 20L18 16" stroke="#1BAA75" stroke-width="2" stroke-linejoin="round" />
          </g>
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
          <defs>
            <clipPath id="clip0_2412_22746">
              <rect width="16" height="16" fill="white" transform="matrix(0 -1 1 0 12 28)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div ref="container" class="omsu__table">
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
    <div class="omsu__bottom">
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
import { computed, onMounted, ref } from "vue";

import Dropdown from "@/components/global/Tables/OfferTable/Dropdown.vue";
import Sort from "@/components/global/Tables/OfferTable/Sort.vue";
import ArrowDownSmallIcon from "@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue";
import ArrowNextIcon from "@/components/Pagination/Icons/ArrowNextIcon.vue";
import ArrowPrevIcon from "@/components/Pagination/Icons/ArrowPrevIcon.vue";
import AppSearchIcon from "@/views/Icons/AppSearchIcon.vue";
import ExcelIcon from "@/views/Icons/ExcelIcon.vue";
import FilterDisabledIcon from "@/views/Icons/FilterDisabledIcon.vue";
import FilterEnabledIcon from "@/views/Icons/FilterEnabledIcon.vue";

const isFilter = ref(true);

const files = new Array(39);
const itemsPerPage = 6;

const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(files.length / itemsPerPage));
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);

const paginatedItems = computed(() =>
  files.slice(startIndex.value, endIndex.value)
);
const pages = computed(() => {
  const result = [];
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i);
  }
  return result;
});

const emits = defineEmits(["handleChangeTitle"]);
onMounted(() => {
  (() => emits("handleChangeTitle", "Реестр должностных лиц ОМСУ"))();
});
const container = ref(null);

const handleScrollRight = () => {
  container.value.scrollBy({
    left: 200,
    behavior: "smooth",
  });
};

const handleScrollLeft = () => {
  container.value.scrollBy({
    left: -200,
    behavior: "smooth",
  });
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.adaptive {
  &__sort {
    .omsu-mid__sort {
      display: none;

      @media screen and (max-width: 768px) {
        display: block;
      }

      .omsu-mid__select {
        width: 100%;
        margin-top: 10px;
      }
    }
  }
}

.omsu {
  flex: 1;

  &__table {
    min-height: 448px;
    overflow-x: scroll;
    max-width: 100%;
  }

  &__adaptive {
    display: none;
    justify-content: space-between;
    margin-top: 30px;

    @media screen and (max-width: 1138px) {
      display: flex;
    }

    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
  }

  &__left svg {
    cursor: pointer;
  }

  &__right svg {
    margin-left: 10px;
    cursor: pointer;
  }

  &-head {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 40px 0;
    max-width: 100%;

    @media screen and (max-width: 768px) {
      margin: 30px 0;
    }
  }

  &-search {
    width: 100%;

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

    & {
      display: flex;
      align-items: center;
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

    @media screen and (max-width: 768px) {
      display: none;
    }
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

      @media screen and (max-width: 768px) {
        display: none;
      }
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

      @media screen and (max-width: 768px) {
        width: 100%;
        justify-content: center;
      }
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

    @media screen and (max-width: 789px) {
      flex-direction: column;
      justify-content: start;
    }

    &__input {
      padding: 12px 10px;
      width: 100%;
      border: 1px solid #cdcdcd;

      &[type="number"]::-webkit-inner-spin-button,
      &[type="number"]::-webkit-outer-spin-button {
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

      @media screen and (max-width: 789px) {
        align-items: start;
      }
    }
  }
}

.omsu__table {
  max-width: 100%;

  table {
    margin-top: 40px;
    border-collapse: collapse;
    width: 100%;

    @media screen and (max-width: 768px) {
      margin-top: 10px;
    }

    tr {
      width: 100%;
    }

    thead {
      border: 1px solid #cdcdcd;
      border-bottom: 2px solid #cdcdcd;
      height: 64px;

      th {
        padding: 22px 13px;
        background: #ffffff;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: #24334b;
        gap: 20px;
      }
    }

    tbody {
      tr {
        border: 1px solid transparent;

        .order-list__name {
          color: #1baa75;
        }

        &:hover {
          background: #ffffff;
          border-color: #cdcdcd;
        }

        td {
          padding: 16px;
          box-sizing: border-box;
          font-weight: 500;
          font-size: 14px;
          color: #24334b;
          text-align: left;
          padding: 22px 13px;
        }
      }
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
    font-family: "Montserrat", sans-serif;
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

.tooltip {
  position: relative;
}

.tooltip span {
  visibility: hidden;
  width: 320px;
  background: #ffffff;
  color: #000;
  text-align: start;
  border-radius: 6px;
  padding: 16px 16px;
  box-sizing: border-box;
  position: absolute;
  z-index: 9;
  top: -1em;
  left: 100%;
  margin-left: 1em;
  opacity: 0;
  transition: opacity 1s;
  display: flex;
  justify-content: space-between;
}

.tooltip span::after {
  content: "";
  position: absolute;
  top: 1.5em;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}

.tooltip input {
  display: none;
}

.tooltip input:checked+span {
  visibility: visible;
  opacity: 1;
}
</style>
