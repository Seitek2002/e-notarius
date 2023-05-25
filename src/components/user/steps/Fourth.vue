<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="4"
    />
    <div class="flex jcsb">
      <Title text="Сторона 1 (личные данные)" />
      <Back
        v-show="!short"
        @click="handleClick(4, 'prev')"
      />
    </div>
    <div class="info__form">
      <Suptitle text="Личные данные" />
      <div class="info__forms">
        <div class="info__form--wrapper">
          <label>
            <p>Фамилия</p>
            <input
              v-model="surname"
              type="text"
            >
          </label>
        </div>
        <div class="info__form--wrapper">
          <label>
            <p>Имя</p>
            <input
              v-model="name"
              type="text"
            >
          </label>
        </div>
        <div class="info__form--wrapper">
          <label>
            <p>Отчество</p>
            <input
              v-model="lastname"
              type="text"
            >
          </label>
        </div>
      </div>
      <div class="info__form--wrapper">
        <label>
          <p>идентификационый номер (ИНН)</p>
          <input
            v-model="INNVal"
            type="text"
          >
        </label>
      </div>
      <div class="info__form--wrapper">
        <div
          class="flex"
          style="gap: 25px"
        >
          <label class="w-55">
            <p>Дата рождения</p>
            <input
              v-model="dateOfBirthVal"
              type="text"
            >
          </label>
          <div class="w-55 dropdown-search">
            <p>Гражданство</p>
            <label
              :class="citizenshipIsActive ? 'active' : ''"
              @click="citizenshipIsActive = !citizenshipIsActive"
            >
              <span>
                <SearchIcon />
                {{ citizenshipActiveOption }}
              </span>
              <ArrowDownSmallIcon/>
            </label>
            <div
              v-show="citizenshipIsActive"
              class="dropdown__select"
            >
              <div
                v-for="option in ['Кыргызстан']"
                :key="option"
                class="dropdown-search__option"
                @click=";(citizenshipActiveOption = option), (citizenshipIsActive = !citizenshipIsActive)"
              >
                {{ option }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="info__form">
      <Suptitle text="Документ, удостоверяющий личность" />
      <div class="info__form--wrapper">
        <label>
          <p>Паспорт</p>
          <input
            v-model="passportVal"
            type="text"
            placeholder="Паспорт"
          >
        </label>
      </div>
      <div class="info__form--wrapper flex">
        <div class="info__form--details">
          <p>Серия и № паспорта*</p>
          <div class="flex">
            <div class="dropdown">
              <label
                :class="passportSeriesIsActive ? 'active' : ''"
                @click="passportSeriesIsActive = !passportSeriesIsActive"
              >
                <span>
                  {{ passportSeriesActive }}
                </span>
                <ArrowDownSmallIcon />
              </label>
              <div
                v-show="passportSeriesIsActive"
                class="dropdown__select"
              >
                <div
                  v-for="option in ['ID', 'AN', 'AC']"
                  :key="option"
                  class="dropdown-search__option"
                  @click=";(passportSeriesActive = option), (passportSeriesIsActive = !passportSeriesIsActive)"
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <input
              v-model="passportID"
              type="text"
            >
          </div>
        </div>
        <div class="info__form--details">
          <p>Орган и дата выдачи</p>
          <div class="flex">
            <input
              v-model="passportOrgan"
              type="text"
            >
            <input
              v-model="passportNumber"
              type="text"
            >
            от
            <input
              v-model="passportDate"
              type="text"
            >
          </div>
        </div>
      </div>
      <Suptitle text="Адрес прописки (регистрации)" />
      <div class="info__form--wrapper flex">
        <div class="w-55 dropdown">
          <p>Область</p>
          <label
            :class="isActiveRegion ? 'active' : ''"
            @click="isActiveRegion = !isActiveRegion"
          >
            <span>{{ activeOptionRegion }}</span>
            <ArrowDownSmallIcon />
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
        <div class="w-55 dropdown">
          <p>Районы</p>
          <label
            :class="isActiveArea ? 'active' : ''"
            @click="isActiveArea = !isActiveArea"
          >
            <span>{{ activeOptionArea }}</span>
            <ArrowDownSmallIcon />
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
      <Suptitle text="Адрес фактического места жительства" />
      <div class="info__form--wrapper flex">
        <div class="w-55 dropdown">
          <p>Область</p>
          <label
            :class="regionIsActiveSecond ? 'active' : ''"
            @click="regionIsActiveSecond = !regionIsActiveSecond"
          >
            <span>
              {{ regionActiveOptionSecond }}
            </span>
            <ArrowDownSmallIcon />
          </label>
          <div
            v-show="regionIsActiveSecond"
            class="dropdown__select"
          >
            <div
              v-for="option in ['Чуй', 'Ош', 'Ыссык-Кол', 'Талас', 'Нарын', 'Жалал-Абад', 'Баткен']"
              :key="option"
              class="dropdown-search__option"
              @click=";(regionActiveOptionSecond = option), (regionIsActiveSecond = !regionIsActiveSecond)"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div class="w-55 dropdown">
          <p>Районы</p>
          <label
            :class="areaIsActiveSecond ? 'active' : ''"
            @click="areaIsActiveSecond = !areaIsActiveSecond"
          >
            <span>
              {{ areaActiveOptionSecond }}
            </span>
            <ArrowDownSmallIcon />
          </label>
          <div
            v-show="areaIsActiveSecond"
            class="dropdown__select"
          >
            <div
              v-for="option in [
                'Первомайский район',
                'Ленинский район',
                'Свердловский район',
                'Октябрьский район',
                'Ыссык-Атинский район',
                'Аламудунский район',
                'Сокулукский район',
                'Московский район',
                'Жайылский район',
                'Кеминский район',
                'Панфиловский район',
              ]"
              :key="option"
              class="dropdown-search__option"
              @click=";(areaActiveOptionSecond = option), (areaIsActiveSecond = !areaIsActiveSecond)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="info__form--wrapper flex">
        <div class="dropdown city">
          <p style="margin-bottom: 0;">
            Населенный пункт, город
          </p>
          <label
            :class="cityIsActiveSecond ? 'active' : ''"
            @click="cityIsActiveSecond = !cityIsActiveSecond"
          >
            <span>
              {{ cityActiveOptionSecond }}
            </span>
            <ArrowDownSmallIcon />
          </label>
          <div
            v-show="cityIsActiveSecond"
            class="dropdown__select"
          >
            <div
              v-for="option in [
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
              ]"
              :key="option"
              class="dropdown-search__option"
              @click=";(cityActiveOptionSecond = option), (cityIsActiveSecond = !cityIsActiveSecond)"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <label class="street">
          <p>Улица</p>
          <input
            v-model="streetSecond"
            type="text"
          >
        </label>
        <label class="home">
          <p>Дом</p>
          <input
            v-model="houseSecond"
            type="text"
          >
        </label>
        <label class="home">
          <p>Квартира</p>
          <input
            v-model="flatSecond"
            type="text"
          >
        </label>
      </div>
    </div>
    <div
      class="info__form--wrapper"
      style="margin-top: 30px"
    >
      <Suptitle text="Контактные данные" />
      <div
        class="flex"
        style="margin-top: 15px"
      >
        <label class="w-55">
          <p>E-mail*</p>
          <input type="text">
        </label>

        <label class="w-55">
          <p>Номер телефона*</p>
          <input type="text">
        </label>
      </div>
    </div>
    <Next @click="handleClick(4, 'next')" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useStore } from 'vuex'

