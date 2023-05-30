<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="7"
    />
    <div class="flex jcsb">
      <Title text="Просмотр документа"/>
      <Back
        v-show="!short"
        @click="handleClick(7, 'prev')"
      />
    </div>
    <div class="info__description">
      <Suptitle text="Документ"/>
      <p>Доверенность на управление и распоряжение автотранспортным средством</p>
    </div>
    <div class="info__form">
      <div class="flex jcsb aic">
        <Suptitle text="Текстовый редактор"/>
        <a
          href="#"
          class="info__download-pdf flex aic"
        >
          <PdfFileIcon/>
          Скачать PDF
        </a>
      </div>
      <div class="info__form--wrapper editor">
        <TextEditor
          :editable="true"
          :approve-img="approveImg"
        />
      </div>
    </div>
    <Next
      title="Подтвердить"
      @click="handleClick"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import approveImg from '@/assets/images/approved.png'

import PdfFileIcon from '@/components/global/UI/Info/Icons/PdfFileIcon.vue'
import Approved from '@/components/global/UI/Info/Approved.vue'
import Back from '@/components/global/UI/Info/Btn/Back.vue'
import Next from '@/components/global/UI/Info/Btn/Next.vue'
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import Title from '@/components/global/UI/Info/Title.vue'
import TextEditor from '@/components/TextEditor/TextEditor.vue'

const router = useRouter()
const store = useStore()

defineProps(['short'])
const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  if(id, move) {
    emits('handleCustomEvent',id)
  } else {
    store.commit('pushNewItemUser')
    router.push('/OrderSend-user')
  }
}

</script>

<style lang="scss">
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
</style>
