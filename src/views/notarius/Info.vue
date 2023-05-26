<template>
  <section class="info">
    <div class="info__top">
      <div class="info__title flex jcsb">
        <Title text="Оформление заявки" />
        <div class="info__cancel flex" @click="router.push('/order-list-user')">
          <CancelIcon />
          Отменить
        </div>
      </div>

      <div class="info__progress flex">
        <div class="info__line" />
        <template v-for="(item, i) in progress" :key="i">
          <div v-show="item === 'prev'" class="info__circle" @click="progressPrev(i, item)">
            <PreviousIcon />
          </div>
          <div v-show="item === 'current'" class="info__circle" @click="progressPrev(i, item)">
            <CurrentIcon />
          </div>
          <div v-show="item === 'next'" class="info__circle" @click="progressPrev(i, item)">
            <NextIcon />
          </div>
        </template>
      </div>
    </div>

    <div v-if="store.state.isSubmit" class="info__submit">
      <div class="auth__item">
        <div class="auth-item__login">
          <div class="auth-item__login-top">
            <h2>Внесение в реестр</h2>
            <a href="#" @click="store.commit('setIsSubmit', false)">
              <XIcon />
              Отменить
            </a>
          </div>
          <div class="auth-item__alert">
            <p>
              Для внесения документа в реестр и присвоения уникального номера документу, нужно подтверждение отпечатка
              ваших пальцев и ваша ЭЦП
            </p>
            <QuestionIcon />
          </div>
          <div class="scaner-svg" :class="scanerAnalys ? ' active' : ''">
            <FingerprintCircleIcon v-show="!end" @click="handleClick" />
            <FingerprintSuccessIcon v-show="end" />
          </div>
          <div v-show="start" class="auth-item__start auth-item__process">
            Подтверждение отпечатка пальцев
          </div>
          <div v-show="center" class="auth-item__loading auth-item__process">
            <AnimationBubblesIcon />
            Проверка отпечатка пальцев
          </div>
          <div v-show="end" class="auth-item__success auth-item__process">
            Проверка отпечатка пальцев прошла успешно
          </div>
          <Btn title="Подписать" bg="#1BAA75" :disabled="!end"
            @click="handleCustomEvent([7, 'next']), store.commit('setIsSubmit', false), store.commit('pushNewItem')" />
        </div>
      </div>
    </div>

    <div class="info__content">
      <component v-for="(item, i) in slicedItems" :is="item" :key="i" :on-custom-event="handleCustomEvent"
        :progress-prev="progressPrev" :short="item?.__name !== slicedItems[0].__name ? 'short' : ''" :i="i" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Btn from '@/components/global/UI/Buttons/Btn.vue'
import Eighth from '@/components/notarius/steps/Steps/Eighth.vue'
import Fifth from '@/components/notarius/steps/Steps/Fifth.vue'
import First from '@/components/notarius/steps/Steps/First.vue'
import Fourth from '@/components/notarius/steps/Steps/Fourth.vue'
import Second from '@/components/notarius/steps/Steps/Second.vue'
import Seventh from '@/components/notarius/steps/Steps/Seventh.vue'
import Sixth from '@/components/notarius/steps/Steps/Sixth.vue'
import Third from '@/components/notarius/steps/Steps/Third.vue'
import Title from '@/components/globalUI/Info/Title.vue'
import CurrentIcon from '@/views/Icons/CurrentIcon.vue'
import NextIcon from '@/views/Icons/NextIcon.vue'
import PreviousIcon from '@/views/Icons/PreviousIcon.vue'
import CancelIcon from '@/views/Icons/CancelIcon.vue'
import FingerprintCircleIcon from '@/components/guest/Auth/Icons/FingerprintCircleIcon.vue'
import FingerprintSuccessIcon from '@/components/guest/Auth/Icons/FingerprintSuccessIcon.vue'
import QuestionIcon from '@/components/guest/Auth/Icons/QuestionIcon.vue'
import AnimationBubblesIcon from '@/components/global/UI/Info/Icons/AnimationBubblesIcon.vue'
import XIcon from '@/views/Icons/XIcon.vue'

const store = useStore()
const scanerAnalys = ref(false)
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
  }, 5000)
}

const progress = ref(['current', Array(7).fill('next')].flat())
const router = useRouter()
const emits = defineEmits(['islam'])
onMounted(() => {
  emits('islam', 'Нотариальное действие')
})

const items = [First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eighth]

const slicedItems = ref([First, Second])

const nextStep = () => {
  slicedItems.value.shift()

  const item = items.findIndex(item => item.__name === slicedItems.value[0].__name)

  if (items[item + 1]) {
    slicedItems.value.push(items[item + 1])
    progressPrev(item, 'next')
  }
}