import ArrowDownSmallIcon from '@/components/global/Info/Icons/ArrowDownSmallIcon.vue'
import SearchIcon from '@/components/global/Info/Icons/SearchIcon.vue'
import Title from '@/components/globalUI/Info/Title.vue'
import Suptitle from '@/components/globalUIUI/Info/Suptitle.vue'
import Approved from '@/components/global/Info/Approved.vue'
import Back from '@/components/global/Info/Btn/Back.vue'
import Next from '@/components/global/Info/Btn/Next.vue'

// const cityIsActive = ref(false)
const cityActiveOption = ref('')
const cityIsActiveSecond = ref(false)
const cityActiveOptionSecond = ref('')

const passportSeriesIsActive = ref(false)
const passportSeriesActive = ref('')

const passportVal = ref('')

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

const activeOptionRegion = ref('Все')
const activeOptionArea = ref('Все')

const citizenshipIsActive = ref(false)
const citizenshipActiveOption = ref('')

const isActiveRegion = ref(false)
const isActiveArea = ref(false)

watch(activeOptionRegion, () => {
  activeOptionArea.value = 'Все'
  areas.value = data.value[activeOptionRegion.value]
})

const passportOrgan = ref('')
const passportNumber = ref('')

const region = ref('')
const area = ''
const city = ref('')
const street = ref('')
const house = ref('')
const flat = ref('')

