<template>
  <div class="question-item">
    <div
      class="question-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <h3>{{ title }}</h3>
      <PlusIcon
        v-show="!isActive"
      />
      <MinusIcon
        v-show="isActive"
      />
    </div>
    <div
      v-if="isActive"
      class="question-item__login"
    >
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'

const isActive = ref(false)

defineProps(['title', 'description'])
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.question-item {
  background: $bg-white;
  @media screen and (min-width: 992px) {
    margin-bottom: 28px;
  }

  &__top.active {
    background: $bg-dark-blue;
    box-shadow: 0 5px 20px $shadow-gray;
    color: $bg-white;

    svg {
      path {
        stroke: $bg-white;
      }
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: $text-dark-blue;

    h3 {
      max-width: 615px;
      font-weight: 600;
      font-size: 16px;
    }

    @media screen and (max-width: 991px) {
      padding: 15px;
      gap: 10px;

      h3 {
        font-size: 16px;
        line-height: 140%;
        margin: 0;
      }

      svg {
        max-height: 20px;
        max-width: 20px;
        width: 100%;
        height: 100%;
      }
    }

    div {
      display: flex;
      gap: 19px;
    }
  }

  &__login {
    padding: 30px 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      color: $text-dark-blue;
    }

    @media screen and (max-width: 991px) {
      padding: 20px 15px;
     p {
       margin: 0;
     }
    }
  }
}
</style>
