<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="7"
    />
    <div class="flex jcsb">
      <Title text="Просмотр и редактирование документа"/>
      <Back
        v-show="!short"
        @click="back(5,'prev')"
      />
    </div>
    <div class="info__description">
      <Suptitle text="Документ"/>
      <p>{{ store.state.bonusInputs }}</p>
    </div>
    <div class="info__form">
      <div class="flex jcsb aic">
        <Suptitle text="Текстовый редактор"/>
      </div>
      <div class="info__form--wrapper editor">
        <TextEditor
          :editable="true"
          :approve-img="approveImg"
        />
      </div>
      <div class="info__form-copy form-copy">
        <Suptitle text="Выберите количество копий"/>
        <div class="form-copy__action">
          <Plus @click="qntyCopy++"/>
          <span>{{ qntyCopy }}</span>
          <Minus @click="qntyCopy !== 1 ? qntyCopy-- : null"/>
        </div>
      </div>
      <div class="info__form--wrapper edit-step">
        <Suptitle text="Перейдите к этапу для внесения изменений"/>
        <div class="edit-step__content">
          <template
            v-for="(item, i) in progress"
            :key="i"
          >
            <span
              class="info__circle"
              @click="back(i, item)"
            >
              {{ i + 1 }}
            </span>
          </template>
        </div>
      </div>
    </div>

    <div class="info__bottom">
      <Next
        title="Внести в реестр"
        @click="handleClick"
      />
      <span>
        <AddNewRequestIcon/>
        Добавить документ в “Мои шаблоны”
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import approveImg from '@/assets/images/approved.png'
import Approved from '@/components/global/UI/Info/Approved.vue'
import Minus from '@/components/global/UI/Info/Btn/Minus.vue'
import Next from '@/components/global/UI/Info/Btn/Next.vue'
import Plus from '@/components/global/UI/Info/Btn/Plus.vue'
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import Title from '@/components/global/UI/Info/Title.vue'
import TextEditor from '@/components/TextEditor/TextEditor.vue'
import AddNewRequestIcon from '@/components/global/UI/Info/Icons/AddNewRequestIcon.vue'

const store = useStore()
const qntyCopy = ref(1)

const props = defineProps(['active', 'i', 'short', 'progressPrev'])
const progress = ref(Array(6).fill('prev'))
const emits = defineEmits(['handleCustomEvent'])

const handleClick = () => {
  store.commit('setIsSubmit', true)
}

const back = (id, move) => {
  emits('handleCustomEvent',id)
}
</script>

<style lang="scss" scoped>
.info__form--wrapper {
  width: unset;
}

.info {
  &__bottom {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 30px;

    .next-btn {
      margin-top: 0;
    }

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #1baa75;
      font-weight: 600;
      font-size: 16px;
    }
  }

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

.form-copy {
  &__action {
    margin-top: 15px;
    display: flex;
    gap: 32px;
    align-items: center;
  }
}

.edit-step {
  &__content {
    margin-top: 15px;
    display: flex;
    gap: 10px;

    span {
      display: flex;
      width: 44px;
      height: 44px;
      border: 2px solid #1baa75;
      align-items: center;
      font-weight: 600;
      font-size: 18px;
      justify-content: center;
      color: #1baa75;
      border-radius: 100%;
      cursor: pointer;
    }
  }
}
</style>
