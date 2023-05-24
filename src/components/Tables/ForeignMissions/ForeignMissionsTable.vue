<template>
  <section class="application-table">
    <div :class="qr === null ? 'table-content' : 'table-content active'">
      <table>
        <thead>
        <tr class="table-wrapper another">
          <th class="table-indicator">
            ФИО
            <Arrowicon/>
          </th>
          <th
            class="table-indicator prof"
            @click="document = !document"
          >
            <Dropdown
              title="Должность"
              :options="firstList"
            />
          </th>
          <th class="table-indicator second-another">
            Дата рождения
            <Arrowicon/>
          </th>
          <th class="table-indicator">
            Мобильный телефон
            <Arrowicon/>
          </th>
          <th class="table-indicator">
            Email
            <Arrowicon/>
          </th> 
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="(_, i) in items"
          :key="i"
          class="table-wrapper"
        >
          <td class="table-item id">
            Биримкулов Нурамир Тагдырович
          </td>
          <td class="table-item number">
            Сотрудник Акимиата
          </td>
          <td class="table-item certificate">
            01.01.2022
          </td>
          <td class="table-item agreement">
            0770 00 00 90
          </td>
          <td class="table-item attorney">
            nur@bk.com
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import Arrowicon from '@/components/icons/Table/ArrowIcon.vue'
import Dropdown from '@/components/Tables/OfferTable/Dropdown.vue'

const document = ref(false)
const qr = ref(null)
const firstList = ref(['Согласие', 'Доверенность', 'Заявление', 'Выдача', 'Копии', 'Факты', 'Свидетельство']) 
defineProps(['items'])
</script>

<style lang="scss">
.application-table {
  max-width: 1115px;
}

.table {
  &-content {
    overflow: auto;
    max-width: 100%;
  }

  &-wrapper {
    display: flex;
    align-items: center;
    padding: 20px 0;
    transition: 0.3s;
    background: #f6f6f6;
    border: 1px solid #f6f6f6;

    &:hover {
      border: 1px solid #cdcdcd;
      background: #fff;
    }

    &.another {
      border: 1px solid #cdcdcd;
      padding: 10px 25px;
      box-sizing: border-box;
      background: #fff;
    }
  }

  &-indicator {
    display: flex;
    align-items: center;
    gap: 13px;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #24334b;
    width: 290px;

    &.prof {
      display: block;
      width: max-content;
    }

    &.second-another {
      width: 140px;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    color: #24334b;

    &.qr {
      width: 80px;
      justify-content: center;
      position: relative;

      svg {
        cursor: pointer;
      }
    }

    &.id {
      width: 320px;
      padding: 16px 24px;
      box-sizing: border-box;
    }

    &.number {
      width: 165px;
      padding: 16px 12px;
    }

    &.certificate {
      // width: 250px;
      // margin-left: 45px;
      padding: 16px 24px;
    }

    &.agreement {
      width: 175px;
      // margin-left: 55px;
      padding: 16px 24px;
    }

    &.attorney {
      padding: 16px 24px;
      width: 240px;
    }

    &.name-cn {
      padding: 16px 24px;
      width: 300px;
    }

    &.name {
      padding: 16px 24px;
      width: 300px;
    }

    &.fulfilled {
      width: 145px;
      padding: 16px 24px;
    }

    &.data-one {
      width: 115px;
      padding: 16px 24px;
    }

    &.data-two {
      padding: 16px 24px;
    }

    &.data-three {
      margin-left: 237px;
    }

    &.duty {
      margin-left: 120px;
      width: 95px;
    }

    &.cause {
      margin-left: 32px;
    }
  }
}

.qr {
  &-block {
    position: absolute;
    width: 200px;
    left: 75px;
    top: -75px;
    background: #ffffff;
    border: 1px solid #efefef;
    box-shadow: 0 10px 20px #e9e9e9;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    z-index: 1;
    padding: 10px 0;
  }

  &-redy {
    font-weight: 600;
    font-size: 14px;
    color: #1baa75;
    padding: 12px 20px;
    cursor: pointer;
  }

  &-text {
    font-weight: 400;
    font-size: 14px;
    color: #24334b;
  }

  &-code {
    font-weight: 600;
    font-size: 14px;
    color: #687c9b;
  }
}
</style>
