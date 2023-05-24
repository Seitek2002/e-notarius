<template>
  <div :class="short ? 'info__step short' : 'info__step'">
    <Approved
      :is-active="false"
      num="5"
    />
    <div class="flex jcsb">
      <Title text="Сторона 2 (другие участники)"/>
      <Back
        v-show="!short"
        @click="handleClick(3, 'prev')"
      />
    </div>
    <Suptitle text="Количество участников"/>
    <div class="flex jcsb">
      <div class="info__member member flex">
        <div
          v-for="(_, i) in qntyOfParticipants"
          :key="i"
          class="member__qnty"
          :class="isActiveParticipants === i ? ' active' : ''"
          @click="isActiveParticipants = i"
        >
          <span>Участник</span>
          {{ i + 1 }}
        </div>
      </div>
      <div class="flex">
        <Plus @click="incrementMembers"/>
        <Minus @click="decrementMembers"/>
      </div>
    </div>

    <template
      v-for="(_, i) in qntyOfParticipants"
      :key="i"
    >
      <FormContent v-show="isActiveParticipants === i"/>
    </template>

    <Next @click="handleClick(5, 'next')"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Approved from '@/components/Info/Approved.vue'
import Back from '@/components/Info/Btn/Back.vue'
import Minus from '@/components/Info/Btn/Minus.vue'
import Next from '@/components/Info/Btn/Next.vue'
import Plus from '@/components/Info/Btn/Plus.vue'
import FormContent from '@/components/Info/notariusSteps//FormContent/FormContent.vue'
import Suptitle from '@/components/Info/Suptitle.vue'
import Title from '@/components/Info/Title.vue'

const isActive = ref(false)
// const ForeignFace = ref(false)
const isActiveRadio = ref(0)
// const isActiveRadioSec = ref(0)
// const isActiveRadioFace = ref(false)
const activeOption = ref('Н Абылгазиева Нурмира НарматоЧвна')

const items = ref([
  {
    id: 0,
    value: '',
  },
])

const isActiveParticipants = ref(0)

const props = defineProps(['active', 'i', 'short', 'progressPrev'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id, move) => {
  emits('handleCustomEvent', [id, move])
  // TODO, need to remove this shit
  props.progressPrev(id, move)
}

const qntyOfParticipants = ref([
  FormContent,
  FormContent,
  FormContent,
])

const incrementMembers = () => {
  qntyOfParticipants.value.push(FormContent)
}

const decrementMembers = () => {
  if (qntyOfParticipants.value.length !== 1) {
    qntyOfParticipants.value.pop()
  }
}

</script>

<style lang="scss" scoped>
.data {
  margin-top: 40px;
  margin-block: 50px;
}

.info__check-btn {
  margin-top: 10px;
}

.info__form--wrapper {
  width: unset;
}

.address-propiski {
  white-space: nowrap;
}

.w-33 {
  width: 33%;
}

.w-50 {
  width: 50%;
}
</style>
