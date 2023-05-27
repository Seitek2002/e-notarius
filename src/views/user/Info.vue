<template>
  <section class="info">
    <div class="info__top">
      <div class="info__title flex jcsb">
        <Title text="Оформление заявки" />
        <div class="info__cancel flex" @click="cancelOrder">
          <CancelIcon />
          Отменить
        </div>
      </div>
      <div class="info__progress flex">
        <div class="info__line" />
        <template v-for="(step, index) in steps" :key="index">
          <div
            :class="[
              'info__circle',
              {
                'info__circle--prev': index < currentStep,
                'info__circle--current': index === currentStep,
                'info__circle--next': index > currentStep,
              },
            ]"
            @click="changeStep(index)"
          >
            <template v-if="index < currentStep">
              <PreviousIcon />
            </template>
            <template v-else-if="index === currentStep">
              <CurrentIcon />
            </template>
            <template v-else>
              <NextIcon />
            </template>
          </div>
        </template>
      </div>
    </div>

    <div class="info__content">
      <component :is="currentStepComponent" @handleCustomEvent="changeStep" />
    </div>
  </section>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { useRouter } from "vue-router";

import Fifth from "@/components/user/steps/Fifth.vue";
import First from "@/components/user/steps/First.vue";
import Fourth from "@/components/user/steps/Fourth.vue";
import Second from "@/components/user/steps/Second.vue";
import Seventh from "@/components/user/steps/Seventh.vue";
import Sixth from "@/components/user/steps/Sixth.vue";
import Third from "@/components/user/steps/Third.vue";
import Title from "@/components/global/UI/Info/Title.vue";
import CurrentIcon from "@/views/Icons/CurrentIcon.vue";
import NextIcon from "@/views/Icons/NextIcon.vue";
import PreviousIcon from "@/views/Icons/PreviousIcon.vue";
import CancelIcon from "@/views/Icons/CancelIcon.vue";

const steps = [
  { component: First },
  { component: Second },
  { component: Third },
  { component: Fourth },
  { component: Fifth },
  { component: Seventh },
  { component: Sixth },
];
const currentStep = ref(0);
const router = useRouter();

const cancelOrder = () => {
  router.push("/order-list-user");
};

const changeStep = (stepIndex) => {
  console.log(stepIndex);
  if (stepIndex >= 0 && stepIndex < steps.length) {
    currentStep.value = stepIndex;
  }
};

const currentStepComponent = computed(() => steps[currentStep.value].component);
</script>


<style lang="scss">
@import "@/assets/scss/variables.scss";

.flex {
  display: flex;
  gap: 20px;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0;
  }
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
    font-family: "Montserrat", sans-serif;
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
  // width: 50%;
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
    @media screen and (max-width: 768px) {
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 0;
    }
  }

  &__cancel {
    font-family: "Montserrat", sans-serif;
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
    @media screen and (max-width: 768px) {
      border-left: none;
      padding-left: 0;
      .approved {
        display: none;
      }
    }
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
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        line-height: 130%;
        color: #24334b;
        margin: 0;
      }

      input {
        padding: 11px 10px;
        font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
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
@media screen and (max-width: 768px) {
  .next-btn {
    width: 50%;
    justify-content: center;
  }
  .info__form {
    gap: 0;
  }
  .info__form--wrapper {
    flex-direction: column;
    align-items: start;
    gap: 0;
    .w-55,
    .w-33,
    .w-50 {
      width: 100%;
    }
    .dropdown {
      width: 100%;
    }
    .chek {
      width: 50%;
    }
  }
  .info__form--details {
    width: 100%;
  }
  .info__member {
    // flex-direction: column;
    gap: 10px;
  }
  .info__subject {
    h3 {
      margin: 0;
    }
  }
  .info__form--wrapper {.dropdown.city {
    width: 100%;
  }
  }
  .info__radio {
    margin-bottom: 15px;

    margin-right: 30px;
    &--button {
      .radio {
        margin-right: 8px;
      }
      div {
        border-radius: 100%;
      }
    }
  }
  .jcsb {
    gap: 10px;
  }
}
@media screen and (max-width: 600px) {
  .info__progress {
    width: 100%;
  }
}
@media screen and (max-width: 530px) {
  .info__top {
    margin-top: 0;
  }

}
@media screen and (max-width: 500px) {
  .next-btn {
    width: 100%;
  }
     .info__form--wrapper  {
  .chek {
    width: 100%;
  }
  }
  .file__input .text, .file__input {
    width: 100%;
  }
}
</style>
