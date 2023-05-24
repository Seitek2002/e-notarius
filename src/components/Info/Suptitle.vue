<template>
  <h3>{{ text }}</h3>
</template>

<script setup>
defineProps(['text'])
</script>

<style lang="scss" scoped>
h3 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #687c9b;
}
</style>
