<template>
  <div>
    <div class="info__form">
      <div class="info__subject">
        <Suptitle text="Субъект"/>
        <div class="flex">
          <div
            class="info__radio"
            @click=";(isActiveRadio = 0), (INNVal = ''), end = false"
          >
            <div class="info__radio--button">
              <RadioCheckedIcon v-if="isActiveRadio === 0"/>
              <RadioNulledIcon v-else/>
            </div>
            Физическое лицо
          </div>
          <div
            class="info__radio"
            @click=";(isActiveRadio = 1), (INNVal = ''), end = false"
          >
            <div class="info__radio--button">
              <RadioCheckedIcon v-if="isActiveRadio === 1"/>
              <RadioNulledIcon v-else/>
            </div>
            Юридическое лицо
          </div>
          <div
            class="info__radio"
            @click="isActiveRadioFace = !isActiveRadioFace, end = false"
          >
            <div class="info__radio--button">
              <div
                class="radio"
                :class="{ active: isActiveRadioFace }"
              >
                <CheckboxCheckedIcon v-if="isActiveRadioFace"/>
                <div
                  v-else
                  class="radio-check"
                />
              </div>
            </div>
            Иностранное лицо
          </div>
        </div>
      </div>
      <div class="w-55 dropdown">
        <strong>Роль субъекта</strong>
        <label
          :class="roleIsActive ? 'active' : ''"
          @click="roleIsActive = !roleIsActive"
        >
                <span>
                  {{ roleSubject }}
                </span>
          <ArrowDownSmallIcon/>
        </label>
        <div
          v-show="roleIsActive"
          class="dropdown__select"
        >
          <div
            v-for="option in ROLE_SUBJECT"
            :key="option"
            class="dropdown-search__option"
            @click="(roleSubject = option), (roleIsActive = !roleIsActive)"
          >
            {{ option }}
          </div>
        </div>
      </div>
      <Suptitle text="Личные данные"/>
      <label>
        <p v-if="isActiveRadio === 0">Персональный номер (ИНН)</p>
        <p v-else>Идентификационный номер (ИНН)</p>
        <input
          v-model="INNVal"
          type="text"
        >
        <p
          v-show="isErr"
          class="warning"
        >
          Пожалуйста внимательно заполните поле
          <span v-if="isActiveRadio === 0">Персональный номер (ИНН)</span>
          <span v-else>Идентификационный номер (ИНН)</span>
        </p>
      </label>
      <button
        v-show="isActiveRadio === 0 && !isActiveRadioFace"
        class="info__check-btn btn"
        :disabled="isLoading"
        @click="getUsers"
      >
        Проверить
        <PersonCheckIcon/>
        <AnimationBubblesIcon
          :class="isLoading ? 'loading-svg-check active' : 'loading-svg-check'"
        />
      </button>
      <SuccessSearchResultIcon v-if="end && isActiveRadio === 0 && !isActiveRadioFace"/>
      <div
        v-if="isActiveRadio === 0"
        class="face"
      >
        <div class="info__profile">
          <div
            v-show="!isActiveRadioFace"
            class="info__avatar"
          >
            <img
              v-if="avatarImg"
              :src="avatarImg"
              alt=""
            >
            <PersonFilledIcon v-else/>
          </div>
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
        </div>
        <div
          v-show="isActiveRadio === 0"
          class="info__form"
        >
          <Suptitle text="Документ, удостоверяющий личность"/>
          <div class="info__form--wrapper">
            <label>
              <p>Наименование документа</p>
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
                    <ArrowDownSmallIcon/>
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
        </div>
        <div
          class="info__form--wrapper flex jcsb aic"
          style="margin-top: 15px"
        >
          <div class="info__subject">
            <p>Пол</p>
            <div class="flex">
              <div
                class="info__radio"
                @click="isActiveRadioSec = 0"
              >
                <div class="info__radio--button">
                  <RadioCheckedIcon v-if="isActiveRadioSec === 0"/>
                  <RadioNulledIcon v-else />
                </div>
                Мужской
              </div>
              <div
                class="info__radio"
                @click="isActiveRadioSec = 1"
              >
                <div class="info__radio--button">
                  <RadioCheckedIcon v-if="isActiveRadioSec === 1"/>
                  <RadioNulledIcon v-else/>
                </div>
                Женский
              </div>
            </div>
          </div>
          <label class="w-33">
            <p>Дата рождения</p>
            <input
              v-model="dateOfBirthVal"
              type="text"
            >
          </label>
          <div class="w-50 dropdown-search">
            <p>Гражданство</p>
            <label
              :class="citizenshipIsActive ? 'active' : ''"
              @click="citizenshipIsActive = !citizenshipIsActive"
            >
              <span>
                <SearchIcon/>
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
        <div class="info__form">
          <Suptitle text="Адрес прописки (регистрации)"/>
          <div class="info__form--wrapper flex">
            <div class="w-55 dropdown">
              <p>Область</p>
              <label
                :class="regionIsActive ? 'active' : ''"
                @click="regionIsActive = !regionIsActive"
              >
                <span>
                  {{ regionActiveOption }}
                </span>
                <ArrowDownSmallIcon/>
              </label>
              <div
                v-show="regionIsActive"
                class="dropdown__select"
              >
                <div
                  v-for="option in regionActiveOptions"
                  :key="option"
                  class="dropdown-search__option"
                  @click=";(regionActiveOption = option), (regionIsActive = !regionIsActive)"
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <div class="w-55 dropdown">
              <p>Районы</p>
              <label
                :class="areaIsActive ? 'active' : ''"
                @click="areaIsActive = !areaIsActive"
              >
                <span>
                  {{ areaActiveOption }}
                </span>
                <ArrowDownSmallIcon/>
              </label>
              <div
                v-show="areaIsActive"
                class="dropdown__select"
              >
                <div
                  v-for="option in areasFirst"
                  :key="option"
                  class="dropdown-search__option"
                  @click=";(areaActiveOption = option), (areaIsActive = !areaIsActive)"
                >
                  {{ option }}
                </div>
              </div>
            </div>
          </div>
          <div class="info__form--wrapper flex">
            <div class="city dropdown">
              <p>Населенный пункт, город</p>
              <label
                :class="cityIsActive ? 'active' : ''"
                @click="cityIsActive = !cityIsActive"
              >
                <span>
                  {{ cityActiveOption }}
                </span>
                <ArrowDownSmallIcon/>
              </label>
              <div
                v-show="cityIsActive"
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
                  @click=";(cityActiveOption = option), (cityIsActive = !cityIsActive)"
                >
                  {{ option }}
                </div>
              </div>
            </div>
            <label class="street">
              <p>Улица</p>
              <input
                v-model="streetFisrt"
                type="text"
              >
            </label>
            <label class="home">
              <p>Дом</p>
              <input
                v-model="houseFisrt"
                type="text"
              >
            </label>
            <label class="home">
              <p>Квартира</p>
              <input
                v-model="flatFisrt"
                type="text"
              >
            </label>
          </div>
          <Suptitle text="Адрес фактического места жительства"/>
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
                <ArrowDownSmallIcon/>
              </label>
              <div
                v-show="regionIsActiveSecond"
                class="dropdown__select"
              >
                <div
                  v-for="option in regionActiveOptions"
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
                <ArrowDownSmallIcon/>
              </label>
              <div
                v-show="areaIsActiveSecond"
                class="dropdown__select"
              >
                <div
                  v-for="option in areasSecond"
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
              <p>Населенный пункт, город</p>
              <label
                :class="cityIsActiveSecond ? 'active' : ''"
                @click="cityIsActiveSecond = !cityIsActiveSecond"
              >
                <span>
                  {{ cityActiveOptionSecond }}
                </span>
                <ArrowDownSmallIcon/>
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
          <Suptitle text="Контактные данные"/>
          <div
            class="flex"
            style="margin-top: 15px"
          >
            <label class="w-55">
              <p>E-mail*</p>
              <input
                v-model="emailVal"
                type="text"
              >
            </label>
            <label class="w-55">
              <p>Номер телефона*</p>
              <input
                v-model="phoneVal"
                type="text"
              >
            </label>
          </div>
        </div>
      </div>
      <button
        v-show="isActiveRadio === 1 && !isActiveRadioFace"
        class="info__check-btn btn"
        :disabled="isLoading"
        @click="getLayerUser"
      >
        Проверить
        <PersonCheckIcon/>
        <AnimationBubblesIcon :class="isLoading ? 'loading-svg-check active' : 'loading-svg-check'"/>
      </button>
      <SuccessSearchResultIcon v-if="end && isActiveRadio === 1"/>
      <div
        v-if="isActiveRadio === 1"
        class="layer"
      >
        <Suptitle
          class="data"
          text="Данные юридического лица"
        />
        <div class="info__form--wrapper">
          <label class="street">
            <p>Полное наименование на официальном языке</p>
            <input
              v-model="officialNameVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Полное наименование на государственном языке</p>
            <input
              v-model="nationalNameVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Есть ли иностранное участие</p>
            <input
              v-model="foreigParticipantVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Регистрационный номер</p>
            <input
              v-model="registryNumberVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Код ОКПО</p>
            <input
              v-model="okpoNumberVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>ИНН</p>
            <input
              v-model="INNVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Дата приказа</p>
            <input
              v-model="orderDateVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Область</p>
            <input
              v-model="regionVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Район</p>
            <input
              v-model="areaVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Город/село/поселок</p>
            <input
              v-model="cityVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Улица (проекспект,бульвар, переулок и т.п.)</p>
            <input
              v-model="layerStreet"
              type="text"
            >
          </label>
          <label class="home">
            <p>№ Дома</p>
            <input
              v-model="layerHouse"
              type="text"
            >
          </label>
          <label class="home">
            <p>Руководитель</p>
            <input
              v-model="supervisorVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Кол-во учредителей (участников) физических лиц</p>
            <input
              v-model="foundersVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Кол-во учредителей (участников) юридических лиц</p>
            <input
              v-model="foundersLayerVal"
              type="text"
            >
          </label>
          <label class="home">
            <p>Общее кол-во (участников)</p>
            <input
              v-model="qntyOfMembersVal"
              type="text"
            >
          </label>
        </div>
      </div>
    </div>
    <div class="info__form">
      <div class="info__form--wrapper">
        <File/>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watch } from 'vue'
