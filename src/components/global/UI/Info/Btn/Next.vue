<template>
  <button class="next-btn">
    {{ title ? title : 'Далее' }}
    <ArrowDownIcon
      :class="title ? 'active' : ''"
    />
  </button>
</template>

<script setup>
import ArrowDownIcon from '@/components/global/UI/Info/Btn/Icons/ArrowDownIcon.vue'

defineProps(['title'])
</script>

<style lang="scss">
.next-btn {
  margin-top: 20px;
  background: #1baa75;
  font-weight: 600;
  font-size: 16px;
  color: #f6f6f6;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 56px;

  svg.active {
    transform: rotate(-90deg);
  }
}
</style>
