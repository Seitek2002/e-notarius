<template>
  <section class="application">
    <div class="application-head">
      <div class="application-search">
        <input type="text" class="application-search__input" />
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
        <input type="number" class="application-bottom__input" />
      </label>
      <label class="application-bottom__label">
        Дата добавления в реестр
        <input type="date" class="application-bottom__input" />
      </label>
      <label class="application-bottom__label">
        ФИО Нотариуса
        <input type="text" class="application-bottom__input" />
      </label>
    </div>
    <div class="application-table">
      <table>
        <thead>
          <tr>
            <th>QR</th>
            <th>
              <Sort title="ID" />
            </th>
            <th>
              <Sort title="Номер реестра" style="white-space: nowrap" />
            </th>
            <th>
              <Dropdown title="Нотариальное действие" :options="firstList" style="white-space: nowrap" />
            </th>
            <th>
              <Dropdown title="Вид действия" :options="secondList" style="white-space: nowrap" />
            </th>
            <th>
              <Dropdown title="Вид документа" :options="thirdList" style="white-space: nowrap" />
            </th>
            <th>
              <Sort title="Обратившееся лицо" style="white-space: nowrap" />
            </th>
            <th>
              <Dropdown title="Статус" :options="thirdList" />
            </th>
            <th>
              <Sort title="Дата создания" style="white-space: nowrap" />
            </th>
            <th>
              <Sort title="Дата отмены" style="white-space: nowrap" />
            </th>
            <th>
              <Sort title="Дата добавления в реестр" style="width: 190px; text-align: left" />
            </th>
            <th>Пошлина</th>
            <th>Причина</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, i) in paginatedItems" :key="i">
            <td>
              <Qr />
            </td>
            <td>015163</td>
            <td>125-8563</td>
            <td>Обеспечение доказательства</td>
            <td>Соглашение</td>
            <td>Свидетельство о праве собственности</td>
            <td>Чалбеков Анарбек Ибраимович</td>
            <td>Исполнен</td>
            <td>01.01.2022</td>
            <td>01.01.2022</td>
            <td>01.01.2022</td>
            <td>Освобожден</td>
            <td style="white-space: nowrap">Отказ клиента</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="application__bottom">
      <Pagination :itemsPerPage="itemsPerPage" :items="files" @paginate="paginate" />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

import ArrowDownSmallIcon from "@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue";
import ArrowNextIcon from "@/components/Pagination/Icons/ArrowNextIcon.vue";
import ArrowPrevIcon from "@/components/Pagination/Icons/ArrowPrevIcon.vue";
import AppSearchIcon from "@/views/Icons/AppSearchIcon.vue";
import ExcelIcon from "@/views/Icons/ExcelIcon.vue";
import FilterDisabledIcon from "@/views/Icons/FilterDisabledIcon.vue";
import FilterEnabledIcon from "@/views/Icons/FilterEnabledIcon.vue";
import Dropdown from "@/components/global/Tables/OfferTable/Dropdown.vue";
import Qr from "@/components/global/Tables/OfferTable/Qr.vue";
import Sort from "@/components/global/Tables/OfferTable/Sort.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

const isfilter = ref(true);

const files = new Array(39);
const itemsPerPage = 6;

const paginatedItems = ref(files);

const paginate = (data) => {
  paginatedItems.value = data.value; // paginatedItems.push(data)
};
const qr = ref(null);
const firstList = ref([
  "Согласие",
  "Доверенность",
  "Заявление",
  "Выдача",
  "Копии",
  "Факты",
  "Свидетельство",
]);
const secondList = ref([
  "Согласие",
  "Доверенность",
  "Заявление",
  "Выдача",
  "Копии",
  "Факты",
  "Свидетельство",
]);
const thirdList = ref([
  "Исполнен",
  "На разъяснении",
  "В обработке",
  "Отменен",
  "Отклонен",
  "На исполнении",
]);
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

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
    }
  }
}

.application-table {
  max-width: 1115px;
  overflow: auto;

  table {
    margin-top: 40px;
    border-collapse: collapse;

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
</style>
