<template>
  <section class="check">
    <div class="container">
      <div class="check__tabs">
        <div
          class="check__tab"
          :class="{ active: isActive === 0 }"
          @click="isActive = 0"
        >
          Проверить доверенность по номеру реестра
        </div>
        <div
          class="check__tab"
          :class="{ active: isActive === 1 }"
          @click="isActive = 1"
        >
          Проверить доверенность по QR коду
        </div>
      </div>
      <div
        v-show="isActive === 0"
        class="check__content"
      >
        <div class="check__content-top">
          <label>
            <p>Номер реестра</p>
            <input
              type="text"
              placeholder="Номер"
            >
          </label>
          <label>
            <p>Дата удостоверения</p>
            <input
              type="text"
              placeholder="дд.мм.гг"
            >
          </label>
        </div>
        <div class="check__content-bottom">
          <button @click="handleClick">
            <AppSearchIcon/>
            Найти
          </button>
        </div>
      </div>
      <div
        v-show="isActive === 1"
        class="check__content"
      >
        <div>
          <QRStream/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import AppSearchIcon from '@/views/Icons/AppSearchIcon.vue'
import QRStream from '@/components/guest/QRStream.vue'

const isActive = ref(1)

const handleClick = () => {
  window.open('https://1drv.ms/w/s!AjK2Sctg-67XhWZTfEdXl0Vn2ged?e=8mcL8c', '_blank')
}
</script>

<style lang="scss">
.check {
  padding: 20px 0;

  &__tabs {
    display: flex;
  }

  &__tab {
    font-weight: 600;
    font-size: 16px;
    color: #f6f6f6;
    background: #1baa75;
    padding: 20px;
    cursor: pointer;

    &.active {
      background: #24334b;
    }
  }

  &__content-bottom {
    margin-top: 20px;

    button {
      background: #1baa75;
      color: #f6f6f6;
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      gap: 10px;
      padding: 11px 20px;
    }
  }

  label {
    font-family: 'Montserrat';
    display: block;
    font-weight: 400;
    font-size: 16px;
    color: #24334b;

    p {
      font-weight: 500;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      padding: 11px 10px;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.error {
  font-weight: bold;
  color: red;
}
</style>
