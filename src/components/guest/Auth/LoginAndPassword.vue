<template>
  <div class="auth-item">
    <div
      class="auth-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <div>
        <PersonIcon/>
        <h3>Вход через логин и пароль</h3>
      </div>
      <PlusIcon
        v-show="!isActive"
      />
      <MinusIcon
        v-show="isActive"
      />
    </div>

    <div
      v-if="isActive"
      class="auth-item another"
    >
      <label class="personal-number">
        <p class="auth-item__descr">Логин</p>
        <input
          v-model="loginVal"
          type="text"
          class="auth-item__input"
        >
      </label>
      <label class="auth-password">
        <p class="auth-item__descr">Пароль</p>
        <input
          v-model="passwordVal"
          type="password"
          class="auth-item__input"
        >
        <EyesIcon
          class="auth-item__eye"
        />
        <span
          v-show="isErr"
          class="auth-item__forgot"
        >Забыли пароль?</span>
      </label>
      <img
        src="/src/assets/images/Hero/Captcha.png"
        alt="Captcha-icon"
      >

      <button
        class="auth-item__btn"
        @click="handleClick"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import EyesIcon from '@/components/guest/Auth/Icons/EyesIcon.vue'
import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import PersonIcon from '@/components/guest/Auth/Icons/PersonIcon.vue'
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'

const router = useRouter()
const store = useStore()
const loginVal = ref('')
const passwordVal = ref('')
const isErr = ref(false)

const isActive = ref(false)

const handleClick = () => {
  isErr.value = false
  const user = store.state.users.find(item => item.login === loginVal.value && item.password === passwordVal.value)

  if (user) {
    localStorage.setItem('auth-user', JSON.stringify({ ...user, check: true }))
    store.commit('checkUserClient', { ...user, check: true })
    if (user.role === 'notarius') {
      router.push('/order-list-notarius')
    } else {
      router.push('/order-list-user')
    }
  } else {
    isErr.value = true
  }
}

</script>

<style lang="scss" scoped>
.auth-item {
  input {
    background: #FFFFFF;
    border: 1px solid #CDCDCD;
    width: 100%;
  }

  .mark {
    width: 480px;
    margin: 30px 20px 0 20px;
  }

  &.another {
    padding: 40px 20px;
  }

  &__eye {
    position: absolute;
    top: 13px;
    right: 10px;
  }

  &__forgot {
    font-weight: 400;
    font-size: 16px;
    text-decoration-line: underline;
    color: #24334B;
    margin-top: 20px;
    display: block;
  }

  &__btn {
    width: 100%;
    padding: 14px 0;
    background: #1BAA75;
    font-weight: 600;
    font-size: 16px;
    color: #F6F6F6;
    margin-top: 30px;
  }
}
</style>
