<template>
  <div class="auth-item">
    <div
      class="auth-item__top"
      :class="isActive ? ' active' : ''"
      @click="isActive = !isActive"
    >
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5ZM12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z"
            fill="#1BAA75"
          />
        </svg>

        <h3>Вход через логин и пароль</h3>
      </div>
      <svg
        v-show="!isActive"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#24334B" />
      </svg>
      <svg
        v-show="isActive"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 12.998H5V10.998H19V12.998Z" fill="white" />
      </svg>
    </div>

    <form @submit.prevent v-if="isActive" class="auth-item another">
      <p v-if="isErr" class="auth-item__warning">
        Неправильный логин или пароль
      </p>
      <label class="personal-number">
        <p class="auth-item__descr">Логин</p>
        <input
          required
          v-model="loginVal"
          type="text"
          class="auth-item__input"
          autocomplete="username"
        />
      </label>
      <label class="auth-password">
        <p class="auth-item__descr">Пароль</p>
        <input
          required
          v-model="password"
          type="password"
          class="auth-item__input"
          autocomplete="current-password"
        />
        <svg
          class="auth-item__eye"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="2"
            stroke="#CDCDCD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 12C19.333 16.667 16 19 12 19C8 19 4.667 16.667 2 12C4.667 7.333 8 5 12 5C16 5 19.333 7.333 22 12"
            stroke="#CDCDCD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </label>
      <span class="auth-item__forgot"> Забыли пароль? </span>
      <img src="/src/assets/images/Hero/Captcha.png" alt="Captcha-icon" />

      <button class="auth-item__btn" @click="handleLogin">Войти</button>
    </form>
  </div>
</template>

<script>
import User from "../../../models/user";

import { useRouter } from "vue-router";
import { mapGetters } from "vuex";

export default {
  name: "LoginAndPassword",
  data() {
    return {
      loading: false,
      message: "",
      isErr: false,
      isActive: false,
      loginVal: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["GET_ROLE"]),
    loggedIn() {
      return this.$store.state.auth.isLoggedIn;
    },
    loginFailure() {
      return this.$store.state.auth.isLoggedIn;
    },
    role() {
      return this.GET_ROLE;
    },
  },
  created() {
    if (this.loggedIn) {
      if (this.role === "ADMINS") {
        this.$router.push("/order-list-user");
      }
    }
  },
  methods: {
    handleLogin() {
      this.isErr = false;
      this.loading = true;

      const user = this.$store.state.users.find(
        (item) =>
          item.login === this.loginVal && item.password === this.password
      );
      if (user) {
        localStorage.setItem(
          "auth-user",
          JSON.stringify({ ...user, check: true })
        );
        this.$store.commit("checkUserClient", { ...user, check: true });
        if (user.role === "notarius") {
          this.$router.push("/order-list-notarius");
          this.loading = false;
        } else {
          this.isErr = true;
          this.loading = false;
        }
      } else {
        this.isErr = true;
        this.loading = false;
      }

      this.loading = false;
    },
    // handleLogin() {
    //   this.loading = true;
    //     if (this.user.username && this.user.password) {
    //       this.$store.dispatch('auth/login', this.user).then(
    //         () => {
    //           this.$router.push('/order-list-user');
    //           /*this.$store.dispatch('auth/getRole', this.user).then();
    //           if(this.role === 'ADMINS'){
    //              this.$router.push('/order-list-user');
    //           } else {
    //             console.log(this.role)
    //            // this.$router.push('/order-list-user');
    //           }*/
    //         },
    //         error => {
    //           this.isErr.value = true
    //           this.loading = false;
    //           this.message =
    //             (error.response && error.response.data && error.response.data.message) ||
    //             error.message ||
    //             error.toString();
    //         }
    //       );
    //     }
    // }
  },
};
</script>

<style lang="scss" scoped>
.auth-item {
  &__warning {
    font-weight: 400;
    color: red;
  }

  &__top.active {
    svg {
      path {
        fill: #fff;
      }
    }
  }
  input {
    background: #ffffff;
    border: 1px solid #cdcdcd;
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
    color: #24334b;
    margin-top: 20px;
    display: block;
  }

  &__btn {
    width: 100%;
    padding: 14px 0;
    background: #1baa75;
    font-weight: 600;
    font-size: 16px;
    color: #f6f6f6;
    margin-top: 30px;
  }
}
</style>
