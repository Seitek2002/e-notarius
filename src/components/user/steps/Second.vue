<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="2"
    />
    <div class="flex jcsb">
      <Title text="Выбор объекта"/>
      <Back
        v-show="!short"
        @click="handleClick(1, 'prev')"
      />
    </div>
    <div class="info__form">
      <div class="info__form--wrapper">
        <Suptitle text="Объект"/>
        <Accordeon
          :options="[
            'Движимое имущество',
            'Документы, копии, переводы, заявления',
            'Недвижимое имущество',
            'Брак, семья',
            'Иные физические лица',
            'Юридические лица',
          ]"
        />
      </div>
      <div class="info__form--wrapper">
        <Suptitle text="Вид объекта"/>
        <Accordeon
          v-if="!store.state.chooseObject"
          :options="['Алименты', 'Заработная плата', 'Пенсии', 'Индексированная сумма сбережений']"
        />
        <Accordeon
          v-else
          :options="[
            'Автотранспортное средство',
            'Оборудование, компьютерная техника',
            'Спецтехника',
            'Ценные бумаги',
            'Драгоценные камни и металлы',
            'Другое',
          ]"
        />
      </div>
    </div>
    <Next @click="handleClick(3,'next')"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import Accordeon from '@/components/global/Info/Accordeon.vue'
import Approved from '@/components/global/Info/Approved.vue'
import Back from '@/components/global/Info/Btn/Back.vue'
import Minus from '@/components/global/Info/Btn/Minus.vue'
import Next from '@/components/global/Info/Btn/Next.vue'
import Plus from '@/components/global/Info/Btn/Plus.vue'
import Dropdown from '@/components/globalUI/Info/Dropdown.vue'
import File from '@/components/global/Info/Input/File.vue'
import Text from '@/components/global/Info/Input/Text.vue'
import Mark from '@/components/globalUIUI/Info/Mark.vue'
import Suptitle from '@/components/globalUIUI/Info/Suptitle.vue'
import Title from '@/components/globalUI/Info/Title.vue'

const isActive = ref(false)
const isActiveRadio = ref(0)
const activeOption = ref('ЧН Абылгазиева Нурмира Нарматовна')
const store = useStore()

const props = defineProps(['active', 'i', 'short'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
}
</script>

<style lang="scss">
.info__step.short {
  display: none;
}
</style>
