<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="6"
    />
    <div class="flex jcsb">
      <Title text="Дополнительные данные"/>
      <Back
        v-show="!short"
        @click="handleClick(4, 'prev')"
      />
    </div>
    <Suptitle text="Количество дополнительных данных"/>
    <div class="flex jcsb">
      <div class="info__member member flex">
        <div
          v-for="(_, i) in allInputs"
          :key="i"
          class="member__qnty"
          :class="isActiveForm === i ? ' active' : ''"
          @click="isActiveForm = i"
        >
          <span>Данные</span>
          {{ i + 1 }}
        </div>
      </div>
      <div class="flex">
        <Plus @click="increment"/>
        <Minus @click="decrement"/>
      </div>
    </div>

    <template
      v-for="(_,i) in allInputs"
      :key="i"
    >
      <FormContentSix v-show="isActiveForm === i"/>
    </template>

    <Next @click="handleClick(6, 'next')"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Approved from '@/components/global/UI/Info/Approved.vue'
import Back from '@/components/global/UI/Info/Btn/Back.vue'
import Minus from '@/components/global/UI/Info/Btn/Minus.vue'
import Next from '@/components/global/UI/Info/Btn/Next.vue'
import Plus from '@/components/global/UI/Info/Btn/Plus.vue'
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import Title from '@/components/global/UI/Info/Title.vue'

import FormContentSix from '../FormContent/FormContentSix.vue'

const router = useRouter()
const store = useStore()

const isActiveForm = ref(0)

const props = defineProps(['active', 'i', 'short', 'progressPrev'])

const emits = defineEmits(['handleCustomEvent'])

const allInputs = ref([
  FormContentSix,
])

const increment = () => {
  allInputs.value.push(FormContentSix)
}

const decrement = () => {
  if (allInputs.value.length !== 1) {
    allInputs.value.pop()
  }
}

const handleClick = (id, move) => {
  emits('handleCustomEvent',id)
  
}
</script>

<style lang="scss" scoped>
hr {
  margin: 0;
}

.inputNumberAuto:first-child {
  border: 1px solid #1baa75;
  width: 460px;
  height: 36px;
}

.inputNumberAuto {
  border: 1px solid #1baa75;
  width: 460px;
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
</style>
