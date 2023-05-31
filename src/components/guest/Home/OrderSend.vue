<template>
  <section class="send">
    <div class="container">
      <div class="send__content">
        <div class="send__box">
          <div class="send__row">
            <SuccessIcon/>
            <h2>
              {{ title }}
            </h2>
          </div>
          <div class="send__info">
            <h2 class="send__info__name">
              Паспорт
            </h2>
            <h2 class="send__info__status">
              Статус
            </h2>
            <h2 class="send__info__date">
              Дата
            </h2>
            <h2 class="send__info__notarius">
              Нотариус
            </h2>
          </div>
          <div class="send__alimony">
            <h2 class="send__alimony__confidence">
              Доверенность на управление и распоряжение автотранспортным средством
            </h2>
            <h2 class="send__alimony__v">
              В обработке
            </h2>
            <h2 class="send__alimony__year">
              01.01.2022
            </h2>
            <h2 class="send__alimony__person">
              <a href="#">ЧН Баланчаев Б.Б.</a>
            </h2>
          </div>
          <div class="send__sample">
            <AddNewIcon/>
            <h2><a href="#">Добавить документ в “Мои шаблоны”</a></h2>
          </div>
          <div class="send__question">
            <h2>Написать сообщение нотариусу</h2>
            <label class="send__search">
              <div class="send__flex">
                <input
                  type="text"
                  placeholder="Доверенность когда будет готова? Когда к вам можно  подойти?"
                >
                <button>
                  <ArrowRightIcon/>
                </button>
              </div>
            </label>
          </div>
          <div class="send__message">
            <SuccessSendIcon/>
            <h2>
              Сообщение успешно отправлено. Перейдите в
              <span> переписки</span> для дальнейшего общения
            </h2>
          </div>
          <div class="send__btns">
            <button
              class="send__btn"
              @click="handleClick"
            >
              <AddNewSmallIcon/>
              Оформить новую заявку
            </button>
            <button
              class="send__go"
              @click="router.push('/applications-notarius')"
            >
              <PencilIcon/>
              Перейти в заявки
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import AddNewIcon from '@/components/guest/Home/Icons/AddNewIcon.vue'
import AddNewSmallIcon from '@/components/guest/Home/Icons/AddNewSmallIcon.vue'
import ArrowRightIcon from '@/components/guest/Home/Icons/ArrowRightIcon.vue'
import PencilIcon from '@/components/guest/Home/Icons/PencilIcon.vue'
import SuccessIcon from '@/components/guest/Home/Icons/SuccessIcon.vue'
import SuccessSendIcon from '@/components/guest/Home/Icons/SuccessSendIcon.vue'

const router = useRouter()
const store = useStore()

defineProps(['title'])

const handleClick = () => {
  router.push('/info-notarius')
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.send {
  flex: 1;
  padding: 60px;
  margin-top: 40px;
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
    gap: 16px;
    margin-bottom: 50px;

    h2 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: $text-dark-blue;
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
    gap: 5px;
    margin-bottom: 51px;

    h2 {
      font-weight: 600;
      font-size: 16px;
      color: $text-dark-blue;

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
    padding: 14px 0;
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
