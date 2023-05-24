<template>
  <section class="application-table"/>
</template>

<script setup> 
defineProps(['items'])
</script>

<style lang="scss">
.application-table {
  max-width: 1115px;
}

.qr {
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

  &-redy {
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
  }
}
</style>
