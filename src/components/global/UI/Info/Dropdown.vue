<script setup>
import { ref } from 'vue'

const isActive = ref(false)
const activeOption = ref('Все')


const handleChange = (value) => {
  activeOption.value = value
  isActive.value = false
}

defineProps(['title', 'options'])
</script>

<template>
  <div class="dropdown">
    <p v-show="title">
      {{ title }}
    </p>
    <label
      :class="isActive ? 'active' : ''"
      @click="isActive = !isActive"
    >
      <span>{{ activeOption }}</span>
      <svg
        class="arrow"
        :class="{ active: isActive }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#1BAA75"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
    <div
      v-show="isActive"
      class="dropdown__select"
    >
      <div
        v-for="option in options"
        :key="option"
        class="dropdown__option"
        @click="handleChange(title, option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
  position: relative;

  &__select {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
    z-index: 10;
    border: 1px solid #1baa75;
    border-top: none;
    box-sizing: border-box;
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
    padding: 12px 10px;
    box-sizing: border-box;
  }
}

.arrow.active {
  transform: rotate(180deg);
  transition: 0.3s;
}
</style>
