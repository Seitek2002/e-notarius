<template>
  <section class="application-table">
    <div :class="qr === null ? 'table-content' : 'table-content active'">
      <table>
        <thead>
          <tr>
            <th>
              QR
            </th>
            <th>
              ID
              <Arrowicon />
            </th>

            <th>
              Номер реестра
              <Arrowicon />
            </th>
            <th @click="document = !document">
              <Dropdown title="Нотариальное действие" :options="firstList" />
            </th>
            <th>
              Вид действия
              <FilterActiveIcon />
            </th>
            <th>
              <Dropdown title="Вид документа" :options="secondList" />
            </th>
            <th>
              Обратившееся лицо
              <Arrowicon />
            </th>

            <th>
              <Dropdown title="Статус" :options="thirdList" />
            </th>
            <th>
              Дата создания
              <Arrowicon />
            </th>
            <th>
              Дата добавления в реестр
              <Arrowicon />
            </th>

            <th>
              Дата отмены
              <Arrowicon />
            </th>
            <th>
              Пошлина
            </th>
            <th>
              Причина
            </th>
          </tr>
        </thead>
        <!-- <ApplicationTableBlock  /> -->
        <tbody>
          <tr v-for="(item, i) in store.state.registryOfNotariusAction" :key="i">
            <td>
              <div v-show="qr === i">
                <span>Отсканируйте QR-код</span>
                <Qr />
                <span>A5D75</span>
                <span @click="qr = null">Закрыть</span>
              </div>
              <QrCodeDisableIcon v-if="qr !== i" @click="qr = i" />
              <QrCodeEnableIcon v-else @click="qr = null" />
            </td>
            <td>
              {{ item.id }}
            </td>
            <td>
              {{ item.registryNumber }}
            </td>
            <td>
              {{ item.notariusAction }}
            </td>
            <td>
              {{ item.typeOfAction }}
            </td>
            <td>
              {{ item.typeOfDocument }}
            </td>
            <td>
              {{ item.applicant }}
            </td>
            <td>
              {{ item.status }}
            </td>
            <td>
              {{ item.dateOfCreating }}
            </td>
            <td>
              {{ item.dateOfAdd }}
            </td>
            <td>
              {{ item.dateOfCancel }}
            </td>
            <td>
              {{ item.duty }}
            </td>
            <td>
              {{ item.cause }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'

import FilterActiveIcon from '@/components/global/Tables/Icons/FilterActiveIcon.vue'
import QrCodeDisableIcon from '@/components/global/Tables/Icons/QrCodeDisableIcon.vue'
import QrCodeEnableIcon from '@/components/global/Tables/Icons/QrCodeEnableIcon.vue'
import Arrowicon from '@/components/icons/Table/ArrowIcon.vue'
import Dropdown from '@/components/global/Tables/OfferTable/Dropdown.vue'
import Qr from '@/components/icons/Table/Qr.vue'


const store = useStore()
const document = ref(false)
const qr = ref(null)
const firstList = ref(['Согласие', 'Доверенность', 'Заявление', 'Выдача', 'Копии', 'Факты', 'Свидетельство'])
const secondList = ref(['Согласие', 'Доверенность', 'Заявление', 'Выдача', 'Копии', 'Факты', 'Свидетельство'])
const thirdList = ref(['Исполнен', 'На разъяснении', 'В обработке', 'Отменен', 'Отклонен', 'На исполнении'])
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
    transition: .3s;
    background: #F6F6F6;
    border: 1px solid #F6F6F6;

    &:hover {
      border: 1px solid #cdcdcd;
      background: #fff;
    }

    &.another {
      border: 1px solid #cdcdcd;
      padding: 0;
      padding-right: 60px;
      background: #fff;
    }
  }

  &-indicator {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 10px 25px;
    text-align: left;
    font-weight: 600;
    font-size: 16px;
    color: #24334B;
    width: max-content;

    &.another {
      gap: 110px;
      margin-right: 50px;
      width: 215px;
    }

    &.second-another {
      gap: 95px;
    }
  }

  &-item {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    color: #24334B;

    &.qr {
      width: 80px;
      justify-content: center;
      position: relative;

      svg {
        cursor: pointer;
      }
    }

    &.id {
      width: 75px;
      margin-left: 15px;
    }

    &.number {
      width: 165px;
      margin-left: 25px;
    }

    &.certificate {
      width: 250px;
      margin-left: 45px;
    }

    &.agreement {
      width: 175px;
      margin-left: 55px;
    }

    &.attorney {
      margin-left: 30px;
      width: 240px;
    }

    &.name-cn {
      margin-left: 70px;
      width: 300px;
    }

    &.name {
      margin-left: 10px;
      width: 300px;
    }

    &.fulfilled {
      width: 145px;
      margin-left: 40px;
    }

    &.data-one {
      width: 115px;
    }

    &.data-two {
      margin-left: 90px;
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
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    box-shadow: 0 10px 20px #E9E9E9;
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
    color: #1BAA75;
    padding: 12px 20px;
    cursor: pointer;
  }

  &-text {
    font-weight: 400;
    font-size: 14px;
    color: #24334B;
  }

  &-code {
    font-weight: 600;
    font-size: 14px;
    color: #687C9B;
  }
}
</style>
