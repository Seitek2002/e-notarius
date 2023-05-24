<template>
  <div class="dropdown">
    <div
      class="dropdown__wrapper"
      @click="isShow = !isShow"
    >
      {{ title }}
      <FilterIcon :class="isShow ? 'active' : ''"/>
    </div>
    <div
      v-show="isShow"
      class="dropdown__content"
    >
      <Checkbox
        v-for="option in options"
        :key="option"
        :title="option"
      />
      <div class="dropdown__bottom">
        <button @click="isShow = !isShow">
          Готово
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Checkbox from './Checkbox/Checkbox.vue'
import FilterIcon from '@/components/icons/Table/FilterIcon.vue'

defineProps(['title', 'options'])

const isShow = ref(false)
</script>

<style lang="scss">
.dropdown {
  position: relative;

  &__wrapper {
    display: flex;
    gap: 60px;
    align-items: center;
    cursor: pointer;
    text-align: left;

    svg.active {
      path {
        fill: #1baa75;
      }
    }
  }

  &__content {
    width: 90%;
    position: absolute;
    background: #fff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #efefef;
    box-shadow: 0 10px 20px #e9e9e9;
    top: 50px;
  }

  &__bottom {
    button {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
      border: none;
      background: transparent;
      display: block;
      width: 100%;
    }
  }
}
</style>
