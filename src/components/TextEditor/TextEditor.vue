<template>
  <div
    v-if="editable"
    class="editor__menu flex aic jcsb"
  >
    <div class="editor__font-family">
      <div
        class="editor__font-family--content flex aic jcsb"
        @click="fontActive = !fontActive"
      >
        {{ selectedFont }}
        <EditorResizeArrows/>
      </div>
      <div
        v-show="fontActive"
        class="editor__font-dropdown"
      >
        <div
          v-for="font in fonts"
          :key="font"
          class="editor__font-option"
          :class="selectedFont === font ? 'active' : ''"
          :style="'font-family: ' + font"
          @click="selectedFont = font"
        >
          {{ font }}
        </div>
      </div>
    </div>
    <div class="editor__font-size">
      <div
        class="editor__font-size--content flex aic jcsb"
        @click="fontSizeActive = !fontSizeActive"
      >
        <input
          v-model="fontSizeSelected"
          type="text"
        >
        <EditorResizeArrows/>
      </div>
      <div
        v-show="fontSizeActive"
        class="editor__font-dropdown"
      >
        <div
          v-for="item in sizes"
          :key="item"
          class="editor__font-option"
          :class="fontSizeSelected === item ? 'active' : ''"
          @click="fontSizeSelected = item"
        >
          {{ item }}
        </div>
      </div>
    </div>
    <div class="editor__font-style flex aic jcsb">
      <EditorBoldIcon @click="editor.chain().toggleBold().focus().run()"/>
      <EditorItalicIcon @click="editor.chain().focus().toggleItalic().run()"/>
      <EditorToggleStrikeIcon @click="editor.chain().focus().toggleStrike().run()"/>
    </div>
    <div class="editor__font-color flex aic jcsb">
      <input
        v-model="setColor"
        type="color"
      >
      <EditorSetColorIcon @click="editor.chain().focus().setColor(setColor).run()"/>
      <EditorToggleHighlightIcon @click="editor.chain().focus().toggleHighlight().run()"/>
    </div>
    <div class="editor__font-formatter flex aic jcsb">
      <EditorListIcon/>
      <EditorToggleBulletsListIcon @click="editor.chain().focus().toggleBulletList().run()"/>
      <EditorSetTextLeftIcon @click="editor.chain().focus().setTextAlign('left').run()"/>
      <EditorSetTextCenterIcon @click="editor.chain().focus().setTextAlign('center').run()"/>
    </div>
    <div class="editor__font-fixes flex aic jcsb">
      <EditorToggleSuperscriptIcon @click="editor.chain().focus().toggleSuperscript().run()"/>
      <EditorToggleSubscriptIcon @click="editor.chain().focus().toggleSubscript().run()"/>
    </div>
    <div class="editor__font-actions flex aic jcsb">
      <EditorSetLinkIcon @click="setLink"/>
      <EditorAddImageIcon @click="addImage"/>
    </div>
  </div>
  <editor-content
    class="text-editor"
    :style="`font-family: ${selectedFont};font-size: ${fontSizeSelected}px;`"
    :editor="editor"
  />
  <img
    style="width: 100%"
    :src="approveImg"
    alt="qr-code"
    draggable="false"
  >
</template>

<script setup>
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import { EditorContent, useEditor } from '@tiptap/vue-3'
import { ref } from 'vue'
import { useStore } from 'vuex'

import EditorResizeArrows from '@/components/TextEditor/Icons/EditorResizeArrows.vue'
import EditorAddImageIcon from '@/components/TextEditor/Icons/EditorAddImageIcon.vue'
import EditorBoldIcon from '@/components/TextEditor/Icons/EditorBoldIcon.vue'
import EditorItalicIcon from '@/components/TextEditor/Icons/EditorItalicIcon.vue'
import EditorListIcon from '@/components/TextEditor/Icons/EditorListIcon.vue'
import EditorSetColorIcon from '@/components/TextEditor/Icons/EditorSetColorIcon.vue'
import EditorSetLinkIcon from '@/components/TextEditor/Icons/EditorSetLinkIcon.vue'
import EditorSetTextCenterIcon from '@/components/TextEditor/Icons/EditorSetTextCenterIcon.vue'
import EditorSetTextLeftIcon from '@/components/TextEditor/Icons/EditorSetTextLeftIcon.vue'
import EditorToggleBulletsListIcon from '@/components/TextEditor/Icons/EditorToggleBulletsListIcon.vue'
import EditorToggleHighlightIcon from '@/components/TextEditor/Icons/EditorToggleHighlightIcon.vue'
import EditorToggleStrikeIcon from '@/components/TextEditor/Icons/EditorToggleStrikeIcon.vue'
import EditorToggleSubscriptIcon from '@/components/TextEditor/Icons/EditorToggleSubscriptIcon.vue'
import EditorToggleSuperscriptIcon from '@/components/TextEditor/Icons/EditorToggleSuperscriptIcon.vue'

const store = useStore()

const props = defineProps(['editable', 'approveImg'])

