<template>
  <div class="file">
    <div class="file__top">
      <div class="file__photo">
        Фото паспорта (формата 3 на 4)
      </div>
    </div>
    <div
      v-for="item in items"
      :key="item.id"
      class="file__wrapper"
    >
      <div class="file__input">
        <input
          v-model="item.value"
          type="text"
          multiple
        >
        <label
          for="file"
          class="svg"
        >
          <AttachFileIcon/>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import AttachFileIcon from '@/components/Info/Input/Icons/AttachFileIcon.vue'

const items = ref([
  {
    id: 0,
    value: '',
  },
])

const currentPlus = ref(items.value[items.value.length - 1].id)

const handleClickPlus = () => {
  currentPlus.value++

  const item = {
    id: currentPlus.value,
    value: '',
  }

  items.value.push(item)

  console.log(items.value)
}

const handleClickMinus = id => {
  items.value = items.value.filter(item => item.id !== id)
}
</script>

<style lang="scss">
.file {
  &__photo {
    margin-top: 30px;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    label {
      display: flex;
      align-items: center;
      font-weight: 600;
      font-size: 16px;
      color: #1baa75;
      gap: 7px;

      input {
        display: none;
      }
    }
  }

  &__wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }

  svg {
    cursor: pointer;
  }

  &__input {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 14px;
    color: #bdbdbd;
    flex: 1;

    .svg {
      width: 70px;
      background: #1baa75;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    input {
      flex: 1;
      display: block;
      background: #ffffff;
      padding: 14px 15px;
      border: 1px solid gray;
    }
  }
}
</style>
