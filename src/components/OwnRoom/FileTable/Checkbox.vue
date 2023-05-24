<template>
  <div
    class="checkbox"
    @click="isActive = !isActive"
  >
    <div class="checkbox-input">
      <CheckboxSuccessBlackIcon/>
    </div>
    {{ title }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

import CheckboxSuccessBlackIcon from '@/components/OwnRoom/Icons/CheckboxSuccessBlackIcon.vue'

const isActive = ref(false)
defineProps(['title'])
</script>

<style>
.checkbox {
  display: flex;
  align-items: center;
  gap: 13px;
}
</style>
