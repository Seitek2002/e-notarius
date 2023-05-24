<template>
  <div class="lang">
    <div
      class="lang__wrapper"
      @click="isActive = !isActive"
    >
      {{ currentLang }}
      <arrow :class="isActive ? 'active' : ''"/>
    </div>
    <div
      v-show="isActive"
      class="lang__dropdown"
    >
      <div
        v-for="lang in langs"
        v-show="lang !== currentLang"
        :key="lang"
        class="lang__option"
        @click="choose(lang)"
      >
        {{ lang }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import arrow from '@/components/icons/Header/arrow.vue'

const isActive = ref(false)
const currentLang = ref('Рус')
const langs = ['Рус', 'Кырг', 'Англ']

const choose = lang => {
  currentLang.value = lang
  isActive.value = false
}
</script>

<style lang="scss">
.lang {
  position: relative;

  &__wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg.active {
      transform: rotate(180deg);
    }
  }

  &__dropdown {
    position: absolute;
    background: #fff;
    top: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
    width: 100%;
  }

  &__option {
    cursor: pointer;
  }
}
</style>
