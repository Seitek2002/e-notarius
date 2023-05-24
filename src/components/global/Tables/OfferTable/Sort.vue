<template>
  <div class="sort-table">
    {{ title }}
    <ArrowIcon/>
  </div>
</template>

<script setup>
import ArrowIcon from '@/components/icons/Table/ArrowIcon.vue'
 
defineProps(['title'])
</script>

<style lang="scss" scoped>
.sort-table {
  display: flex;
  align-items: center;
  gap: 20px;
}
</style>
