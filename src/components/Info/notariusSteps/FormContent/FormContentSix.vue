<template>
  <div class="info__form">
    <div
      class="info__form--wrapper"
      style="margin-top: 30px"
    >
      <div
        class="flex"
        style="margin-top: 15px"
      >
        <div class="dropdown">
          <p>Срок доверенности</p>
          <label
            :class="believeIsActive ? 'active' : ''"
            @click="believeIsActive = !believeIsActive"
          >
            <span>{{ believeTime }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: believeIsActive }"
            />
          </label>
          <div
            v-show="believeIsActive"
            class="dropdown__select"
          >
            <div
              v-for="option in ['1 месяц', '3 месяца', '6 месяцев', '1 год', '3 года', 'другое']"
              :key="option"
              class="dropdown-search__option"
              @click=";(believeTime = option), (believeIsActive = !believeIsActive)"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div class="dropdown">
          <p>Степень родства</p>
          <label
            :class="relationIsActive ? 'active' : ''"
            @click="relationIsActive = !relationIsActive"
          >
            <span>{{ relation }}</span>
            <ArrowDownSmallIcon
              :class="{ active: relationIsActive }"
            />
          </label>
          <div
            v-show="relationIsActive"
            class="dropdown__select"
          >
            <div
              v-for="option in ['Дети', 'Родители', 'Супруги', 'Иные физические лица']"
              :key="option"
              class="dropdown-search__option"
              @click=";(relation = option), (relationIsActive = !relationIsActive)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex number"
        style="margin-top: 15px"
      >
        <div class="dropdown">
          <p>Гос номер авто</p>
          <Input class="inputNumberAuto"/>
        </div>
        <div class="dropdown">
          <p>Право передоверия</p>
          <label
            :class="believeIsActiveRight ? 'active' : ''"
            @click="believeIsActiveRight = !believeIsActiveRight"
          >
            <span>{{ promises }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: believeIsActiveRight }"
            />
          </label>
          <div
            v-show="believeIsActiveRight"
            class="dropdown__select"
          >
            <div
              v-for="option in ['С правом передоверия', 'Без права передоверия']"
              :key="option"
              class="dropdown-search__option"
              @click=";(believeRight = option), (believeIsActiveRight = !believeIsActiveRight)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <button
        :disabled="isLoading"
        class="chek"
        @click="handleClick"
      >
        Проверить
        <AnimationBubblesIcon
          class="loading-check-svg"
          :class="{ active: isLoading }"
        />
        <span
          v-if="end"
          class="end"
          :class="{acive: end}"
        >
          <SuccessSmallIcon/>
          Данные действительны в базе данных ГП Унаа
        </span>
      </button>
      <div
        v-if="showAutoNumber"
        class=""
      >
        <div>
          <ul class="autoInfo">
            <li
              v-for="info in autoInfo"
              :key="info"
            >
              {{ info }}
            </li>
          </ul>
          <hr>
        </div>
        <ul class="autoDescr">
          <li
            v-for="descr in autoDescr"
            :key="descr"
          >
            {{ descr }}
          </li>
        </ul>
      </div>
      <div
        class="flex"
        style="margin-top: 15px"
      >
        <Text
          class="w-55"
          text="Сумма госпошлины"
          placeholder=""
        />
        <Text
          class="w-55"
          text="Вознаграждение нотариуса"
          placeholder=""
        />
      </div>
    </div>
    <div class="info__form">
      <div
        class="info__radio"
        @click="isActiveRadio = !isActiveRadio"
      >
        <div class="info__radio--button">
          <RadioSuccessIcon v-if="isActiveRadio"/>
          <RadioNulledIcon v-else/>
        </div>
        Освобожден
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import Text from '@/components/Info/Input/Text.vue'
import AnimationBubblesIcon from '@/components/Info/Icons/AnimationBubblesIcon.vue'
import ArrowDownSmallIcon from '@/components/Info/Icons/ArrowDownSmallIcon.vue'
import RadioNulledIcon from '@/components/Info/Icons/RadioNulledIcon.vue'
import RadioSuccessIcon from '@/components/Info/Icons/RadioSuccessIcon.vue'
import SuccessSmallIcon from '@/components/Info/Icons/SuccessSmallIcon.vue'

const store = useStore()

const autoInfo = ref([
  'Рег. знак',
  'Тип ТС',
  'Кузов',
  'Марка',
  'Модель',
  'Тип Руля',
  'Год',
  'Цвет',
  'Серийный номер',
  'Идент номер',
  'Обьем',
  'Арест/Запрет',
])
const autoDescr = ref([
  '09KG774',
  'легковой',
  'седан',
  'MERCEDES-BENZ',
  'E 220',
  'левый',
  '2001',
  'Цвет',
  'WDB2100061BQQ7053',
  '',
  '2148',
  'Не состоит в аресте (запрещении)',
])
const buttonShow = ref(false)
const inpVal = ref('')
const showAutoNumber = ref(false)
const isActiveRadio = ref(false)

