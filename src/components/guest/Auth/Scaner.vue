<template>
  <div class="auth-item">
    <div
      class="auth-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <div>
        <FingerprintIcon/>
        <h3>Вход по отпечаткам пальцев</h3>
      </div>
      <PlusIcon
        v-show="!isActive"
      />
      <MinusIcon
        v-show="isActive"
      />
    </div>
    <div
      v-if="isActive"
      class="auth-item__login"
    >
      <div class="auth-item__alert">
        <p>Для входа вам необходимо подвердить отпечаток пальца</p>
        <QuestionIcon/>
      </div>
      <div
        class="scaner-svg"
        :class="scanerAnalys ? ' active' : ''"
      >
        <FingerprintCircleIcon
          v-show="!end"
          @click="handleClick"
        />
        <FingerprintSuccessIcon
          v-show="end"
        />
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
        <AnimationCircleIcon
          class="loading-svg"
        />
        Проверка отпечатка пальцев
      </div>
      <div
        v-show="end"
        class="auth-item__success auth-item__process"
      >
        Проверка отпечатка пальцев прошла успешно
      </div>
      <Btn
        title="Войти"
        bg="#1BAA75"
        :disabled="!end"
        @click="handleClick, router.push('/order-list-notarius')"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Btn from '@/components/global/Buttons/Btn.vue'
import AnimationCircleIcon from '@/components/guest/Auth/Icons/AnimationCircleIcon.vue'
import FingerprintCircleIcon from '@/components/guest/Auth/Icons/FingerprintCircleIcon.vue'
import FingerprintIcon from '@/components/guest/Auth/Icons/FingerprintIcon.vue'
import FingerprintSuccessIcon from '@/components/guest/Auth/Icons/FingerprintSuccessIcon.vue'
import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'
import QuestionIcon from '@/components/guest/Auth/Icons/QuestionIcon.vue'

const isActive = ref(true)
const scanerAnalys = ref(false)
const router = useRouter()
const start = ref(true)
const center = ref(false)
const end = ref(false)

const handleClick = () => {
  start.value = false
  center.value = true
  end.value = false
  scanerAnalys.value = true

  setTimeout(() => {
    center.value = false
    scanerAnalys.value = false
    end.value = true
  }, 1500)
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.auth-item {
  &__alert {
    background: $bg-white;
    border: 1px solid $border-white;
    box-shadow: 0 10px 20px $shadow-gray;
    padding: 16px;
    display: flex;
    gap: 6px;

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
</style>
