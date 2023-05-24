<template>
  <h2>{{ text }}</h2>
</template>

<script setup>
defineProps(['text'])
</script>

<style lang="scss" scoped>
h2 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #24334b;
}
</style>
