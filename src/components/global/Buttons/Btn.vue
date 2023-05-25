<template>
  <button
    :style="'background:' + bg"
    class="btn"
    :disabled="disabled"
  >
    <AddNewIcon/>

    <component :is="icon"/>
    {{ title }}
  </button>
</template>

<script setup>
import AddNewIcon from './Icons/AddNewIcon.vue'

const props = defineProps(['title', 'bg', 'icon', 'disabled'])

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.btn {
  font-family: "Montserrat", sans-serif;
  width: 250px;
  padding: 14px 0;
  border: none;
  color: $bg-white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: .3s;

  &:not(:disabled):hover {
    opacity: 0.96;
    box-shadow: 0 10px 20px $shadow-green;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
