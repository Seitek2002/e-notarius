<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <logo/>
          E-notariat
        </div>
        <div class="footer__right">
          <ul>
            <li>Общество</li>
            <li>About Us</li>
            <li>Guidelines and how to</li>
            <li>Quote from the best</li>
            <li>How to start a blog</li>
          </ul>
          <ul>
            <li>Образец</li>
            <li>About Us</li>
            <li>Guidelines and how to</li>
            <li>Quote from the best</li>
            <li>How to start a blog</li>
          </ul>
          <ul>
            <li>Ресурсы</li>
            <li>Accessibility</li>
            <li>Usability</li>
            <li>Marketplace</li>
            <li>Design & Dev</li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__analys">
          <analys/>
          2023 E-Notariat Все права защищены
        </div>
        <div class="footer__icons">
          <a href="#">
            <facebook/>
          </a>
          <a href="#">
            <instagram/>
          </a>
          <a href="#">
            <whatsup/>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import analys from '@/components/icons/Footer/analys.vue'
import facebook from '@/components/icons/Footer/facebook.vue'
import instagram from '@/components/icons/Footer/instagram.vue'
import logo from '@/components/icons/Footer/logo.vue'
import whatsup from '@/components/icons/Footer/whatsup.vue'
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.footer {
  background: $text-light-green;
  color: $bg-white;
  padding: 48px 0;

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__icons {
    display: flex;
    gap: 25px;
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }

  &__bottom {
    margin-top: 64px;
    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
  }

  &__bottom,
  &__analys {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &__analys {
    gap: 32px;
    @media screen and (max-width: 768px) {
      gap: 20px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &__right {
    display: flex;
    @media screen and (max-width: 768px) {
      justify-content: space-between;
    }
    @media screen and (max-width: 560px) {
      flex-direction: column;
    }
    ul {
      margin-left: 30px;
      margin-top: 0;
      @media screen and (max-width: 768px) {
        margin-bottom: 0;
        margin-left: 0;
      }
    }
  }

  ul {
    li {
      font-weight: 400;
      font-size: 16px;
      color: $text-white;
      margin-top: 20px;

      &:first-child {
        font-weight: 600;
        font-size: 20px;
        color: $bg-white;
        margin-bottom: 26px;
        @media screen and (max-width: 768px) {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>