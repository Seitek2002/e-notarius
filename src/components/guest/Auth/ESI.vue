<template>
  <div class="auth-item">
    <div
      class="auth-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <div>
        <FingerprintIcon />
        <h3>Вход посредством ЭЦП</h3>
      </div>
      <PlusIcon v-show="!isActive" />
      <MinusIcon v-show="isActive" />
    </div>
    <div v-show="isActive" class="auth-item__login">
      <div class="auth-item__btns">
        <button class="active">Вход через ИНН</button>
        <button>Вход через ID</button>
      </div>
      <form @submit.prevent>
        <label for="personal-number">
          <p>идентификационый номер (ИНН)</p>
          <input
            id="personal-number"
            v-model="inn"
            type="text"
            required
            autocomplete="username"
          />
        </label>
        <label for="password">
          <p>Пароль</p>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
          />
        </label>
        <a href="#" class="forget-password"> Забыли пароль? </a>
        <div v-show="err" class="auth-item__err">
          <div class="auth-item__info">
            <h3>Неудачная попытка входа</h3>
            <p>
              Вы не можете войти в личный кабинет, так как вы не
              зарегистрировались в ЕСИ. Для того, чтобы получить ЕСИ вам
              необходимо обратиться в ближайший ЦОН или к любому нотариусу в
              реестре для получения логина.
            </p>
          </div>
          <WarningIcon />
        </div>
        <Btn
          title="Войти"
          bg="#1BAA75"
          :disabled="isLoading"
          @click="handleClick, router.push('/order-list-notarius')"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import Btn from "@/components/global/UI/Buttons/Btn.vue";
import FingerprintIcon from "@/components/guest/Auth/Icons/FingerprintIcon.vue";
import MinusIcon from "@/components/guest/Auth/Icons/MinusIcon.vue";
import PlusIcon from "@/components/guest/Auth/Icons/PlusIcon.vue";
import WarningIcon from "@/components/guest/Auth/Icons/WarningIcon.vue";

const isActive = ref(false);
const router = useRouter();
const isLoading = ref(false);
const inn = ref("");
const password = ref("");
const err = ref(false);

const handleClick = () => {
  err.value = false;
  isLoading.value = true;

  setTimeout(() => {
    if (inn.value.trim() === "" || password.value.trim() === "") {
      err.value = true;
      isLoading.value = false;
    } else {
      err.value = false;
      isLoading.value = false;
    }
  }, 4000);
};
</script>

<style lang="scss">
.auth-item {
  background: #fff;
  margin-bottom: 28px;
  #password {
    padding: 15px;
    &[type="password"] {
      font-size: 35px;
      letter-spacing: 3px;
      padding: 2px 15px;
      line-height: 10px;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: #24334b;

    h3 {
      font-weight: 600;
      font-size: 16px;
      margin: 0;
    }

    div {
      display: flex;
      gap: 19px;
    }
  }

  &__top.active {
    background: #3f5984;
    box-shadow: 0 5px 20px #e9e9e9;
    color: #ffffff;

    svg {
      path {
        stroke: #fff;
      }
    }
  }

  &__login {
    padding: 30px 20px;
  }

  &__btns {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;

    button {
      width: 230px;
      border: none;
      font-size: 16px;
      padding: 15px 0;
      background: transparent;
      font-family: "Montserrat", sans-serif;
      transition: 0.3s;

      &.active {
        background: #1baa75;
        color: #f6f6f6;

        &:hover {
          box-shadow: 0 10px 20px #99dbaf;
        }
      }
    }
  }

  label {
    position: relative;
    margin-bottom: 20px;
    display: block;

    &:focus-within {
      input {
        border: 1px solid #eb5757;
      }

      p {
        color: #eb5757;
      }
    }

    input {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      background: transparent;
      border: 1px solid #cdcdcd;
      outline: none;
      box-sizing: border-box;
    }

    p {
      position: absolute;
      top: -24px;
      left: 15px;
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      display: inline;
      background: #fff;
      padding: 5px;
      @media screen and (max-width: 360px) {
        font-size: 12px;
      }
    }
  }

  .forget-password {
    font-size: 16px;
    line-height: 140%;
    text-decoration-line: underline;
    color: #24334b;
    margin-bottom: 30px;
    display: block;
  }

  &__err {
    background: #ffffff;
    border: 1px solid #efefef;
    box-shadow: 0 10px 20px #e9e9e9;
    padding: 16px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #687c9b;
    }
  }

  &__info {
    max-width: 419px;
  }
}
</style>