import { useStore } from 'vuex'

import AnimationBubblesIcon from '@/components/Info/Icons/AnimationBubblesIcon.vue'
import ArrowDownSmallIcon from '@/components/Info/Icons/ArrowDownSmallIcon.vue'
import CheckboxCheckedIcon from '@/components/Info/Icons/CheckboxCheckedIcon.vue'
import PersonCheckIcon from '@/components/Info/Icons/PersonCheckIcon.vue'
import PersonFilledIcon from '@/components/Info/Icons/PersonFilledIcon.vue'
import SearchIcon from '@/components/Info/Icons/SearchIcon.vue'
import SuccessSearchResultIcon from '@/components/Info/Icons/SuccessSearchResultIcon.vue'
import RadioCheckedIcon from '@/components/Info/Icons/RadioCheckedIcon.vue'
import RadioNulledIcon from '@/components/Info/Icons/RadioNulledIcon.vue'
import Suptitle from '@/components/Info/Suptitle.vue'
import File from '@/components/Info/Input/File.vue'

const store = useStore()
const INNVal = ref('')
const surname = ref('')
const name = ref('')
const lastname = ref('')
const isLoading = ref(false)
const isErr = ref(false)
const end = ref(false)

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

const regionActiveOptions = ref(Object.keys(data.value))

