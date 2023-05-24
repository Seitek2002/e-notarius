<template>
  <section class="attorney">
    <div class="container">
      <h1>Доверенность на вождение и (или) продажу/дарение/мену машины, мотоцикла, автобуса</h1>
      <div class="attorney__content">
        <div class="attorney__wrapper">
          <h2
            class="attorney__title"
            @click="isActive = !isActive"
          >
            Упрощенное описание нотариальной услуги
          </h2>
          <div
            v-if="isActive"
            class="attorney__description"
          >
            <p class="attorney__main-p">
              Доверенность это письменное уполномочие, выдаваемое одним лицом (доверителем) другому лиу (поверенному)
              для представительства перед третьими лицами
            </p>
            <div class="attorney__list">
              <h3>Участники нотариального действия</h3>
              <p>Со стороны "Доверителя":</p>
              <p class="attorney__item">
                1. Собственник/или/Собственник и его законный представитель/или/представитель Собственник по
                доверенности (доверитель по праву передоверия)
              </p>
              <p class="attorney__item">
                2. Сотрудник Опеки и Попечительства - при оформлении доверенности от имени
                несовершеннолетних/недееспообных/ограничено дееспособных.
              </p>
              <p>Примечание:</p>
              <p class="attorney__item">
                1. Для составления и удостоверения доверенности участие поверенного лица не требуется
              </p>
              <p class="attorney__item">
                2. В случае необходимости в сделке допускается участие Переводчика
              </p>
            </div>
          </div>
        </div>
        <div class="attorney__wrapper">
          <h2 class="attorney__title">
            Перечень документов, требуемых для получения услуги с указанием кол-во копии и необходимости предъявления
            оригинальных документов
          </h2>
        </div>
        <div class="attorney__wrapper">
          <h2 class="attorney__title">
            Участники нотариального действия
          </h2>
        </div>
        <div class="attorney__wrapper">
          <h2 class="attorney__title">
            Стоимость получения услуги
          </h2>
        </div>
        <div class="attorney__wrapper">
          <h2 class="attorney__title">
            Сроки получения услуги
          </h2>
        </div>
        <div class="attorney__wrapper">
          <h2 class="attorney__title">
            Конечный результат получения услуги
          </h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(true)

</script>

<style lang="scss">
.attorney {
  h1 {
    text-align: center;
  }

  p {
    font-size: 14px;
  }

  h2 {
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;
    border-bottom: 1px solid #323232;
    padding-bottom: 15px;
  }

  &__list {
    padding: 0 15px;
  }
}
</style>
