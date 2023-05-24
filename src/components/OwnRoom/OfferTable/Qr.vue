<template>
  <div
    v-show="qr === i"
    class="qr-block"
  >
    <span class="qr-text">Отсканируйте QR-код</span>
    <Qr/>
    <span class="qr-code">A5D75</span>
    <span
      class="qr-redy"
      @click="qr = null"
    >Закрыть</span>
  </div>

  <QrCodeDisableIcon
    v-if="qr !== i"
    @click="qr = i"
  />
  <QrCodeEnableIcon
    v-else
    @click="qr = null"
  />
</template>

<script setup>
import { ref } from 'vue'

import QrCodeDisableIcon from '@/components/OwnRoom/Icons/QrCodeDisableIcon.vue'
import QrCodeEnableIcon from '@/components/OwnRoom/Icons/QrCodeEnableIcon.vue'
import Qr from '@/components/icons/Table/Qr.vue'

const props = defineProps(["i"]);
const qr = ref(null);
</script>