const officialNameVal = ref('')
const nationalNameVal = ref('')

const passportSeriesIsActive = ref(false)
const passportSeriesActive = ref('')

const passportVal = ref('')

const citizenshipIsActive = ref(false)
const citizenshipActiveOption = ref('')

const passportOrgan = ref('')
const passportNumber = ref('')
const passportDate = ref('')
const passportID = ref('')

const regionIsActive = ref(false)
const regionActiveOption = ref('')

const areaIsActive = ref(false)
const areaActiveOption = ref('')

const regionIsActiveSecond = ref(false)
const regionActiveOptionSecond = ref('')

const areaIsActiveSecond = ref(false)
const areaActiveOptionSecond = ref('')

const cityIsActive = ref(false)
const cityActiveOption = ref('')
const cityIsActiveSecond = ref(false)
const cityActiveOptionSecond = ref('')

const streetFisrt = ref('')
const houseFisrt = ref('')
const flatFisrt = ref('')

const streetSecond = ref('')
const houseSecond = ref('')
const flatSecond = ref('')

const dateOfBirthVal = ref('')
const emailVal = ref('')
const phoneVal = ref('')

const avatarImg = ref('')
const isActive = ref(false)
const isActiveRadio = ref(0)
const isActiveRadioSec = ref(0)
const isActiveRadioFace = ref(false)
const activeOption = ref('')

const fullNameVal = ref('')
const foreigParticipantVal = ref('')
const registryNumberVal = ref('')
const okpoNumberVal = ref('')
const orderDateVal = ref('')
const regionVal = ref('')
const areaVal = ref('')
const cityVal = ref('')

const layerStreet = ref('')
const layerHouse = ref('')

const supervisorVal = ref('')
const foundersVal = ref('')
const foundersLayerVal = ref('')
const qntyOfMembersVal = ref('')

