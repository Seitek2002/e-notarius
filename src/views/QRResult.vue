<template>
  <section class="check">
    <div class="check__container">
      <h1>Проверка достоверности документа</h1>
      <div class="check__content">
        <div class="check__data">
          <div class="check__keys">
            <h2>Наименование</h2>
            <h2>Вид нотариального действия</h2>
            <h2>Статус</h2>
            <h2>Статус подписи</h2>
            <h2>Дата совершения действия</h2>
            <h2>ФИО нотариуса</h2>
            <h2>Уникальный номер реестра</h2>
            <h2>Стороны</h2>
          </div>
          <div class="check__values">
            <p>доверенность на управление и распоряжение автомобилем</p>
            <p>Удостоверение (доверенностей, договоров, фактов и др. сделки)</p>
            <p>Действителен</p>
            <p>Подписан</p>
            <p>01.01.2022 15:05:35</p>
            <p>
              <a
                href="#"
                class="check__another--item"
              >Бишкекский нотариальный округ</a>
            </p>
            <p style="margin-top: 0">
              125-2023-4QwR5
            </p>
            <p>
              <b>Участник-1:</b>
              <br>
              <br>
              Ташматов Акмат Ташматович
              <br>
              <br>
              03.05.1990
              <br>
              <br>
              Кыргызстан, г. Талас ул Манас 22
            </p>
          </div>
        </div>
        <div class="check__doc">
          <img
            :src="approveImg"
            alt=""
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import approveImg from '/AutoLayoutVertical.svg'
</script>

<style lang="scss">
.check {
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  background: #f6f6f6;
  height: 100%;
  width: 100%;

  &__container {
    background: #ffffff;
    box-shadow: 0 10px 40px #e9e9e9;
    max-width: 1040px;
    margin: 0 auto;
    padding: 40px;
    box-sizing: border-box;

    h1 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #24334b;
    }
  }

  &__data {
    display: flex;
    border: 1px solid #cdcdcd;
    padding: 26px 16px;
    margin-top: 40px;

    p {
      margin: 0;
    }

    h2 {
      margin: 0;
    }
  }

  &__keys {
    h2 {
      font-weight: 600;
      font-size: 14px;
      color: #24334b;
      width: 280px;
      height: 64px;
    }
  }

  &__values {
    font-weight: 500;
    font-size: 14px;
    color: #24334b;

    p {
      height: 64px;
      margin-bottom: 0;

      &:last-child {
        margin: 0;
        height: auto;
      }
    }
  }

  &__doc {
    margin-top: 40px;
    display: none;
  }

  &__another--item {
    color: #1baa75;
    text-decoration-line: underline;
  }
}
</style>
