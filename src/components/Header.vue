<template>
  <header class="header">
    <div class="header__content">
      <RouterLink
        to="/"
        class="header__logo"
      >
        <logo/>
      </RouterLink>
      <nav>
        <a href="#notariuses">О нас</a>
        <a href="#notariuses">Нотариусы</a>
        <a href="#faq">Вопросы-ответы</a>
        <a href="#acts">Нормативные акты</a>
      </nav>
      <div class="header__action">
        <RouterLink to="/auth">
          <own-room/>
          Личный кабинет нотариуса
        </RouterLink>
        <div class="header__lang--wrapper">
          <Lang/>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import logo from '@/components/icons/Header/logo.vue'
import Lang from '@/components/global/Lang/Lang.vue'
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.header {
  padding: 20px 60px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 991px){
    &__lang--wrapper {
      display: none;
    }
  }

  a {
    font-weight: 500;
    font-size: 16px;
    color: $text-dark-blue;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 991px){
      display: none;
    }
  }

  &__action {
    display: flex;
    gap: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

}
</style>
