<template>
  <section class="register">
    <div class="container">
      <div class="register__content">
        <div class="register__input">
          <label class="register__search">
            <div class="register__flex">
              <input v-model="searchVal" type="text" />
              <button
                @click="
                  paginatedItems = items.filter((item) =>
                    item.name.includes(searchVal)
                  )
                "
              >
                <AppSearchIcon />
              </button>
            </div>
          </label>
        </div>
        <div class="register__filter">
          <button @click="showFilters = !showFilters">
            <FilterDisableIcon v-show="showFilters" />
            <FilterEnableIcon v-show="!showFilters" />
            {{ showFilters ? "Свернуть" : "Развернуть" }} фильтр
          </button>
          <div class="register__fixed">
            <label
              :class="isCheckFirst ? ' active' : ''"
              @click="isCheckFirst = !isCheckFirst"
            >
              <div v-show="isCheckFirst" class="register__pin">
                <SuccessContentIcon />
              </div>
              <div v-show="!isCheckFirst" class="register__mark" />
              Круглосуточно
            </label>
            <label
              :class="isCheckSecond ? ' active' : ''"
              @click="isCheckSecond = !isCheckSecond"
            >
              <div v-show="isCheckSecond" class="register__pin">
                <SuccessContentIcon />
              </div>
              <div v-show="!isCheckSecond" class="register__mark" />
              Выездной
            </label>
          </div>
          <div class="register__fix">
            <p>Сортировка:</p>
            <div
              class="register__box"
              :class="isActive ? 'active' : ''"
              @click="isActive = !isActive"
            >
              <p>{{ setSort }}</p>
              <ArrowDownSmallIcon />
            </div>
            <div v-show="isActive" class="register__sort sort">
              <div
                class="sort__option"
                @click="
                  (setSort = 'В алфавитном порядке'), (isActive = !isActive);
                "
              >
                В алфавитном порядке
              </div>
              <div
                class="sort__option"
                @click="(setSort = 'По оценкам'), (isActive = !isActive);"
              >
                По оценкам
              </div>
            </div>
          </div>
        </div>
        <Filter v-show="showFilters" />
        <div class="register__adaptive">
          <div class="register__fixed">
            <label
              :class="isCheckFirst ? ' active' : ''"
              @click="isCheckFirst = !isCheckFirst"
            >
              <div v-show="isCheckFirst" class="register__pin">
                <SuccessContentIcon />
              </div>
              <div v-show="!isCheckFirst" class="register__mark" />
              Круглосуточно
            </label>
            <label
              :class="isCheckSecond ? ' active' : ''"
              @click="isCheckSecond = !isCheckSecond"
            >
              <div v-show="isCheckSecond" class="register__pin">
                <SuccessContentIcon />
              </div>
              <div v-show="!isCheckSecond" class="register__mark" />
              Выездной
            </label>
          </div>
          <div class="register__fix">
            <p>Сортировка:</p>
            <div
              class="register__box"
              :class="isActive ? 'active' : ''"
              @click="isActive = !isActive"
            >
              <p>{{ setSort }}</p>
              <ArrowDownSmallIcon />
            </div>
            <div v-show="isActive" class="register__sort sort">
              <div
                class="sort__option"
                @click="
                  (setSort = 'В алфавитном порядке'), (isActive = !isActive)
                "
              >
                В алфавитном порядке
              </div>
              <div
                class="sort__option"
                @click="(setSort = 'По оценкам'), (isActive = !isActive)"
              >
                По оценкам
              </div>
            </div>
          </div>
        </div>
        <div class="register__user">
          <template v-for="item in paginatedItems" :key="item.id">
            <Item :item="item" />
          </template>
        </div>
        <div class="register__scroll">
          <Pagination :items-per-page="3" :items="items" @paginate="paginate" />
        </div>
        <div class="register__map">
          <h2>Поиск нотариуса на карте</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.252093263493!2d74.63955111225368!3d42.867523002769474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7003ee8fde1%3A0x8566a67bd1943650!2z0J_Rg9GC0LXQv9GA0L7QstC-0LTQvdCw0Y8g0YPQu9C40YbQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1681858493146!5m2!1sru!2skg"
            width="1214"
            height="607"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";

