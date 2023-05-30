<template>
  <div class="info__step">
    <Approved num="1" />
    <div class="flex jcsb">
      <Title text="Выбор заявителя" />
    </div>
    <Suptitle text="Количество участников" />
    <div class="flex jcsb">
      <div class="info__member member flex">
        <div v-for="(_, i) in qntyOfParticipants" :key="i" class="member__qnty"
          :class="isActiveParticipants === i ? ' active' : ''" @click="isActiveParticipants = i">
          <span>Участник</span>
          {{ i + 1 }}
        </div>
      </div>
      <div class="flex">
        <Plus @click="incrementMembers" />
        <Minus @click="decrementMembers" />
      </div>
    </div>

    <template v-for="(_, i) in qntyOfParticipants" :key="i">
      <FormContentFirst v-show="isActiveParticipants === i" />
    </template>

    <Next @click="handleClick(1)" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import Approved from '@/components/global/UI/Info/Approved.vue'
import Minus from '@/components/global/UI/Info/Btn/Minus.vue'
import Next from '@/components/global/UI/Info/Btn/Next.vue'
import Plus from '@/components/global/UI/Info/Btn/Plus.vue'
import FormContentFirst from '@/components/notarius/steps/FormContent/FormContentFirst.vue'
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import Title from '@/components/global/UI/Info/Title.vue'

const isActiveParticipants = ref(0)

const emits = defineEmits(['handleCustomEvent'])

const handleClick = (id) => {
  emits('handleCustomEvent',id)
}

const qntyOfParticipants = ref([
  FormContentFirst,
  FormContentFirst,
  FormContentFirst,
])

const incrementMembers = () => {
  qntyOfParticipants.value.push(FormContentFirst)
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
