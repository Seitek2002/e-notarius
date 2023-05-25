<template>
  <main>
    <Btn
      title="Войти"
      bg="#1BAA75"
    />
    <Btn
      title="Написать сообщение"
      bg="#24334B"
      :icon="icon"
    />
    <Btn
      title="Найти"
      bg="#1BAA75"
      :icon="icon"
      @click="handleSubmit(localstorageValues)"
    />

    <template
      v-for="item in items"
      :key="item.title"
    >
      <Dropdown
        :title="item.title"
        :options="item.options"
        @qwerty="value => localstorageValues.push(value)"
      />
    </template>
  </main>
</template>

<script setup>
import { ref } from 'vue'

import Btn from '@/components/global/UI/Buttons/Btn.vue'
import icon from '@/components/icons/Button/offer-icon.vue'
import Dropdown from '@/componentsUI/Info/Dropdown.vue'

const localstorageValues = ref([])

const handleSubmit = obj => {
  console.log(obj.flat())
}

const items = [
  {
    title: 'Область',
    options: [
      'Движимое имущество',
      'Документы, копии, переводы, заявления',
      'Недвижимое имущество',
      'Брак, семья',
      'Иные физические лица',
      'Юридические лица',
    ],
  },
  {
    title: 'Населенный пункт, город',
    options: [
      'г. Бишкек',
      'г. Токмок',
      'г. Ош',
      'г. Жалал-Абад',
      'г. Кочкор-Ата',
      'г. Майлуу-Суу',
      'г. Так-Комур',
      'г. Кара-Куль',
      'г. Талас',
      'г. Баткен',
      'г. Сулюкта',
      'г. Кызыл-Кыя',
      'г. Баткен',
      'г. Чолпон-Ата',
      'г. Балыкчы',
      'г. Каракол',
      'г. Нарын',
    ],
  },
]
</script>