import Filter from "@/components/guest/NotariusList/Filter.vue";
import Item from "@/components/guest/NotariusList/Item.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import ArrowDownSmallIcon from "@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue";
import FilterDisableIcon from "@/components/guest/NotariusList/Icons/FilterDisableIcon.vue";
import FilterEnableIcon from "@/components/guest/NotariusList/Icons/FilterEnableIcon.vue";
import SuccessContentIcon from "@/components/guest/NotariusList/Icons/SuccessContentIcon.vue";
import AppSearchIcon from "@/views/Icons/AppSearchIcon.vue";

const store = useStore();
const emits = defineEmits(["handleChangeTitle"]);
const showFilters = ref(false);
const items = ref(store.state.notariusList);
const isActive = ref(false);
const isCheckFirst = ref(false);
const isCheckSecond = ref(false);
const searchVal = ref("");
const setSort = ref("В алфавитном порядке");

const paginatedItems = ref([
  {
    id: 0,
  },
]);

const paginate = (data) => {
  paginatedItems.value = data.value;
};

onMounted(() => {
  window.scrollTo({ top: 0 });
  (() => emits("handleChangeTitle", "Реестр нотариусов"))();
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.register {
  &__input {
    @media screen and (max-width: 1050px) {
      margin-top: 30px;
    }
  }
  &__fixed {
    display: flex;
    align-items: center;
    gap: 30px;

    label {
      display: flex;
      font-weight: 600;
      font-size: 14px;

      &.active {
        color: #1baa75;
      }
    }
  }

  &__pin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    box-shadow: 0 5px 12px -5px rgba(174, 174, 174, 0.06),
      0 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #1baa75;
    border-radius: 2px;
    text-align: center;
  }

  .sort {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 10;

    &__option {
      cursor: pointer;
    }
  }

  &__mark {
    width: 16px;
    height: 16px;
    padding: 2px;
    box-sizing: border-box;

    border: 1px solid #cdcdcd;
    box-shadow: 0 5px 12px -5px rgba(174, 174, 174, 0.06),
      0 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #ffffff;
    border-radius: 100%;
  }

  &__content {
    margin-top: 60px;
    @media screen and (max-width: 1050px) {
      margin-top: 0;
    }
    h1 {
      font-weight: 600;
      font-size: 36px;
      color: #24334b;
      margin-bottom: 50px;
      @media screen and (max-width: 1050px) {
        font-size: 24px;
        margin-bottom: 20px;
      }
    }
  }

  &__filter {
    margin-top: 40px;

    button {
      width: 320px;
      padding: 14px 0;
      border: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      transition: 0.3s;
      background: #1baa75;

      &:not(:disabled):hover {
        opacity: 0.96;
        box-shadow: 0 10px 20px #99dbaf;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      @media screen and (max-width: 1050px) {
        width: 100%;
        margin: 0 auto;
      }
    }
    div {
      @media screen and (max-width: 1050px) {
        display: none;
      }
    }
  }

  &__flex {
    display: flex;
    width: 100%;

    button {
      width: 80px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1baa75;
      border: none;
    }
  }

  label {
    position: relative;
    gap: 16px;
    align-items: center;

    &:focus-within {
      input {
        border: 1px solid #1baa75;
      }

      p {
        color: #1baa75;
      }
    }

    input {
      font-family: "Montserrat", sans-serif;
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      height: 50px;
      box-sizing: border-box;
      background: transparent;
      border: 1px solid #cdcdcd;
      outline: none;
    }
  }

  &__filter {
    display: flex;
    justify-content: space-between;
  }

  &__fix {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    p {
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }
  }

  &__box {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #1baa75;
    gap: 16px;
    padding: 12px 10px 12px 19px;
    height: 20px;
    cursor: pointer;

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
    }
  }

  &__item {
    margin-top: 40px;

    label {
      background: #fff;
      position: relative;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 311px;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      border: 1px solid #cdcdcd;
      outline: none;
      box-sizing: border-box;
      cursor: pointer;

      @media screen and (max-width: 1050px) {
        width: 100%;
        margin-bottom: 0;
      }
      &.active {
        border: 1px solid #1baa75;

        p {
          color: #1baa75;
        }

        svg {
          transform: rotate(180deg);
        }
      }
    }

    p {
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      margin-bottom: 5px;
    }
    @media screen and (max-width: 1050px) {
      margin-top: 0;
      width: 100%;
    }
  }

  &__block {
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    @media screen and (max-width: 1050px) {
      gap: 0;
      max-width: 100%;
    }
  }

  &__btn {
    margin-bottom: 56px;

    button {
      width: 320px;
      padding: 14px 0;
      border: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      transition: 0.3s;
      background: #3f5984;
      @media screen and (max-width: 1050px) {
        width: 100%;
      }
      &:not(:disabled):hover {
        opacity: 0.96;
        box-shadow: 0 10px 20px #99dbaf;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    @media screen and (max-width: 1050px) {
      margin-bottom: 0;
    }
  }
  &__adaptive {
    display: none;
    padding-top: 22px;
    div {
      margin-top: 34px;
      label {
        div {
          margin-top: 0;
        }
      }
    }
    .register__fix {
      flex-direction: column;
      align-items: start;
      gap: 0;
    }
    .register__box {
      margin-top: 0;
      width: 100%;
      justify-content: space-between;
      box-sizing: border-box;
      height: 44px;
    }
    @media screen and (max-width: 1050px) {
      display: block;
    }
  }
  &__profile {
    max-width: 286px;
    padding: 23px 21px 31px 20px;
    background: transparent;
    box-sizing: border-box;
    transition: 0.3s;
    margin-top: 56px;
    &:hover {
      background: #fff;
      box-shadow: 0 5px 20px #e9e9e9;
    }
    @media screen and (max-width: 1050px) {
      max-width: 100%;
      width: 100%;
      padding: 16px 16px;
      margin-top: 10px;
    }
  }

  &__img {
    text-align: center;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
      @media screen and (max-width: 1050px) {
        width: 50px;
        height: 50px;
      }
    }

    h1 {
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #24334b;
      margin-top: 20px;
      @media screen and (max-width: 1050px) {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 1050px) {
      display: flex;
      align-items: center;
      font-size: 16px;
    }
  }

  &__stars {
    display: flex;
    gap: 8px;
    margin-top: 10px;
    align-items: center;
    h1 {
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
      margin: 0;
    }

    p {
      font-weight: 400;
      font-size: 16px;
      max-width: 246px;
      height: 60px;
      color: #bdbdbd;
      margin: 0;
      @media screen and (max-width: 1050px) {
        height: 100%;
      }
    }
  }

  &__street {
    max-width: 229px;
    font-weight: 400;
    font-size: 16px;
    color: #24334b;
    margin-top: -22px;
    @media screen and (max-width: 1050px) {
      display: none;
    }
  }

  &__user {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 50px;
    @media screen and (max-width: 1050px) {
      gap: 0;
    }
  }

  &__scroll {
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 120px;
    @media screen and (max-width: 1050px) {
      margin-bottom: 0;
    }
    .pagination {
      @media screen and (max-width: 1050px) {
        margin: 0 0;
        padding: 8px 20%;
      }
    }
  }

  &__map {
    h2 {
      font-weight: 600;
      font-size: 36px;
      color: #24334b;
      margin-bottom: 50px;
      @media screen and (max-width: 1050px) {
        margin-top: 45px;
        font-size: 24px;
      }
    }

    iframe {
      margin-bottom: 110px;
      max-width: 100%;
    }
  }
}
</style>
