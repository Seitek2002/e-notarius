<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="3"
    />
    <div class="flex jcsb">
      <Title text="Выбор документа"/>
      <Back
        v-show="!short"
        @click="handleClick(2, 'prev')"
      />
    </div>
    <div class="flex jcsb">
      <div/>
      <Mark
        v-show="!short"
        class="mark"
        text="На основе вашего выбора система покажет вам 1 или несколько вариантов наиболее подходящего документа"
      />
    </div>
    <div class="info__form">
      <div class="info__form--wrapper">
        <Suptitle text="Нотариальное действие"/>
        <!-- <Accordeon v-if="!store.state.typeOfObject" notarius="notariusAction" /> -->
        <div
          v-if="!store.state.typeOfObject"
          class="accordeon"
        >
          <label
            :class="notActionIsActive ? 'active' : ''"
            @click="notActionIsActive = !notActionIsActive"
          >
            <span>{{ notActionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: notActionIsActive }"
            />
          </label>
          <div
            v-show="notActionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in [
                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                'Свидетельствование (подлинности, верности копий и перевода)  ',
                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                'Совершение (исполнительной надписи, протестов)',
                'Обеспечение доказательства',
                'Представление на государственную регистрацию',
              ]"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'notarialActs', data: option}), notActionActiveOption = option, notActionIsActive = !notActionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div
          v-else
          class="accordeon"
        >
          <label
            :class="notActionIsActive ? 'active' : ''"
            @click="notActionIsActive = !notActionIsActive"
          >
            <span>{{ notActionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: notActionIsActive }"
            />
          </label>
          <div
            v-show="notActionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in [
                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                'Свидетельствование (подлинности, верности копий и перевода)  ',
                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                'Выдача (свидетельство наследство)',
                'Представление на государственную регистрацию',
              ]"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'notarialActs', data: option}), notActionActiveOption = option, notActionIsActive = !notActionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="info__form--wrapper">
        <Suptitle text="Вид нотариального действия"/>
        <div
          v-if="store.state.notarialActs !== 'Удостоверение (доверенностей, договоров, фактов и др. сделки)'"
          class="accordeon"
        >
          <label
            :class="typeOfActionIsActive ? 'active' : ''"
            @click="typeOfActionIsActive = !typeOfActionIsActive"
          >
            <span>{{ typeOfActionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: typeOfActionIsActive }"
            />
          </label>
          <div
            v-show="typeOfActionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in ['Доверенности', 'Договоры']"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'typeOfAction', data: option}), typeOfActionActiveOption = option, typeOfActionIsActive = !typeOfActionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div
          v-else
          class="accordeon"
        >
          <label
            :class="typeOfActionIsActive ? 'active' : ''"
            @click="typeOfActionIsActive = !typeOfActionIsActive"
          >
            <span>{{ typeOfActionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: typeOfActionIsActive }"
            />
          </label>
          <div
            v-show="typeOfActionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in ['Доверенности', 'Договоры', 'Соглашение', 'Завещание']"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'typeOfAction', data: option}), typeOfActionActiveOption = option, typeOfActionIsActive = !typeOfActionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="info__form--wrapper">
        <Suptitle text="Действие"/>
        <div
          v-if="store.state.typeOfAction !== 'Доверенности'"
          class="accordeon"
        >
          <label
            :class="actionIsActive ? 'active' : ''"
            @click="actionIsActive = !actionIsActive"
          >
            <span>{{ actionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: actionIsActive }"
            />
          </label>
          <div
            v-show="actionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in ['Получение', 'Управление и распоряжение', 'Продажа']"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'doc', data: option}), actionActiveOption = option, actionIsActive = !actionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div
          v-else
          class="accordeon"
        >
          <label
            :class="actionIsActive ? 'active' : ''"
            @click="actionIsActive = !actionIsActive"
          >
            <span>{{ actionActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: actionIsActive }"
            />
          </label>
          <div
            v-show="actionIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in [
                'Получение',
                'Управление и распоряжение',
                'Продажа',
                'Дарение',
                'Купля',
                'купли/продажи',
                'Аренда',
                'Рента/Мена',
                'Представительство',
                'Восстановление',
                'Отказ',
                'Хранение',
                'Охрана',
                'Регистрация',
              ]"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'doc', data: option}), actionActiveOption = option, actionIsActive = !actionIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <div class="info__form--wrapper">
        <Suptitle text="Нотариальный документ"/>
        <div
          v-if="store.state.doc !== 'Управление и распоряжение'"
          class="accordeon"
        >
          <label
            :class="docIsActive ? 'active' : ''"
            @click="docIsActive = !docIsActive"
          >
            <span>{{ docActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: docIsActive }"
            />
          </label>
          <div
            v-show="docIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in ['Доверенность на получение алиментов']"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'bonusInputs', data: option}), docActiveOption = option, docIsActive = !docIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
        <div
          v-else
          class="accordeon"
        >
          <label
            :class="docIsActive ? 'active' : ''"
            @click="docIsActive = !docIsActive"
          >
            <span>{{ docActiveOption }}</span>
            <ArrowDownSmallIcon
              class="arrow"
              :class="{ active: docIsActive }"
            />
          </label>
          <div
            v-show="docIsActive"
            class="accordeon__select"
          >
            <div
              v-for="option in [
                'Доверенность на управление и распоряжение автотранспортным средством',
                'Доверенность на перегон автомобиля',
                'Доверенность на покупку автомобиля',
              ]"
              :key="option"
              class="accordeon__option"
              @click="store.commit('setKey', {key: 'bonusInputs', data: option}, docActiveOption = option), docIsActive = !docIsActive"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Next @click="handleClick(4, 'next')"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

import ArrowDownSmallIcon from '@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue'
import Approved from '@/components/global/Info/Approved.vue'
import Back from '@/components/global/Info/Btn/Back.vue'
import Next from '@/components/global/Info/Btn/Next.vue'
import Mark from '@/components/globalUIUI/Info/Mark.vue'
import Suptitle from '@/components/globalUIUI/Info/Suptitle.vue'
import Title from '@/components/globalUI/Info/Title.vue'

const notActionIsActive = ref(false)
const notActionActiveOption = ref('Все')

const typeOfActionIsActive = ref(false)
const typeOfActionActiveOption = ref('Все')

const actionIsActive = ref(false)
const actionActiveOption = ref('Все')

const docIsActive = ref(false)
const docActiveOption = ref('Все')

const isActive = ref(false)
const isActiveRadio = ref(0)
const activeOption = ref('ЧН Абылгазиева Нурмира Нарматовна')
const store = useStore()

const props = defineProps(['active', 'i', 'short'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
}

const handleChange = e => {
}
</script>

<style lang="scss">
.accordeon {
  width: 100%;
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
    padding: 12px 10px;
    box-sizing: border-box;

    &.active {
      border-bottom: 1px solid transparent;
    }
  }
}

.arrow.active {
  transform: rotate(180deg);
  transition: 0.3s;
}
</style>
