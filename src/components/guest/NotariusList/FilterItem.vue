<template>
  <div class="register__item">
    <p>{{ item.title }}</p>
    <label
      :class="isActive ? 'active' : ''"
      @click="isActive = !isActive"
    >
      <span>{{ activeOption.area ? activeOption.area : activeOption }}</span>
      <ArrowDownSmallIcon/>
    </label>
    <div
      v-show="isActive"
      class="register__select"
    >
      <div
        v-for="(option, i) in item.options"
        :key="i"
        class="register__option"
        @click="activeOption = option, isActive = !isActive"
      >
        {{ option.area ? option.area : option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import ArrowDownSmallIcon from '@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue'

const isActive = ref(false)
const activeOption = ref('Все')
defineProps(['item'])
const emits = defineEmits(['handleChange'])

watch(activeOption, () => {
  emits('handleChange', activeOption.value)
})
</script>

<style lang="scss">
label {
  display: flex;
  align-items: center;
}


</style>
