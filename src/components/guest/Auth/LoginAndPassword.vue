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
          v-model="user.username"
          type="text"
          class="auth-item__input"
        >
      </label>
      <label class="auth-password">
        <p class="auth-item__descr">Пароль</p>
        <input
          v-model="user.password"
          type="password"
          class="auth-item__input"
        >
        <EyesIcon
          class="auth-item__eye"
        />
        <span
          v-show="!loginFailure"
          class="auth-item__forgot"
        >Забыли пароль?</span>
      </label>
      <img
        src="/src/assets/images/Hero/Captcha.png"
        alt="Captcha-icon"
      >

      <button
        class="auth-item__btn"
        @click="handleLogin"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script >

import User from '../../../models/user';

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore, mapGetters } from 'vuex'

import EyesIcon from '@/components/guest/Auth/Icons/EyesIcon.vue'
import MinusIcon from '@/components/guest/Auth/Icons/MinusIcon.vue'
import PersonIcon from '@/components/guest/Auth/Icons/PersonIcon.vue'
import PlusIcon from '@/components/guest/Auth/Icons/PlusIcon.vue'
import errors from "vue3-qrcode-reader";

const router = useRouter()
const store = useStore()
export default {
  name: 'LoginAndPassword',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: '',
      isErr : ref(false),
      isActive : ref(false)
    };
  },
  computed: {
    ...mapGetters('auth',['GET_ROLE']),
    loggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
    loginFailure(){
      return this.$store.state.auth.isLoggedIn;
    },
    role() {
      return this.GET_ROLE;
    }
  },
  created() {
    if (this.loggedIn) {
      if(this.role === 'ADMINS'){
        this.$router.push('/order-list-user');
      }
    }
  },
  methods: {
    errors,
    handleLogin() {
      this.loading = true;
        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/order-list-user');
              /*this.$store.dispatch('auth/getRole', this.user).then();
              if(this.role === 'ADMINS'){
                 this.$router.push('/order-list-user');
              } else {
                console.log(this.role)
               // this.$router.push('/order-list-user');
              }*/
            },
            error => {
              this.isErr.value = true
              this.loading = false;
              this.message =
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
    }
  }
};

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