const prevStep = () => {
  slicedItems.value.pop()

  const index = items.findIndex(item => item.__name === slicedItems.value[0].__name)
  slicedItems.value.unshift(items[index - 1])
}

const handleCustomEvent = data => {
  const [id, move] = data

  if (move === 'prev') {
    progress.value = progress.value.map((item, i) => {
      if (id === i) return 'current'
      if (id > i) return 'prev'
      if (id < i) return 'next'
    })

    prevStep()
  } else {
    for (let i = 0; i < id; i++) {
      progress.value[i] = 'prev'

      if (i !== progress.value.length) {
        progress.value[i + 1] = 'current'
      }
    }

    nextStep()
  }
}

const progressPrev = (id, move) => {
  slicedItems.value = []
  slicedItems.value.push(items[id])
  slicedItems.value.push(items[id + 1])

  if (move === 'prev') {
    progress.value = progress.value.map((item, i) => {
      if (id === i) return 'current'
      if (id > i) return 'prev'
      if (id < i) return 'next'
    })
  } else {
    for (let i = 0; i < id; i++) {
      progress.value[i] = 'prev'

      if (i + 1 !== progress.value.length) {
        progress.value[i + 1] = 'current'
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.flex {
  display: flex;
  gap: 20px;
}

.circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #cdcdcd;
}

.aic {
  align-items: center;
}

.jcsb {
  justify-content: space-between;
}

.w-55 {
  width: 55%;
}

.member {
  display: flex;
  align-items: center;

  &__qnty {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    span {
      display: none;
    }

    &.active {
      padding: 12px 20px;
      color: #1baa75;
      background: #f6f6f6;

      span {
        display: inline;
      }
    }
  }
}

.dropdown-search {
  width: 50%;
  position: relative;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__select {
    position: absolute;
    top: 80px;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 10;
  }

  p {
    margin-bottom: 5px;
  }

  &__option {
    color: #24334b;
    margin: 15px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 9px 10px;
    box-sizing: border-box;
  }
}

.info {
  &__top {
    margin-top: 50px;
  }

  &__submit {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 99vw;
    z-index: 9;

    .auth-item {
      &__login {
        background: #fff;
        padding: 40px 20px;
        box-sizing: border-box;

        .scaner-svg {
          text-align: center;
        }

        .scaner-svg {
          position: relative;
          z-index: 11;
          text-align: center;
          margin-top: 30px;

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
              opacity: 1;
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

        .btn {
          width: 100%;
        }
      }

      &__login-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;

        h2 {
          font-weight: 600;
          font-size: 18px;
          color: #24334b;
        }

        a {
          font-weight: 600;
          font-size: 16px;
          color: #1baa75;
          display: flex;
          align-items: center;
          gap: 10px;
        }
      }

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

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(205, 205, 205, 0.1);
      backdrop-filter: blur(15px);
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }

  &__circle {
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 100%;
  }

  &__line {
    height: 2px;
    background: #cdcdcd;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    z-index: -1;
  }

  &__progress {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 480px;
    margin: 40px auto;
  }

  &__content {
    padding: 40px 40px 40px 72px;
    flex: 1;
    background: #ffffff;
    box-shadow: 0 10px 40px #e9e9e9;
  }

  &__cancel {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #1baa75;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  &__subject {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__radio {
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: fit-content;

    &--button {
      display: flex;
      justify-content: center;
      align-items: center;

      .radio {
        display: flex;
        align-items: center;
        height: 16px;
        width: 16px;

        &.active {
          background: #1baa75;
        }

        &-check {
          border: 1px solid #cdcdcd;
          height: 16px;
          width: 16px;
        }
      }
    }
  }

  &__step {
    border-left: 2px solid #cdcdcd;
    padding-top: 20px;
    padding-left: 52px;
    padding-bottom: 30px;
    position: relative;

    &.active {
      border-color: #1baa75;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .address-propiski {
      .dropdown {
        width: 284px;
        font-size: 14px;
        font-weight: 500;
        color: #24334b;
      }

      p {
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        line-height: 130%;
        color: #24334b;
        margin: 0;
      }

      input {
        padding: 11px 10px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        line-height: 140%;
        color: #24334b;
      }

      .street {
        input {
          width: 284px;
        }
      }
    }

    &--details {
      width: 50%;

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        color: #24334b;
        margin-bottom: 5px;
      }

      .flex {
        gap: 10px;
        align-items: center;
      }

      .dropdown {
        width: 80px;
      }

      input {
        width: 100%;
        flex: 1;
        display: block;
        padding: 12px 10px;
        font-size: 16px;
        line-height: 140%;
        background: #ffffff;
        border: 1px solid #1baa75;
      }
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
