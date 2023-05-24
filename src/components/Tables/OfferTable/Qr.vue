<template>
  <div class="qr-wrapper">
    <div v-show="qr === i" class="qr-block">
      <span class="qr-text">Отсканируйте QR-код</span>
      <Qr />
      <span class="qr-code">A5D75</span>
      <span class="qr-redy" @click="qr = null">Закрыть</span>
    </div>

    <QrCodeDisableIcon v-if="qr !== i" @click="qr = i" />
    <QrCodeEnableIcon v-else @click="qr = null" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import QrCodeDisableIcon from "@/components/Tables/Icons/QrCodeDisableIcon.vue";
import QrCodeEnableIcon from "@/components/Tables/Icons/QrCodeEnableIcon.vue";
import Qr from "@/components/icons/Table/Qr.vue";

const props = defineProps(["i"]);
const qr = ref(null);
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
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0 10px 20px #E9E9E9;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    z-index: 1;
    padding: 10px 0;
  }

  &-redy {
    font-weight: 600;
    font-size: 14px;
    color: #1BAA75;
    padding: 12px 20px;
    cursor: pointer;
  }

  &-text {
    font-weight: 400;
    font-size: 14px;
    color: #24334B;
  }

  &-code {
    font-weight: 600;
    font-size: 14px;
    color: #687C9B;
    text-align: center;
  }
}
</style>