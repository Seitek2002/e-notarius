<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <div class="hero__left">
          <h1>
            Добро пожаловать в единую платформу
            <span>Электронного нотариата КР</span>
          </h1>
          <div class="hero__item">
            <label
              for="test"
              class="hero__label"
            >
              <p class="hero__login">Логин</p>
              <input
                id="test"
                v-model="loginVal"
                type="text"
                class="hero__input"
              >
            </label>
          </div>
          <div class="hero__item">
            <label class="hero__label">
              <p class="hero__password">Пароль</p>
              <input
                v-model="passwordVal"
                type="password"
                class="hero__input"
              >
            </label>
          </div>
          <img
            src="/src/assets/images/Hero/Captcha.png"
            alt="Captcha-icon"
          >
          <div class="hero__btns">
            <button @click="handleClick">
              Войти
            </button>
            <router-link to="/auth">
              Другие способы входа
            </router-link>
          </div>
          <a
            href="#"
            class="hero__text"
          >Забыли пароль?</a>
        </div>
        <div class="hero__right">
          <img
            src="/src/assets/images/Hero/e-notariat.png"
            alt="notariat-icon"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const loginVal = ref('')
const passwordVal = ref('')
const isErr = ref(false)

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
@import '../../assets/scss/variables.scss';

.hero {
  margin: 100px 0 100px 0;

  //@media only screen and (max-width: 360px) {
  //
  //}

  &__content {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 991px) {
      justify-content: center;
      flex-wrap: wrap;
      gap: 70px;
    }
  }

  &__btns {
    display: flex;
    gap: 35px;
    margin-top: 40px;
    margin-bottom: 20px;
    align-items: center;
    @media screen and (max-width: 991px) {
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
    }

    button {
      background: $text-light-green;
      font-weight: 600;
      font-size: 16px;
      color: $bg-white;
      border: none;
      padding: 14px 99px;

      @media screen and (max-width: 991px) {
        width: 100%;
      }
    }

    a {
      font-weight: 600;
      font-size: 16px;
      text-decoration-line: underline;
      color: $text-dark-blue;
    }
  }

  &__text {
    margin-top: 20px;
    font-weight: 400;
    font-size: 16px;
    text-decoration-line: underline;
    color: $text-dark-blue;
    cursor: pointer;
    @media screen and (max-width: 991px) {
      display: block;
      text-align: center;
    }
  }

  label {
    position: relative;
    margin-bottom: 20px;
    display: block;

    &:focus-within {
      input {
        border: 1px solid $text-light-green;
      }

      p {
        color: $text-light-green;
      }
    }

    input {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: $text-dark-blue;
      padding: 15px;
      background: transparent;
      border: 1px solid $border-gray;
      outline: none;
      box-sizing: border-box;
    }

    p {
      position: absolute;
      top: -24px;
      left: 15px;
      font-weight: 500;
      font-size: 14px;
      color: $text-dark-blue;
      display: inline;
      background: $bg-white;
      padding: 5px;
    }
  }

  &__left {
    h1 {
      max-width: 510px;
      font-weight: 600;
      font-size: 33px;
      color: $text-dark-blue;
      margin-bottom: 40px;
    }

    span {
      color: $text-light-green;
    }

    p {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 20px;
      color: $text-dark-blue;
    }
  }
  &__right img {
    max-width: 100%;
    object-fit: cover;
  }

  &__input {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
  }

  &__login {
    position: absolute;
    top: -10px;
    left: 20px;
    z-index: 1;
    background: $bg-white;
  }

  &__password {
    position: absolute;
    top: -10px;
    left: 20px;
    background: $bg-white;
  }
}
</style>