const regionFact = ref('')
const areaFact = ''
const cityFact = ref('')
const streetFact = ref('')
const houseFact = ref('')
const flatFact = ref('')

const email = ref('')
const phoneNumber = ref('')
const store = useStore()
const INNVal = ref('')
const name = ref('')
const surname = ref('')
const lastname = ref('')

const passportId = ref('')
const passportNum = ref('')
const mkk = ref('')
const mkkNumber = ref('')
const passportDate = ref('')

const dateOfBirthVal = ref('')

const streetSecond = ref('')
const flatSecond = ref('')
const houseSecond = ref('')
const streetFisrt = ref('')
const houseFisrt = ref('')
const flatFisrt = ref('')
const regionActiveOption = ref('')
const regionActiveOptionSecond = ref('')
const areaActiveOptionSecond = ref('')
const areaActiveOption = ref('')

defineProps(['short', 'notarius'])
const emits = defineEmits(['handleCustomEvent'])

const getUsers = () => {
  surname.value = ''
  name.value = ''
  lastname.value = ''
  streetSecond.value = ''
  houseSecond.value = ''
  flatSecond.value = ''
  streetFisrt.value = ''
  houseFisrt.value = ''
  flatFisrt.value = ''
  citizenshipActiveOption.value = ''
  regionActiveOption.value = ''
  regionActiveOptionSecond.value = ''
  areaActiveOption.value = ''
  areaActiveOptionSecond.value = ''
  dateOfBirthVal.value = ''

  if (INNVal.value.trim() !== '') {
    try {
      const {
        fullName, avatar, citizenship, dateOfBirth, region, area, registration, fact, passport, city, cityFact,
      } = store.state.users.find(item => item.INN === INNVal.value)
      const [a, b, c] = fullName.split(' ')

      surname.value = a
      name.value = b
      lastname.value = c
      streetSecond.value = fact.street
      houseSecond.value = fact.house
      flatSecond.value = fact.flat
      streetFisrt.value = registration.street
      houseFisrt.value = registration.house
      flatFisrt.value = registration.flat
      citizenshipActiveOption.value = citizenship
      regionActiveOption.value = region
      areaActiveOption.value = area
      dateOfBirthVal.value = dateOfBirth
      passportSeriesActive.value = passport.series
      passportVal.value = 'Паспорт'
      passportOrgan.value = passport.organization.split(' ')[0]
      passportNumber.value = passport.organization.split(' ')[1]
      passportDate.value = passport.date
      passportID.value = passport.number
      cityActiveOption.value = city
      cityActiveOptionSecond.value = cityFact
      end.value = true

      store.commit('setPersonNotarius', {
        surname: surname.value,
        name: name.value,
        lastname: lastname.value,
        streetSecond: streetSecond.value,
        houseSecond: houseSecond.value,
        flatSecond: flatSecond.value,
        streetFisrt: streetFisrt.value,
        houseFisrt: houseFisrt.value,
        flatFisrt: flatFisrt.value,
        citizenshipActiveOption: citizenshipActiveOption.value,
        regionActiveOption: regionActiveOption.value,
        regionActiveOptionSecond: regionActiveOptionSecond.value,
        areaActiveOption: areaActiveOption.value,
        areaActiveOptionSecond: areaActiveOptionSecond.value,
        dateOfBirthVal: dateOfBirthVal.value,
        INNVal: INNVal.value,
      })
    } catch {
      console.log(error)
    }
  }
}

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
  getUsers()
}
</script>

<style lang="scss" scoped>
.dropdown-search {
  p {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  label {
    padding: 7px 10px;
  }

  .dropdown__select {
    top: 75px;
  }
}

input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #24334b;
}

.dropdown {
  width: 100%;
  position: relative;

  &__select {
    position: absolute;
    top: 65px;
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
    color: hsl(217, 35%, 22%);
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
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
