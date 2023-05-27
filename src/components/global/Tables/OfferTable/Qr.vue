<template>
  <div class="qr-wrapper">
    <div v-show="qr === i" class="qr-block">
      <span class="qr-text">Отсканируйте QR-код</span>
      <Qr />
      <span class="qr-code">A5D75</span>
      <button @click="handleShare" class="qr-btn">
        Поделиться
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.00016 2.33317V7.99984M8.00016 3.6665L6.00016 1.6665L4.00016 3.6665M1.3335 6.99984V10.3332C1.3335 10.6868 1.47397 11.0259 1.72402 11.276C1.97407 11.526 2.31321 11.6665 2.66683 11.6665H9.3335C9.68712 11.6665 10.0263 11.526 10.2763 11.276C10.5264 11.0259 10.6668 10.6868 10.6668 10.3332V6.99984"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <span class="qr-more"> Подробнее </span>
      <span class="qr-ready" @click="qr = null">Закрыть</span>
    </div>

    <QrCodeDisableIcon v-if="qr !== i" @click="qr = i" />
    <QrCodeEnableIcon v-else @click="qr = null" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import QrCodeDisableIcon from "@/components/global/Tables/Icons/QrCodeDisableIcon.vue";
import QrCodeEnableIcon from "@/components/global/Tables/Icons/QrCodeEnableIcon.vue";
import Qr from "@/components/icons/Table/Qr.vue";

const props = defineProps(["i"]);
const qr = ref(null);

const handleShare = async () => {
  if (navigator.share) {
    navigator
      .share({
        title: "Заголовок вашего контента",
        text: "Описание вашего контента",
        url: "https://www.youtube.com",
      })
      .then(() => console.log("Контент успешно поделен"))
      .catch((error) => console.log("Ошибка при попытке поделиться:", error));
  }
};
</script>

<style lang="scss" scoped>
.qr {
  &-wrapper {
    position: relative;
  }

  &-block {
    position: absolute;
    width: 200px;
    left: 75px;
    top: -75px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-shadow: 0 10px 20px #e9e9e9;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    z-index: 1;
    padding: 10px 0;
  }

  &-ready {
    font-weight: 600;
    font-size: 14px;
    color: #1baa75;
    padding: 12px 20px;
    cursor: pointer;
  }

  &-text {
    font-weight: 400;
    font-size: 14px;
    color: #24334b;
  }

  &-code {
    font-weight: 600;
    font-size: 14px;
    color: #687c9b;
    text-align: center;
  }

  &-btn {
    background: #1baa75;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
  }
}
</style>
