<template>
  <label
    :class="isActive ? ' active' : ''"
    @click="isActive = !isActive"
  >
    <div
      v-show="isActive"
      class="checkbox__pin"
    >
      <CheckboxTrueIcon/>
    </div>
    <div
      v-show="!isActive"
      class="checkbox__mark"
    />
    {{ title }}
  </label>
</template>

<script setup>
import { ref } from 'vue'

import CheckboxTrueIcon from '@/components/Form/Checkbox/Icons/CheckboxTrueIcon.vue'

const isActive = ref(false)
defineProps(['title'])
</script>

<style lang="scss">
label {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  gap: 16px;
  color: #24334b;

  &.active {
    color: #1baa75;
  }
}

.checkbox {
  &__mark {
    width: 16px;
    height: 16px;
    padding: 2px;
    box-sizing: border-box;

    border: 1px solid #cdcdcd;
    box-shadow: 0 5px 12px -5px rgba(174, 174, 174, 0.06), 0 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #ffffff;
    border-radius: 2px;
  }

  &__pin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    box-shadow: 0 5px 12px -5px rgba(174, 174, 174, 0.06), 0 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #1baa75;
    border-radius: 2px;
    text-align: center;
  }
}
</style>
