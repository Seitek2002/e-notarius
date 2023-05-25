<template>
  <div
    class="info__step"
    :class="active ? 'active' : ''"
  >
    <Approved
      :is-active="active"
      num="1"
    />
    <div class="flex jcsb">
      <Title text="Выбор нотариуса"/>
    </div>
    <div class="info__form">
      <div class="flex">
        <div class="dropdown">
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
            class="dropdown__select"
          >
            <div
              v-for="(region, i) in regions"
              :key="i"
              class="dropdown__option"
              @click=";(activeOptionRegion = region), (isActiveRegion = !isActiveRegion)"
            >
              {{ region }}
            </div>
          </div>
        </div>
        <div class="dropdown">
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
            class="dropdown__select"
          >
            <div
              v-for="(area, i) in areas"
              :key="i"
              class="dropdown__option"
              @click=";(activeOptionArea = area), (isActiveArea = !isActiveArea)"
            >
              {{ area }}
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="dropdown">
          <p>Город</p>
          <label
            :class="isActiveCity ? 'active' : ''"
            @click="isActiveCity = !isActiveCity"
          >
            <span>{{ activeOptionCity }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: isActiveCity }"
            />
          </label>
          <div
            v-show="isActiveCity"
            class="dropdown__select"
          >
            <div
              v-for="option in [
                'Бишкек',
                'Токмок',
                'Ош',
                'Жалал-Абад',
                'Кочкор-Ата',
                'Майлуу-Суу',
                'Таш-Комур',
                'Кара-Куль',
                'Талас',
                'Баткен',
                'Сулюкта',
                'Кызыл-Кыя',
                'Чолпон-Ата',
                'Балыкчы',
                'Каракол',
                'Нарын',
              ]"
              :key="option"
              class="dropdown__option"
              @click=";(activeOptionCity = option), (isActiveCity = !isActiveCity)"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div class="dropdown">
          <p>Нотариальный округ</p>
          <label
            :class="isActiveNotariusArea ? 'active' : ''"
            @click="isActiveNotariusArea = !isActiveNotariusArea"
          >
            <span>{{ activeOptionNotariusArea }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: isActiveNotariusArea }"
            />
          </label>
          <div
            v-show="isActiveNotariusArea"
            class="dropdown__select"
          >
            <div
              v-for="option in [
                'Первомайский район',
                'Ленинский район',
                'Свердловский район',
                'Октябрьский район',
                'Ысык-Атинский район',
                'Аламудунский район',
                'Сокулукский район',
                'Московский район',
                'Жайылский район',
                'Кеминский район',
                'Панфиловский район',
                'Кара-Сууйский район',
                'Ноокатский район',
                'Узгенский район',
                'Араванский район',
                'Алайский район',
                'Кара-Кулжинский район',
                'Чон-Алайский район',
                'Сузакский район',
                'Базар-Коргонский район',
                'Ноокенский район',
                'Аксыйский район',
                'Ала-Букинский район',
                'Токтогулский район',
                'Чаткалский району',
                'Тогуз-Тороуский район',
                'Сузакский район',
                'Кара-Бууринский район',
                'Манасский район',
                'Бакай-Атинский район',
                'Кадамжайский район',
                'Лейлекский район',
                'Тюпский район',
                'Жети-Огузский район',
                'Тонский район',
                'Ат-Башинский район',
                'Ак-Талинский район',
                'Кочкорский район',
                'Жумгалский район',
              ]"
              :key="option"
              class="dropdown__option"
              @click=";(activeOptionNotariusArea = option), (isActiveNotariusArea = !isActiveNotariusArea)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown-search">
        <p>Нотариус</p>
        <label
          :class="isActive ? 'active' : ''"
          @click="isActive = !isActive"
        >
          <span>
            <SearchIcon/>
            {{ activeOption }}
          </span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="isActive"
          class="dropdown-search__select"
        >
          <div
            v-for="option in [
              'ЧН Бегалиева Нурмира Улугбековна',
              'ЧН Нурдинов Айдин Нурдинович',
              'ГН Турдалиев Кымчыбек Нарматович',
            ]"
            :key="option"
            class="dropdown-search__option"
            @click=";(activeOption = option), (isActive = !isActive)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
    <Next @click="handleClick"/>
  </div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

import ArrowDownSmallIcon from '@/components/global/Info/Icons/ArrowDownSmallIcon.vue'
import SearchIcon from '@/components/global/Info/Icons/SearchIcon.vue'
import Approved from '@/components/global/Info/Approved.vue'
import Next from '@/components/global/Info/Btn/Next.vue'
import Title from '@/components/globalUI/Info/Title.vue'

const isActive = ref(false)
const isActiveRadio = ref(0)
const activeOption = ref('ЧН Абылгазиева Нурмира Нарматовна')

const isActiveRegion = ref(false)
const isActiveArea = ref(false)
const isActiveCity = ref(false)
const isActiveNotariusArea = ref(false)

const activeOptionRegion = ref('Все')
const activeOptionArea = ref('Все')
const activeOptionCity = ref('Все')
const activeOptionNotariusArea = ref('Все')

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
defineProps(['active'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
}
</script>

<style lang="scss">
.dropdown {
  width: 100%;
  position: relative;

  &__select {
    position: absolute;
    top: 100px;
    left: 0;
    background: #fff;
    max-height: 200px;
    overflow-y: auto;
    width: 100%;
    z-index: 10;
    border: 1px solid #1baa75;
    border-top: none;
    box-sizing: border-box;
  }

  &__option {
    color: #24334b;
    margin: 15px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 12px 10px;
    box-sizing: border-box;
  }
}

.arrow.active {
  transform: rotate(180deg);
  transition: 0.3s;
}
</style>
