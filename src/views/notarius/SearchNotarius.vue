<template>
  <section class="heirs">
    <div class="container">
      <div class="heirs__content">
        <h1 class="heirs__title">
          Розыск наследников
        </h1>
        <form class="heirs__inp">
          <div class="heirs__box">
            <div class="heirs__block">
              <p>ФИО наследодателя (обязателен)</p>
              <input
                required
                type="text"
              >
            </div>
            <div class="heirs__block">
              <p>ИНН наследодателя</p>
              <input type="text">
            </div>
            <button class="heirs__find">
              <AppSearchSmallIcon/>
              Найти
            </button>
          </div>
        </form>
        <p class="heirs__row">
          не введено ФИО наследодателя
        </p>
        <div class="heirs__case">
          <h2>Пока ничего не найдено</h2>
          <EmptyIcon/>
        </div>
        <div
          class="heirs__item"
          :class="isActive ? ' active' : ''"
        >
          <div
            class="heirs__top"
            @click="isActive = !isActive"
          >
            <div>
              <PersonSmallIcon/>
              <h3>Нурмырзаев Баккелди Абылкасымович</h3>
            </div>
            <PlusIcon/>
            <MinusIcon/>
          </div>
          <div
            v-if="isActive"
            class="heirs__login"
          >
            <ul>
              <p>
                <span>Наследодатель:</span>
                <a href="#">Нурмырзаев Баккелди Бекмолдоевич</a>
              </p>
              <p>
                <span>Наследователь:</span>
                <a href="#">Бекмолдоев Акбар Баккелдиевич</a>
              </p>
              <p>
                <span>Нотариус:</span>
                <a href="#">Частный нотариус Баланчаев Б.Б.</a>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'
import AppSearchSmallIcon from '@/views/Icons/AppSearchSmallIcon.vue'
import PersonSmallIcon from '@/views/Icons/PersonSmallIcon.vue'
import EmptyIcon from '@/components/icons/HeirsSearch/EmptyIcon.vue'

const isActive = ref(false)
</script>

<style lang="scss">
.heirs {
  margin-top: 100px;

  &__title {
    font-weight: 600;
    font-size: 36px;
    font-family: 'Montserrat', sans-serif;
    color: #24334b;
  }

  &__box {
    display: flex;
    align-items: flex-end;
    margin-top: 50px;
    gap: 40px;
  }

  &__block {
    display: flex;
    width: 407px;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;

    input {
      padding-left: 10px;
      color: #bdbdbd;
      font-weight: 400;
      font-size: 16px;
      height: 50px;
      background: #ffffff;
      border: 1px solid #eb5757;
      outline: none;

      &:focus {
        border: 1px solid #1baa75;
      }
    }

    p {
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      color: #24334b;
    }
  }

  &__find {
    width: 320px;
    height: 50px;
    background: #1baa75;
    border: none;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  &__row {
    font-weight: 400;
    margin-top: 5px;
    font-family: 'Montserrat', sans-serif;
    color: #3f5984;
  }

  &__case {
    display: none;
    text-align: center;
    margin: 48px 0 80px 0;

    h2 {
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #9a9a9a;
    }
  }

  &__sort {
    margin-left: 335px;
  }

  &__user__block {
    display: flex;
    align-items: center;
    margin-top: 70px;

    h3 {
      width: 500px;
      height: 24px;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #24334b;
    }

    span {
      color: #1baa75;
    }

    p {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }
  }

  &__registr {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #1baa75;
    gap: 16px;
    padding: 12px 10px 12px 19px;
    height: 20px;
    cursor: pointer;

    p {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
    }
  }

  &__item {
    margin-top: 35px;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: #24334b;

    .minus {
      display: none;
    }

    h3 {
      max-width: 615px;
      font-weight: 600;
      font-size: 16px;
    }

    div {
      display: flex;
      gap: 19px;
    }
  }

  &__item.active &__top {
    background: #3f5984;
    box-shadow: 0 5px 20px #e9e9e9;
    color: #ffffff;

    .plus {
      display: none;
    }

    .minus {
      display: block;
    }

    svg {
      path {
        stroke: #fff;
      }
    }
  }

  &__info {
    P {
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
    }

    p:first-child {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
    }
  }

  &__login {
    padding: 20px 15px;
    background: #ffffff;
    display: flex;
    gap: 10px;

    span {
      font-weight: 700;
      font-size: 16px;
      margin-right: 5px;
    }

    a {
      font-weight: 400;
      font-size: 16px;
      color: #24334b;

      &:focus-within {
        color: #1baa75;
      }
    }

    p {
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      margin-bottom: 10px;
    }
  }
}
</style>