const editor = useEditor({
  extensions: [
    StarterKit,
    TextStyle,
    Color,
    Highlight,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Superscript,
    Subscript,
    Link,
    Image,
  ],
  content: `
    <h1 style="text-align:center"> ${store.state.bonusInputs} </h1><p style="text-align: right"><strong>Чуйская область, Московский район <br>Двадцатое февраля две тысячи двадцать третьего года</strong></p><p>Я, гражданин Кыргызской Республики <strong>${store.state.choosenApplicant}</strong>,<strong>${store.state.dateOfBirth}</strong> года рождения, ПИН <strong>${store.state.personApplicant.INNVal}</strong>, идентификационная карта <strong>ID1816551</strong> выдана MKK 213021 от <strong>09.09.2020 </strong> года, зарегистрированный по адресу: <strong>Кыргызская Республика, Чуйская область, Московский район, село Беловодское, ул. Каримова 23/16</strong>, владелец автомобиля  <strong>TOYOTA CAMRY</strong> с государственным регистрационным знаком <strong>08КG777ABL</strong>, тип ТС  <strong>легковой</strong>, Кузов <strong>седан</strong>, Тип руля <strong>правый</strong>, Серийный номер <strong>RZN1859011719</strong>, Идентификационный номер (Vin) <strong>RZN1859011719</strong> год <strong>2003</strong>, цвет <strong>белый</strong>. Принадлежащим на основании свидетельства о регистрации ТС/технический паспорт КР0469721 выдан РЭО ДРТС и ВС <strong>Чуйская область, Московский район, село Беловодское</strong>. Состоящим на учете Московском районе </p><p>Настоящей доверенностью уполномочиваю гражданина Кыргызской Республики <strong>Кобаева Эльдияра Эгембердиевича</strong>, <strong>08.08.1989</strong> года рождения, ПИН <strong>208081989000666</strong>, зарегистрированного по адресу: <strong>Кыргызская Республика, г. Бишкек , Октябрьский р-н, микрорайон 4, дом 4а , кв. 97</strong>. Быть представителем в государственных, административных и иных учреждениях, организациях и органах независимо от их организационно-правовой формы (в том числе в органах регистрации транспортных средств, органах автомобильной инспекции), в таможенных органах (для получения справки, информацию о вышеуказанной автомашине) а также перед гражданами, при управлении и распоряжении указанным ТС, с правом выезда за пределы Кыргызской Республики.  Для чего предоставляю ему право совершать следующие действия: совершать все разрешенные законом сделки, в частности: продавать или обменивать, или закладывать, или предоставлять в аренду, определяя во всех случаях суммы, сроки и другие условия по своему усмотрению с правом определения порядка удовлетворения требований залогодержателя по своему усмотрению, прекратить любое обязательство предоставлением взамен исполнения отступного или любым иным способом; подавать заявления, расписываться за меня (в том числе, и под договорами отчуждения, залога, соглашений об удовлетворении требований залогодержателя во внесудебном порядке, аренды и др.), получать расчеты по заключенным сделкам, в том числе арендные платежи, с правом заключения договоров об оказании услуг. Доверенность выдана С <strong>ПРАВОМ</strong> передоверия. Срок действия доверенности <strong>ТРИ МЕСЯЦА</strong>. Смысл и значение настоящей доверенности мне нотариусом разъяснены и соответствуют моим намерениям. Содержание статьи 206 Гражданского кодекса Кыргызской Республики, в части прекращения и отмены доверенности лицом, выдавшим ее, отказа лица, которому выдана доверенность, нотариусом разъяснено. </p><p>Подпись ______________________</p><p>«20» февраля 2023 года, настоящая доверенность удостоверена мной, <strong>Абдыгуловым Баяманом Алыкуловичем</strong>, нотариусом Московской нотариальной конторы. </p><p>Доверенность подписан гр. <strong>Бегалиевым Сейтеком Улугбековичем</strong>, в моем присутствии. Личность   установлена, дееспособность проверена. </p><p>Зарегистрировано в реестре за ___________</p><p>Взыскано государственной пошлины 50 сом</p><p>Нотариус _________________________</p><p>(подпись)</p>
  `,
  autofocus: false,
  editable: !!props.editable,
  injectCSS: true,
})

const setColor = ref('#000000')

const fontActive = ref(false)
const selectedFont = ref('Times New Roman')
const fonts = ref(['Times New Roman', 'Arial', 'Lucida Sans', 'Gill Sans', 'Calibri', 'Verdana'])

const fontSizeActive = ref(false)
const fontSizeSelected = ref(14)
const sizes = ref([8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 24, 26, 28, 30])

const setLink = ({ target }) => {
  editor.value.commands.toggleLink({ href: prompt('URL') })
}

const addImage = () => {
  const url = window.prompt('URL')

  if (url) {
    editor.value.chain().focus().setImage({ src: url }).run()
  }
}

</script>

<style lang="scss">
.ProseMirror p {
  text-indent: 25px;
  line-height: 140%;
}

.ProseMirror {
  text-align: justify;
  padding: 0 15px;
  box-sizing: border-box;
  outline: none;
}
</style>
