<template>
  <div
    v-show="isShow"
    class="_"
  >
    <div
      class="model-fon"
      @click="isShow = !isShow"
    />
    <div class="model-wrapper">
      <div class="auth-item">
        <div class="auth-item__top">
          <div class="auth-head-wrapper">
            <h3>Внесение в реестр</h3>
            <div
              class="auth-close"
              @click="isShow = !isShow"
            >
              <CancelIcon/>
              Отменить
            </div>
          </div>
        </div>
        <div class="auth-item__login">
          <div class="auth-item__alert">
            <p>Для входа посредством ЭЦП вам необходимо подтвердить отпечаток своего пальца</p>
            <QuestionIcon/>
          </div>
          <div
            class="scaner-svg"
            :class="scanerAnalys ? ' active' : ''"
          >
            <FingerPrintIcon v-show="!end"/>
            <FingerPrintSuccessIcon v-show="end"/>
          </div>
          <div
            v-show="start"
            class="auth-item__start auth-item__process"
          >
            Подтверждение отпечатка пальцев
          </div>
          <div
            v-show="center"
            class="auth-item__loading auth-item__process"
          >
            <AnimationBubblesIcon/>
            Проверка отпечатка пальцев
          </div>
          <div
            v-show="end"
            class="auth-item__success auth-item__process"
          >
            Проверка отпечатка пальцев прошла
            успешно
          </div>
          <div class="auth-btn-wrapper">
            <Btn
              title="Подписать"
              bg="#1BAA75"
              :disabled="!end"
              @click="handleClick, router.push('/order-list-notarius')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Btn from '@/components/global/Buttons/Btn.vue'
import QuestionIcon from '@/components/guest/Auth/Icons/QuestionIcon.vue'
import AnimationBubblesIcon from '@/components/global/Info/Icons/AnimationBubblesIcon.vue'
import CancelIcon from '@/components/modalWindows/Icons/CancelIcon.vue'
import FingerPrintIcon from '@/components/modalWindows/Icons/FingerPrintIcon.vue'
import FingerPrintSuccessIcon from '@/components/modalWindows/Icons/FingerPrintSuccessIcon.vue'

const isActive = ref(true)
const scanerAnalys = ref(false)
const router = useRouter()
const start = ref(true)
const center = ref(false)
const end = ref(false)
// defineEmits(['isShow'])

const handleClick = () => {
  start.value = false
  center.value = true
  end.value = false
  scanerAnalys.value = true

  setTimeout(() => {
    center.value = false
    scanerAnalys.value = false
    end.value = true
  }, 5000)
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.auth-item {
  &__alert {
    background: $bg-white;
    border: 1px solid $border-white;
    box-shadow: 0 10px 20px $shadow-gray;
    padding: 16px;
    display: flex;
    gap: 6px;
    margin-top: 40px;

    p {
      font-size: 14px;
      line-height: 140%;
      color: $text-gray-blue;
      max-width: 419px;
    }
  }

  .scaner-svg {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-top: 30px;
  }

  .scaner-svg.active {
    .pulse {

      &-first,
      &-second,
      &-third {
        opacity: 1;
        animation-name: pulse;
      }
    }
  }

  .pulse {

    &-first,
    &-second,
    &-third {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform-origin: 50% 50%;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      opacity: 0;
    }

    &-first {
      animation-delay: 0s;
    }

    &-second {
      animation-delay: 0.5s;
    }

    &-third {
      animation-delay: 1s;
    }
  }

  &__process {
    font-size: 16px;
    line-height: 130%;
    text-align: center;
    color: $text-gray-blue;
    margin: 30px 0;
  }

  &__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
      transform-origin: center;
      animation-duration: 1s;
      animation-name: round;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }

  .auth-btn-wrapper {
    justify-content: center;
    display: flex;
  }

  .auth-head-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px 0;
  }

  .auth-close {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    color: #1BAA75;

  }
}

@keyframes round {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    stroke-width: 3px;
    transform: scale(0.85);
  }

  to {
    stroke-width: 0;
    transform: scale(1.2);
  }
}

.model-fon {
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(15px);
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.model-wrapper {
  width: 520px;
  height: 590px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  background: #FFFFFF;
  box-shadow: 0 10px 40px #DCDCDC;
  z-index: 3;
}</style>
