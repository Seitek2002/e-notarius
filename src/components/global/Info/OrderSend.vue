<template>
  <section class="send">
    <div class="container">
      <div class="send__content">
        <div class="send__box">
          <div class="send__row">
            <h2>
              {{ title }}
            </h2>
            <SuccessSmallIcon />
          </div>
          <div class="send__info">
            <h2 class="send__info__qr">QR</h2>
            <h2 class="send__info__name">Наименование</h2>
            <h2 class="send__info__status">Статус</h2>
            <h2 class="send__info__date">Дата</h2>
            <h2 class="send__info__notarius">ФИО заявителя</h2>
          </div>
          <div class="send__alimony">
            <h2 class="send__alimony__v">
              <QrCodeIcon />
            </h2>
            <h2 class="send__alimony__confidence">
              {{ store.state.bonusInputs }}
            </h2>
            <h2 class="send__alimony__v">Подписан с ЭЦП</h2>
            <h2 class="send__alimony__year">01.01.2022</h2>
            <h2 class="send__alimony__person">
              <a href="#">ЧН Баланчаев Б.Б.</a>
            </h2>
          </div>
          <div class="send__sample">
            <AddNewRequestIcon />
            <h2><a href="#">Добавить в мои шаблоны</a></h2>
          </div>
          <div class="send__question">
            <h2>Написать сообщение заявителю</h2>
            <label class="send__search">
              <div class="send__flex">
                <input type="text" placeholder="Здравствуйте. Ваша доверенность готова." />
                <button>
                  <ArrowRightIcon />
                </button>
              </div>
            </label>
          </div>
          <div class="send__message">
            <SuccessMarkSmallIcon />
            <h2>
              Сообщение успешно отправлено. Перейдите в
              <span>переписки</span>
              для дальнейшего общения
            </h2>
          </div>
          <div class="send__btns">
            <button class="send__btn" @click="handleClick">
              <AddNewRequestWhiteIcon />
              Оформить новое действие
            </button>
            <button
              class="send__go"
              @click="router.push('/applications-notarius')"
            >
              <PencilIcon />
              Перейти в нотариальные действия
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import AddNewRequestIcon from "@/components/global/UI/Info/Icons/AddNewRequestIcon.vue";
import AddNewRequestWhiteIcon from "@/components/global/UI/Info/Icons/AddNewRequestWhiteIcon.vue";
import ArrowRightIcon from "@/components/global/UI/Info/Icons/ArrowRightIcon.vue";
import PencilIcon from "@/components/global/UI/Info/Icons/PencilIcon.vue";
import QrCodeIcon from "@/components/global/UI/Info/Icons/QrCodeIcon.vue";
import SuccessMarkSmallIcon from "@/components/global/UI/Info/Icons/SuccessMarkSmallIcon.vue";
import SuccessSmallIcon from "@/components/global/UI/Info/Icons/SuccessSmallIcon.vue";

const router = useRouter();
const store = useStore();

defineProps(["title"]);

const handleClick = () => {
  router.push("/info-notarius");
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.send {
  flex: 1;
  padding: 40px;
  background: #fff;

  &__content {
    max-width: 1040px;
    margin: 0 auto;
  }

  &__box {
    // padding: 43px 40px 40px 46px;
    box-sizing: border-box;
    background: $bg-white;
  }

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    padding: 16px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-shadow: 0 10px 20px #e9e9e9;

    h2 {
      color: #3f5984;
      font-weight: 600;
      font-size: 16px;
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    padding: 24px 16px 24px 16px;
    background: $shadow-gray;

    h2 {
      font-weight: 600;
      font-size: 16px;
      color: $text-dark-blue;
    }

    &__qr {
      width: 9%;
    }

    &__name {
      width: 43%;
    }

    &__date {
      width: 18%;
    }

    &__status {
      width: 18%;
    }

    &__notarius {
      width: 18%;
    }
  }

  &__alimony {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px 24px 16px;
    margin-bottom: 21px;

    h2 {
      font-weight: 500;
      font-size: 14px;
      color: $text-dark-blue;
    }

    &__confidence {
      width: 36%;
    }

    &__treatment {
      width: 11%;
    }

    &__year {
      width: 11%;
    }

    &__person {
      width: 18%;

      a {
        color: $text-dark-blue;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 14px;
        text-decoration-line: underline;
        color: #1baa75;

        &:focus-within {
          text-decoration: underline;
          color: $text-light-green;
        }
      }
    }
  }

  &__sample {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 51px;
    padding: 16px 0;
    border: 1px dashed #687c9b;
    width: 320px;

    h2 {
      font-weight: 600;
      font-size: 14px;
      color: $text-dark-blue;
      margin: 0;

      a {
        color: $text-dark-blue;

        &:active {
          color: $text-light-green;
        }
      }
    }
  }

  &__flex {
    display: flex;
  }

  &__question {
    margin-bottom: 10px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      color: $text-gray-blue;
      margin-bottom: 15px;
    }

    button {
      width: 80px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $text-light-green;
      border: none;
    }

    label {
      position: relative;
      gap: 16px;
      align-items: center;

      &:focus-within {
        input {
          border: 1px solid $text-light-green;
        }

        p {
          color: $text-light-green;
        }
      }

      input {
        font-family: "Montserrat", sans-serif;
        width: 90%;
        font-weight: 400;
        font-size: 16px;
        color: $text-dark-blue;
        padding: 22px;
        height: 50px;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid $border-gray;
        outline: none;
      }
    }
  }

  &__message {
    display: flex;
    align-items: center;
    gap: 9px;
    margin-bottom: 30px;

    h2 {
      font-weight: 400;
      font-size: 14px;
      color: $text-dark-blue;
    }

    span {
      color: $text-light-green;
    }
  }

  &__btn {
    font-family: "Montserrat", sans-serif;
    width: 320px;
    padding: 14px 0;
    border: none;
    color: $bg-white;
    background: $text-light-green;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: 0.3s;

    &:not(:disabled):hover {
      opacity: 0.96;
      box-shadow: 0 10px 20px $shadow-green;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__go {
    font-family: "Montserrat", sans-serif;
    width: 320px;
    padding: 14px 15px;
    border: none;
    background: $bg-dark-blue;
    color: $bg-white;
    font-weight: 600;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: 0.3s;

    &:not(:disabled):hover {
      opacity: 0.96;
      box-shadow: 0 10px 20px $shadow-green;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__btns {
    display: flex;
    gap: 30px;
  }
}
</style>