const believeTime = ref('1 месяц')
const autoNumber = ref('09KG774')
const promises = ref('C правом передоверия')
const believeTimeIsActive = ref('')

const relation = ref('Иные физические лица')
const relationIsActive = ref('')

const believe = ref('')
const believeIsActive = ref(false)

const believeRight = ref('')
const believeIsActiveRight = ref(false)

const isLoading = ref(false)
const end = ref(false)

const inputValue = () => {
  if (inpVal.value === '') {
    !buttonShow.value
  } else {
    buttonShow.value
  }
}

const handleClick = () => {
  isLoading.value = true
  end.value = false
  showAutoNumber.value = false

  setTimeout(() => {
    showAutoNumber.value = true
    isLoading.value = false
    end.value = true
  }, 1500)
}
</script>

<style lang="scss" scoped>
.chek {
  position: relative;

  .end {
    position: absolute;
    right: -500px;
    color: #3F5984;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &:disabled {
    opacity: 0.5;
  }

  .loading-check-svg {
    position: absolute;
    right: 0;
    transform-origin: center;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    &.active {
      right: -50px;
      animation-name: round;
    }
  }
}

hr {
  margin: 0;
}

.inputNumberAuto {
  border: 1px solid #1baa75;
  width: 100%;
  height: 36px;
}

.btns {
  display: flex;
}

.chek {
  width: 190px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1baa75;
  color: #fff;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
}

.button {
  width: 50px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1baa75;
  margin-left: 20px;
  color: #fff;
}

.button:last-child {
  background-color: #24334b;
}

.plus {
  height: 35px;
  margin-right: 10px;
  display: block;
}

.minus {
  height: 35px;

  display: block;
}

.autoInfo {
  display: flex;
  font-weight: 600;
  margin-top: 25px;
  gap: 10px;
  font-size: 12px;

  li {
    width: 70px;
  }
}

.autoDescr {
  display: flex;
  gap: 10px;
  font-weight: 400;
  font-size: 12px;

  li {
    width: 70px;
  }
}

.number {
  position: relative;

  .btns {
    position: absolute;
    top: 0;
    left: 325px;
  }
}

.accordeon {
  width: 55%;
  position: relative;

  &__select {
    background: #fff;
    width: 100%;
    border: 1px solid #1baa75;
    border-top: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  p {
    margin-bottom: 5px;
  }

  &__option {
    color: #24334b;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 7px 10px;
    box-sizing: border-box;

    &.active {
      border-bottom: 1px solid transparent;
    }
  }
}

.info__form--wrapper {
  width: unset;
}

.info__form {
  margin-top: 0;
}

.info {
  &__description {
    margin-top: 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #828282;
      margin-top: 15px;
    }
  }

  &__download-pdf {
    font-weight: 400;
    font-size: 16px;
    color: #24334b;
  }
}

.editor {
  a {
    text-decoration: underline;
  }

  .ProseMirror h1,
  .ProseMirror h2,
  .ProseMirror h3,
  .ProseMirror h4,
  .ProseMirror h5,
  .ProseMirror h6 {
    margin-top: 0.83em;
    margin-bottom: 0.83em;
  }

  .ProseMirror p {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .ProseMirror ul {
    padding: 0 15px;
    list-style: disc;
  }

  &__font {
    font-weight: 400;
    font-size: 14px;
    color: #24334b;

    &-option {
      padding: 2px 15px;
      cursor: pointer;

      &.active {
        background: #cdcdcd;
      }
    }

    &-family {
      position: relative;
      font-family: 'Times New Roman';

      &--content {
        width: 185px;
      }
    }

    &-size {
      position: relative;

      &--content {
        width: 185px;
        gap: 0 !important;

        input {
          background: transparent;
          flex: 1;
          border: none;
        }
      }
    }

    &-style,
    &-color,
    &-formatter,
    &-fixes,
    &-actions {
      gap: 7px !important;

      svg {
        cursor: pointer;
        padding: 3px;

        &:hover {
          background: #ccc;
        }
      }
    }

    &-dropdown {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 10px;
      left: 0;
      top: 30px;
      background: #fff;
      width: 100%;
      z-index: 10;
      padding: 15px 0;
      box-sizing: border-box;
      height: 100px;
      overflow-y: auto;
    }
  }

  &__menu {
    padding: 12px 8px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
  }
}

.dropdown {
  width: 55%;
  position: relative;

  &__select {
    position: absolute;
    top: 100%;
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

  p {
    margin-bottom: 5px;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 7px 10px;
    box-sizing: border-box;
  }
}

.arrow.active {
  transform: rotate(180deg);
  transition: 0.3s;
}

@keyframes round {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