const roleSubject = ref('')
const roleIsActive = ref(false)
const ROLE_SUBJECT = ['Участник', 'Попечитель', 'Лицо действующее по доверенности','Сурдопереводчик']

const getUsers = () => {
  end.value = false
  isLoading.value = true
  isErr.value = false
  surname.value = ''
  name.value = ''
  lastname.value = ''
  avatarImg.value = ''
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

      setTimeout(() => {
        surname.value = a
        name.value = b
        lastname.value = c
        avatarImg.value = avatar
        streetSecond.value = fact.street
        houseSecond.value = fact.house
        flatSecond.value = fact.flat
        streetFisrt.value = registration.street
        houseFisrt.value = registration.house
        flatFisrt.value = registration.flat
        citizenshipActiveOption.value = citizenship
        regionActiveOption.value = region
        regionActiveOptionSecond.value = region
        areaActiveOption.value = area
        areaActiveOptionSecond.value = area
        dateOfBirthVal.value = dateOfBirth
        isLoading.value = false
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
          avatarImg: avatarImg.value,
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
      }, 1500)
    } catch {
      isLoading.value = false
      isErr.value = true
    }
  } else {
    isLoading.value = false
    isErr.value = true
  }
}

const getLayerUser = () => {
  end.value = false
  isLoading.value = true
  isErr.value = false
  fullNameVal.value = ''
  foreigParticipantVal.value = ''
  registryNumberVal.value = ''
  okpoNumberVal.value = ''
  orderDateVal.value = ''
  regionVal.value = ''
  areaVal.value = ''
  cityVal.value = ''
  layerStreet.value = ''
  layerHouse.value = ''
  supervisorVal.value = ''
  foundersVal.value = ''
  foundersLayerVal.value = ''
  qntyOfMembersVal.value = ''
  officialNameVal.value = ''
  nationalNameVal.value = ''

  if (INNVal.value.trim() !== '') {
    try {
      const {
        fullName,
        foreigParticipant,
        registryNumber,
        okpoNumber,
        INN,
        orderDate,
        region,
        area,
        city,
        fact,
        supervisor,
        founders,
        foundersLayer,
        qntyOfMembers,
        officialName,
        nationalName,
      } = store.state.users.find(item => item.INN === INNVal.value)

      setTimeout(() => {
        fullNameVal.value = fullName
        foreigParticipantVal.value = foreigParticipant
        registryNumberVal.value = registryNumber
        okpoNumberVal.value = okpoNumber
        orderDateVal.value = orderDate
        regionVal.value = region
        areaVal.value = area
        cityVal.value = city
        layerStreet.value = fact.street
        layerHouse.value = fact.house
        supervisorVal.value = supervisor
        foundersVal.value = founders
        foundersLayerVal.value = foundersLayer
        qntyOfMembersVal.value = qntyOfMembers
        officialNameVal.value = officialNameVal
        nationalNameVal.value = nationalNameVal

        isLoading.value = false
        end.value = true
        store.commit('setChoosenApplicant', fullNameVal.value)
      }, 3000)
    } catch {
      isErr.value = true
      isLoading.value = false
    }
  } else {
    isLoading.value = false
    isErr.value = true
  }
}

const areasFirst = ref([])
const areasSecond = ref([])

watch(regionActiveOptionSecond, () => {
  areasSecond.value = data.value[regionActiveOptionSecond.value]
})

watch(regionActiveOption, () => {
  areasFirst.value = data.value[regionActiveOption.value]
})
</script>

<style lang="scss" scoped>
.layer {
  .info__form--wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

input {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #24334b;
}

.info {
  &__profile {
    display: flex;
    gap: 20px;
  }

  p {
    margin: 0;
  }

  &__avatar {
    img {
      width: 170px;
      height: 227px;
      object-fit: cover;
    }
  }

  &__forms {
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 15px;

    label {
      p {
        margin-top: 0;
      }
    }
  }
}

.info__check-btn {
  margin-top: 20px;
  background: #1baa75;
  position: relative;

  &:disabled {
    opacity: 0.5;
    cursor: progress;
  }

  .loading-svg-check {
    position: absolute;
    transform-origin: center;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    right: 0;

    &.active {
      right: -50px;
      animation-name: round;
    }
  }
}

.btn {
  font-family: 'Montserrat', sans-serif;
  width: 320px;
  padding: 14px 0;
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: 0.3s;
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

.warning {
  color: red;
}

@keyframes round {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.dropdown.city {
  width: 33%;
  padding: 0;

  p {
    white-space: nowrap;
  }

  label {
    padding: 8px 10px;
  }
}
</style>
