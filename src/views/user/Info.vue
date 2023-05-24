<template>
  <section class="info">
    <div class="info__top">
      <div class="info__title flex jcsb">
        <Title text="Оформление заявки" />
        <div
          class="info__cancel flex"
          @click="router.push('/order-list-user')"
        >
          <CancelIcon />
          Отменить
        </div>
      </div>
      <div class="info__progress flex">
        <div class="info__line" />
        <template
          v-for="(item, i) in progress"
          :key="i"
        >
          <div
            v-show="item === 'prev'"
            class="info__circle"
            @click="progressPrev(i, item)"
          >
            <PreviousIcon />
          </div>
          <div
            v-show="item === 'current'"
            class="info__circle"
            @click="progressPrev(i, item)"
          >
            <CurrentIcon />
          </div>
          <div
            v-show="item === 'next'"
            class="info__circle"
            @click="progressPrev(i, item)"
          >
            <NextIcon />
          </div>
        </template>
      </div>
    </div>

    <div class="info__content">
      <component
        v-for="(item, i) in slicedItems"
        :is="item"
        :key="i"
        @handleCustomEvent="handleCustomEvent"
        :progress-prev="progressPrev"
        :short="item?.__name !== slicedItems[0].__name ? 'short' : ''"
        :i="i"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Fifth from '@/components/Info/Steps/Fifth.vue'
import First from '@/components/Info/Steps/First.vue'
import Fourth from '@/components/Info/Steps/Fourth.vue'
import Second from '@/components/Info/Steps/Second.vue'
import Seventh from '@/components/Info/Steps/Seventh.vue'
import Sixth from '@/components/Info/Steps/Sixth.vue'
import Third from '@/components/Info/Steps/Third.vue'
import Title from '@/components/Info/Title.vue'
import CurrentIcon from '@/views/Icons/CurrentIcon.vue'
import NextIcon from '@/views/Icons/NextIcon.vue'
import PreviousIcon from '@/views/Icons/PreviousIcon.vue'
import CancelIcon from '@/views/Icons/CancelIcon.vue'

const progress = ref(['current', Array(6).fill('next')].flat())
const router = useRouter()

const items = [First, Second, Third, Fourth, Fifth, Seventh, Sixth]

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

      if (i !== progress.value.length) {
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

    &.active {
      padding: 12px 20px;
      color: #1baa75;
      background: #f6f6f6;

      span {
        display: none;
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

label {
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: #24334b;

  p {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    padding: 11px 10px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
