<template>
  <button class="back-btn">
    <BackArrowIcon/>
    Назад
  </button>
</template>

<script setup>
import BackArrowIcon from './Icons/BackArrowIcon.vue'
</script>

<style lang="scss">
.back-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  background: #fff;

  font-weight: 600;
  font-size: 16px;
  color: #1baa75;
}
</style>
