<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="2"
    />
    <div class="flex jcsb">
      <Title text="Выбор нотариального документа"/>
      <Back
        v-show="!short"
        @click="handleClick(0, 'prev')"
      />
    </div>
    <div class="flex jcsb">
      <div/>
      <Mark
        v-show="!short"
        text="Вы можете выбрать документ из готовых шаблонов в “Мои шаблоны” либо выбрать из системных шаблонов. Если Вы не нашли то что искали, то нажмите “Выбрать пошагово”. Система поможет вам найти нужный документ"
      />
    </div>

    <br>
    <div class="info_form--wrapper flex">
      <div class="info__form--wrapper">
        <p class="info__form-example">
          Выбрать документ из “Моих шаблонов”
        </p>
        <div class="accordeon">
          <label
            :class="exampleIsActive ? 'active' : ''"
            @click="exampleIsActive = !exampleIsActive"
          >
            <span>{{ example }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: exampleIsActive }"
            />
          </label>
          <div
            v-show="exampleIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in [
                'Согласия родителей на самостоятельный выезд',
                'Заявление о принятии наследства',
                'Доверенность на распоряжение а/м',
                'Доверенность на продажу недвижимого имущества',
                'Доверенность на получение алиментов',
                'Договор купли-продажи квартиры, жилого дома',
                'Договор дарения квартиры, жилого дома',
                'Договор залога недвижимого имущества',
              ]"
              :key="option"
              class="accordeon__option"
              @click=";(example = option), (exampleIsActive = !exampleIsActive)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="info__form--wrapper">
        <p class="info__form-example">
          Выбрать системный шаблон по коду документа
        </p>
        <div
          class="accordeon"
          @click="secondIsActive = !secondIsActive"
        >
          <div
            class="label"
            :class="secondIsActive ? 'active' : ''"
          >
            <input
              v-model="secondActiveOption"
              type="text"
              @input="handleChange"
            >
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: secondIsActive }"
            />
          </div>
          <div
            v-show="secondIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in secondOptionsRef"
              :key="option"
              class="accordeon__option"
              @click="handleOptionClick(option)"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <p>Язык шаблона</p>
    <div class="flex">
      <div
        class="info__radio"
        @click="isActiveRadio = 0"
      >
        <div class="info__radio--button">
          <RadioCheckedIcon v-if="isActiveRadio === 0"/>
          <RadioNulledIcon v-else/>
        </div>
        Кыргызский
      </div>
      <div
        class="info__radio"
        @click="isActiveRadio = 1"
      >
        <div class="info__radio--button">
          <RadioCheckedIcon v-if="isActiveRadio === 1"/>
          <RadioNulledIcon v-else/>
        </div>
        Русский
      </div>
    </div>
    <div class="info-wropper">
      <Next
        v-if="example !== 'Все'"
        @click="handleClick(4, 'next')"
      />
      <Next
        v-else
        @click="handleClick(2, 'next')"
      />
      <button
        class="info-another-btn"
        @click="handleClick(2, 'next')"
      >
        Выбрать пошагово
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Approved from '@/components/global/Info/Approved.vue'
import Back from '@/components/global/Info/Btn/Back.vue'
import Next from '@/components/global/Info/Btn/Next.vue'
import Mark from '@/components/globalUIUI/Info/Mark.vue'
import Title from '@/components/globalUI/Info/Title.vue'
import ArrowDownSmallIcon from '@/components/global/Info/Icons/ArrowDownSmallIcon.vue'
import RadioCheckedIcon from '@/components/global/Info/Icons/RadioCheckedIcon.vue'
import RadioNulledIcon from '@/components/global/Info/Icons/RadioNulledIcon.vue'

const secondIsActive = ref(false)
const secondActiveOption = ref('')

const isActiveRadio = ref(0)

const secondOptions = [
  '01001 договор купли-продажи квартиры (жилого дома)',
  '01002 договор купли-продажи нежилого (помещения)',
  '01003 договор купли-продажи квартиры (жилого дома) с участием представителя',
  '02001 доверенность на покупку жилья',
  '02002 доверенность на распространение а/м',
  '03001 согласия родителей на самостоятельный выезд',
  '03002 согласие на отвод земли',
]
const secondOptionsRef = ref([
  '01001 договор купли-продажи квартиры (жилого дома)',
  '01002 договор купли-продажи нежилого (помещения)',
  '01003 договор купли-продажи квартиры (жилого дома) с участием представителя',
  '02001 доверенность на покупку жилья',
  '02002 доверенность на распространение а/м',
  '03001 согласия родителей на самостоятельный выезд',
  '03002 согласие на отвод земли',
])

const handleChange = ({ target }) => {
  secondOptionsRef.value = secondOptions.filter(item => item.toLowerCase().includes(target.value.trim().toLowerCase()))
}

const handleOptionClick = option => {
  secondActiveOption.value = option
}

const example = ref('Все')
const exampleIsActive = ref('')

const props = defineProps(['active', 'i', 'short', 'progressPrev'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
  // TODO, need to remove this shit
  props.progressPrev(id, move)
}
</script>

<style lang="scss">
.info__step.short {
  height: 50px;
  overflow-y: clip;
}

.info__form-example {
  margin-top: 0;
  white-space: nowrap;
  overflow-x: auto;
}

.info__form--wrapper {
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  color: #24334b;
}

.info-wropper {
  display: flex;
  align-items: center;
  gap: 30px;
}

.info-another-btn {
  font-size: 16px;
  color: #f6f6f6;
  padding: 12.5px 15px;
  background: #3f5984;
  margin-top: 20px;
}

.accordeon {
  input {
    border: none;
    padding: 0;
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 12px 10px;
    box-sizing: border-box;

    &.active {
      border-bottom: 1px solid transparent;
    }
  }
}
</style>
