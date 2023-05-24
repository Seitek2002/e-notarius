<template>
  <div>
    <div class="register__block">
      <div class="register__item">
        <p>Область</p>
        <label
          :class="isActiveRegion ? 'active' : ''"
          @click="isActiveRegion = !isActiveRegion"
        >
          <span>{{ activeOptionRegion }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="isActiveRegion"
          class="register__select"
        >
          <div
            v-for="(region, i) in regions"
            :key="i"
            class="register__option"
            @click=";(activeOptionRegion = region), (isActiveRegion = !isActiveRegion)"
          >
            {{ region }}
          </div>
        </div>
      </div>
      <div class="register__item">
        <p>Районы</p>
        <label
          :class="isActiveArea ? 'active' : ''"
          @click="isActiveArea = !isActiveArea"
        >
          <span>{{ activeOptionArea }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="isActiveArea"
          class="register__select"
        >
          <div
            v-for="(area, i) in areas"
            :key="i"
            class="register__option"
            @click=";(activeOptionArea = area), (isActiveArea = !isActiveArea)"
          >
            {{ area }}
          </div>
        </div>
      </div>
      <div class="register__item">
        <p>Город, село</p>
        <label
          :class="iaActiveCity ? 'active' : ''"
          @click="iaActiveCity = !iaActiveCity"
        >
          <span>{{ activeCity }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="iaActiveCity"
          class="register__select"
        >
          <div
            v-for="(area, i) in areas"
            :key="i"
            class="register__option"
            @click=";(activeCity = area), (iaActiveCity = !iaActiveCity)"
          >
            {{ area }}
          </div>
        </div>
      </div>
      <div class="register__item">
        <p>Тип нотариуса</p>
        <label
          :class="iaActiveTypeOfNotarius ? 'active' : ''"
          @click="iaActiveTypeOfNotarius = !iaActiveTypeOfNotarius"
        >
          <span>{{ typeOfNotariusActiveOption }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="iaActiveTypeOfNotarius"
          class="register__select"
        >
          <div
            v-for="(item, i) in typeOfNotarius"
            :key="i"
            class="register__option"
            @click=";(typeOfNotariusActiveOption = item), (iaActiveTypeOfNotarius = !iaActiveTypeOfNotarius)"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="register__item">
        <p>Рабочие дни</p>
        <label
          :class="iaActiveWorkDay ? 'active' : ''"
          @click="iaActiveWorkDay = !iaActiveWorkDay"
        >
          <span>{{ activeWorkDay }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="iaActiveWorkDay"
          class="register__select"
        >
          <div
            v-for="(area, i) in []"
            :key="i"
            class="register__option"
            @click=";(activeWorkDay = area), (iaActiveWorkDay = !iaActiveWorkDay)"
          >
            {{ area }}
          </div>
        </div>
      </div>
      <div class="register__item">
        <p>Нотариальный округ</p>
        <label
          :class="iaActiveNotariusArea ? 'active' : ''"
          @click="iaActiveNotariusArea = !iaActiveNotariusArea"
        >
          <span>{{ activeNotariusArea }}</span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="iaActiveNotariusArea"
          class="register__select"
        >
          <div
            v-for="(area, i) in []"
            :key="i"
            class="register__option"
            @click=";(activeOptionArea = area), (iaActiveNotariusArea = !iaActiveNotariusArea)"
          >
            {{ area }}
          </div>
        </div>
      </div>
    </div>
    <div class="register__btn">
      <button>
        <ArrowDownSmallIcon/>
        Очистить фильтр
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

import ArrowDownSmallIcon from '@/components/global/Info/Icons/ArrowDownSmallIcon.vue'

const isActiveRegion = ref(false)
const isActiveArea = ref(false)
const iaActiveCity = ref(false)
const iaActiveTypeOfNotarius = ref(false)
const iaActiveWorkDay = ref(false)
const iaActiveNotariusArea = ref(false)

const activeOptionRegion = ref('Все')
const activeOptionArea = ref('Все')
const activeCity = ref('Все')
const activeTypeOfNotarius = ref('Все')
const activeWorkDay = ref('Все')
const activeNotariusArea = ref('Все')

const typeOfNotariusActiveOption = ref('')

const cities = [
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
]

const typeOfNotarius = ['Государственный', 'Частный']

const data = ref({
  'г. Бишкек': ['Первомайский район', 'Ленинский район', 'Свердловский район', 'Октябрьский район'],
  Чуй: [
    'Ыссык-Атинский район',
    'Аламудунский район',
    'Сокулукский район',
    'Московский район',
    'Жайылский район',
    'Кеминский район',
    'Панфиловский район',
  ],
  Ош: [
    'Кара-Сууйский район',
    'Ноокатский район',
    'Узгенский район',
    'Араванский район',
    'Алайский район',
    'Кара-Кулжинский район',
    'Чон-Алайский район',
  ],
})

const regions = ref(Object.keys(data.value))
const areas = ref(null)

watch(activeOptionRegion, () => {
  activeOptionArea.value = 'Все'
  areas.value = data.value[activeOptionRegion.value]
})

// console.log(data[activeOptionRegion.value]);
// { "Chui": { "Perv": {""}, "": {} } }
</script>
