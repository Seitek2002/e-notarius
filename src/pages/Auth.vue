<template>
  <section class="auth">
    <h2>Вход в личный кабинет нотариуса</h2>
    <div class="auth__content">
      <LoginAndPassword/>
      <ESI/>
      <Scaner/>
    </div>
  </section>
</template>

<script setup>
import ESI from '@/components/Auth/ESI.vue'
import LoginAndPassword from '@/components/Auth/LoginAndPassword.vue'
import Scaner from '@/components/Auth/Scaner.vue'
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.auth {
  max-width: 520px;
  box-sizing: border-box;
  margin: 80px auto;

  h2 {
    font-weight: 600;
    font-size: 36px;
    text-align: center;
    color: $text-dark-blue;
  }

  &__content {
    margin-top: 50px;
  }

  button.btn {
    width: 100%;
  }
}
</style>
