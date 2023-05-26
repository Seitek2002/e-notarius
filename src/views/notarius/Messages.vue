<template>
  <section class="messages">
    <div class="container">
      <div class="messages__content">
        <div class="messages__nuvbar">
          <p class="messages__nuvbar__title">
            Ваши сообщения
          </p>
          <div class="messages__block__online">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p><span>онлайн</span></p>
            </div>
          </div>
          <div class="messages__block">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Алапаев Н.К.</h4>
              <p>оффлайн</p>
            </div>
            <OnlineStatusIcon/>
          </div>
          <div class="messages__block">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img
              src="@/assets/images/Messages/Ellipse.png"
              alt="#"
            >
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
        </div>
        <div class="messages__chat">
          <div class="messages__box__my">
            <p>Здравствуйте! Я оставил вам заявку на доверенность</p>
            <div class="messages__time__my">
              <p>16:29</p>
              <MessagesReadIcon/>
            </div>
          </div>
          <div class="messages__box__companion">
            <p>
              Здравствуйте! Ваши документы готовы. Вам необходимо подойти в наш
              офис на Московская 25, подписать и забрать Доверенность.
            </p>
            <div class="messages__time__companinon">
              <p>16:40</p>
            </div>
          </div>
          <div class="messages__box__my">
            <p>Хорошо, спасибо, я подойду завтра утром.</p>
            <div class="messages__time__my">
              <p class="messages__time__num">
                16:42
              </p>
              <SuccessSendIcon/>
            </div>
          </div>
          <div class="messages__box__input">
            <textarea name=""/>
            <div class="messages__send">
              <ArrowRightIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

import SuccessSendIcon from '@/components/guest/Home/Icons/SuccessSendIcon.vue'
import ArrowRightIcon from '@/components/global/UI/Info/Icons/ArrowRightIcon.vue'
import MessagesReadIcon from '@/views/Icons/MessagesReadIcon.vue'
import OnlineStatusIcon from '@/views/Icons/OnlineStatusIcon.vue'

const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Переписки'))()
})
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.messages {
  font-family: "Montserrat", sans-serif;
  margin: 60px 0 92px 0;
  flex: 1;
  &__chat {
    @media screen and (max-width: 991px) {
      display: none;
    }
  }
  &__content {
    display: flex;
  }

  &__nuvbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 320px;
  }

  &__nuvbar__title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    width: 320px;
    height: 64px;
    color: $text-dark-blue;
  }

  &__block__online {
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 16px;
    background: $text-dark-blue;
    box-shadow: 0 10px 20px #acbbd2, 0 5px 20px #dfdfdf;
    gap: 16px;


    h4 {
      color: $bg-light-gray;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
    }

    p {
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;

      span {
        color: $text-light-green;
      }
    }
  }

  &__block {
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 16px;
    gap: 16px;
    @media screen and (max-width: 991px) {
      width: 100%;
    }
    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      color: $text-dark-blue;
      margin-right: 90px;
    }

    p {
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      color: #bdbdbd;
    }
  }

  &__box__my {
    background: $text-light-green;
    width: 320px;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 45px 0 11px 390px;
    @media screen and (max-width: 1241px) {
      margin-left: 195px;
    }
        @media screen and (max-width: 1100px) {
      margin-left: 40px;
    }
    p {
      font-weight: 400;
      line-height: 140%;
      color: $bg-light-gray;
    }
  }

  &__time__my {
    display: flex;
    align-items: center;
    gap: 10px;

    &__time__num {
      font-weight: 400;
      font-size: 14px;
      color: $bg-light-gray;
    }
  }

  &__box__companion {
    background: $border-white;
    width: 320px;
    padding: 15px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 30px;
    @media screen and (max-width: 1250px) {
      margin-right: 0;
    }
    
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: $text-dark-blue;
    }
  }

  &__time__companion {
    display: flex;
    align-items: center;

    &__time__num {
      font-weight: 400;
      font-size: 14px;
      color: $bg-light-gray;
    }
  }

  &__box__input {
    display: flex;
    width: 100%;
    margin: 59px 0 0 30px;

    textarea {
      resize: none;
      padding: 22px 0 1px 15px;
      width: 100%;
      border-width: 1px 0 1px 1px;
      border-style: solid;
      border-color: $border-gray;
      font-family: "Montserrat", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #9a9a9a;
      outline: none;
      margin-left: 30px;
    }
  }

  &__send {
    width: 80px;
    height: 64px;
    background: $text-light-green;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
