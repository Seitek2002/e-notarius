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
          <div class="send__adaptive">
            <div class="send__left">
              <label class="tooltip">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                    stroke="#1BAA75"
                    stroke-width="2"
                  />
                  <path
                    d="M10.9998 16.9996C11.6625 16.9996 12.1998 16.4624 12.1998 15.7996C12.1998 15.1369 11.6625 14.5996 10.9998 14.5996C10.3371 14.5996 9.7998 15.1369 9.7998 15.7996C9.7998 16.4624 10.3371 16.9996 10.9998 16.9996Z"
                    fill="#1BAA75"
                  />
                  <path
                    d="M8.75 7.2497C8.75005 6.85567 8.85358 6.46856 9.05023 6.1271C9.24688 5.78565 9.52975 5.50183 9.87054 5.30403C10.2113 5.10623 10.5981 5.0014 10.9921 5.00001C11.3861 4.99863 11.7736 5.10075 12.1158 5.29616C12.458 5.49156 12.7428 5.77339 12.9418 6.11346C13.1409 6.45353 13.2471 6.8399 13.2499 7.23392C13.2528 7.62794 13.152 8.0158 12.9579 8.35867C12.7637 8.70155 12.4829 8.98743 12.1436 9.1877C11.5736 9.5249 11 10.0373 11 10.6997V12.1997"
                    stroke="#1BAA75"
                    stroke-width="2"
                    stroke-linecap="round"
                  /></svg
                ><input type="checkbox" /><span
                  >Таблицу можно скролить по<br />
                  горизонтали либо Вы можете<br />
                  использовать кнопки для<br />
                  перемещения по таблице<svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.64645 6.35355L17.9602 17.6673"
                      stroke="#1BAA75"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.35355 17.3536L17.6673 6.03985"
                      stroke="#1BAA75"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    /></svg
                ></span>
              </label>
            </div>
            <div class="send__right">
              <svg
                @click="handleScrollLeft"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
                <g clip-path="url(#clip0_2412_22742)">
                  <path
                    d="M22 16L18 20L22 24"
                    stroke="#1BAA75"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
                <defs>
                  <clipPath id="clip0_2412_22742">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(28 12) rotate(90)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <svg
                @click="handleScrollRight"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
                <g clip-path="url(#clip0_2412_22746)">
                  <path
                    d="M18 24L22 20L18 16"
                    stroke="#1BAA75"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </g>
                <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
                <defs>
                  <clipPath id="clip0_2412_22746">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="matrix(0 -1 1 0 12 28)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div ref="container" class="send__table">
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
          </div>
          <div class="send__sample">
            <AddNewRequestIcon />
            <h2><a href="#">Добавить в мои шаблоны</a></h2>
          </div>
          <div class="send__question">
            <h2>Написать сообщение заявителю</h2>
            <label class="send__search">
              <div class="send__flex">
                <input
                  type="text"
                  placeholder="Здравствуйте. Ваша доверенность готова."
                />
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
import { ref } from "vue";

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

.send {
  flex: 1;
  padding: 40px;
  margin-top: 40px;
  box-sizing: border-box;
  background: #fff;
  @media screen and (max-width: 921px) {
    padding: 0;
  }
  &__table {
    min-width: 100%;
    overflow-x: auto;
    div {
      width: 960px;
    }
  }
  &__adaptive {
    display: none;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width: 1138px) {
      display: flex;
    }
  }
  &__left svg {
    cursor: pointer;
  }
  &__right svg {
    margin-left: 10px;
    cursor: pointer;
  }
  &__content {
    max-width: 1040px;
    margin: 0 auto;
  }

  &__box {
    // padding: 43px 40px 40px 46px;
    box-sizing: border-box;
    background: $bg-white;
    @media screen and (max-width: 768px) {
      padding: 20px;
    }
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
    margin-top: 20px;
    padding: 16px 0;
    border: 1px dashed #687c9b;
    width: 320px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
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
    @media screen and (max-width: 921px) {
      width: 100%;
    }
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
    @media screen and (max-width: 921px) {
      width: 100%;
    }
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
    @media screen and (max-width: 921px) {
      flex-wrap: wrap;
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
.tooltip input:checked + span {
  visibility: visible;
  opacity: 1;
}
</style>
