<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="8"
    />
    <div class="flex jcsb">
      <Title text="Просмотр и печать документа"/>
    </div>
    <div class="info__description">
      <Suptitle text="Документ"/>
      <p>{{ store.state.bonusInputs }}</p>
    </div>
    <div class="info__form">
      <div class="info__copies">
        <div class="info__copies-qnty flex aic">
          <span class="active">
            <PdfFileIcon/>
          </span>
          <PrintFileIcon @click="print"/>
          <p>Скачать</p>
        </div>
      </div>
      <div class="flex jcsb aic">
        <Suptitle text="Просмотр документа, внесенного в реестр"/>
      </div>
      <div class="info__form--wrapper editor">
        <TextEditor
          :editable="false"
          :approve-img="approveImg"
        />
      </div>
    </div>

    <div class="info__bottom">
      <Next
        title="Завершить"
        @click="handleClick"
      />
      <span>
        <AddNewRequestIcon/>
        Добавить документ в “Мои шаблоны”
      </span>
    </div>
    <span>Документ зарегистрирован в реестре с уникальным номером FS45W</span>
  </div>
</template>

<script setup>
import printJS from 'print-js'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import approveImg from '@/assets/images/approved-full.png'
import Approved from '@/components/global/Info/Approved.vue'
import Next from '@/components/global/Info/Btn/Next.vue'
import Suptitle from '@/components/global/Info/Suptitle.vue'
import Title from '@/components/global/Info/Title.vue'
import TextEditor from '@/components/TextEditor/TextEditor.vue'
import AddNewRequestIcon from '@/components/global/Info/Icons/AddNewRequestIcon.vue'
import PdfFileIcon from '@/components/global/Info/Icons/PdfFileIcon.vue'
import PrintFileIcon from '@/components/global/Info/Icons/PrintFileIcon.vue'

const router = useRouter()
const store = useStore()

const props = defineProps(['active', 'i', 'short'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  router.push('/OrderSend-notarius')
}
const print = () => {
  printJS('/example.pdf')
}
</script>

<style lang="scss" scoped>
.info__form--wrapper {
  width: unset;
}

.info {
  &__copies-qnty {
    span {
      display: flex;
      width: 44px;
      height: 44px;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 16px;
      color: #24334b;

      &.active {
        background: #f6f6f6;
        color: #1baa75;
      }
    }
  }

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
