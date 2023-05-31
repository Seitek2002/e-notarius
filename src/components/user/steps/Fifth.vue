<template>
  <div class="info__step">
    <Approved
      num="5"
    />
    <div class="flex jcsb">
      <Title text="Сторона 2 (другие участники)"/>
      <Back @click="handleClick(4)"
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

    <Next @click="handleClick(5)"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Approved from '@/components/global/UI/Info/Approved.vue'
import Back from '@/components/global/UI/Info/Btn/Back.vue'
import Minus from '@/components/global/UI/Info/Btn/Minus.vue'
import Next from '@/components/global/UI/Info/Btn/Next.vue'
import Plus from '@/components/global/UI/Info/Btn/Plus.vue'
import FormContent from '@/components/user/steps/FormContent.vue'
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import Title from '@/components/global/UI/Info/Title.vue'

const isActiveParticipants = ref(0)

const props = defineProps(['active', 'i', 'short'])

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id) => {
  emits('handleCustomEvent',id)
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
