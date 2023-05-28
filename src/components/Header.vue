<template>
  <header class="header">
    <div class="header__content">
      <RouterLink to="/" class="header__logo">
        <logo />
      </RouterLink>
      <nav>
        <a href="#notariuses">О нас</a>
        <a href="#notariuses">Нотариусы</a>
        <a href="#faq">Вопросы-ответы</a>
        <a href="#acts">Нормативные акты</a>
      </nav>
      <div class="header__action">
        <RouterLink to="/auth">
          <own-room />
          Личный кабинет нотариуса
        </RouterLink>
        <div class="header__lang--wrapper">
          <Lang />
        </div>
      </div>
      <div class="header__burger">
        <div class="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>
          <div class="menu__box">
            <div class="nav__logo">
              <RouterLink to="/" class="header__logo">
                <logo />
              </RouterLink>
              <div class="nav__cab">
                <RouterLink to="/auth">
                  <own-room />
                  Личный кабинет нотариуса
                </RouterLink>
              </div>
            </div>
            <div class="nav-wrapper">
              <a href="#notariuses">О нас</a>
              <a href="#notariuses">Нотариусы</a>
              <a href="#faq">Вопросы-ответы</a>
              <a href="#acts">Нормативные акты</a>
            </div>
            <div class="nav-cab">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 20H4V17C4 14.3 9.3 13 12 13C13.5 13 15.9 13.4 17.7 14.3C16.9 14.6 16.3 15 15.7 15.5C14.6 15.1 13.3 14.9 12 14.9C9 14.9 5.9 16.4 5.9 17V18.1H14.2C14.1 18.5 14 19 14 19.5V20ZM12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 4C9.8 4 8 5.8 8 8C8 10.2 9.8 12 12 12C14.2 12 16 10.2 16 8C16 5.8 14.2 4 12 4Z"
                  fill="white"
                />
                <path
                  d="M19.5 23C21.4 23 23 21.4 23 19.5C23 17.6 21.4 16 19.5 16C17.6 16 16 17.6 16 19.5C16 21.4 17.6 23 19.5 23Z"
                  fill="white"
                />
              </svg>
              Личный кабинет нотариуса
            </div>
            <div class="nav-lang">
              <div class="nav-rus act">Рус</div>
              <div class="nav-k">Кыр</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from "vue-router";

import logo from "@/components/icons/Header/logo.vue";
import Lang from "@/components/global/UI/Lang/Lang.vue";
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}
.header__burger {
  display: none;
}
@media screen and (max-width: 991px) {
  .header__burger {
    display: block;
  }
}
.act {
  background: #1baa75;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #ffffff;
  padding: 16px 18px;
  width: 66px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.nav-lang {
  display: flex;
  align-items: center;
  div {
    margin-right: 10px;
  }
  display: none;
}
/* стилизуем кнопку */
.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 16px;
  right: 30px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 5;
}
/* добавляем "гамбургер" */
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #616161;
}
.nav__logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav__cab {
  margin-right: 84px;
}
.nav-cab {
  background: #1baa75;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 30px;
  color: #ffffff;
  display: none;
}
.nav-cab svg {
  margin-right: 10px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
/* контейнер меню */
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  margin: 0;
  background-color: #eceff1;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
}
#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
#menu__toggle:checked ~ .menu__box {
  visibility: visible;
  left: 0;
}

.nav {
  display: none;
  background: White;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  &__logo {
    margin-top: 6px;
    margin-left: 20px;
  }
  &__cab {
    font-weight: 500;
    font-size: 16px;
    color: $text-dark-blue;
  }
}
.nav-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 40px;
}
.nav-wrapper a {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #24334b;
  margin-top: 30px;
}
@media screen and (max-width: 991px) {
  .nav {
    display: block;
    overflow: hidden;
  }
}

.header {
  padding: 20px 60px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 991px) {
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

    @media screen and (max-width: 991px) {
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
@media screen and (max-width: 546px) {
  .header__action {
    display: none;
  }
}
@media screen and (max-width: 515px) {
  .nav__cab {
    display: none;
  }
  .nav-cab {
    display: block;
  }
  .nav-lang {
    display: flex;
  }
}
</style>
