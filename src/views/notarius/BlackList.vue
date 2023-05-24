<template>
  <section class="order-list">
    <div class="order-list__top">
      <h2>Ваши заявки</h2>
      <Btn
        title="Оформить заявку"
        bg="#1BAA75"
        :icon="icon"
        @click="router.push('/info-notarius')"
      />
    </div>
    <div class="order-list__table">
      <table>
        <thead>
        <tr>
          <th>QR</th>
          <th>
            <Sort title="Номер реестра"/>
          </th>
          <th>
            <div style="display: flex;">
              ПИН субъекта
            </div>
          </th>
          <th>
            <Sort title="ФИО субъекта"/>
          </th>
          <th>
            <Sort title="Дата рождения"/>
          </th>
          <th>
            <Sort title="Дата ввода"/>
          </th>
          <th>
            <div style="display: flex;">
              Кем создан
            </div>
          </th>
          <th>
            <div style="display: flex;">
              Причина ввода в черный список
            </div>
          </th>
          <th>
            <div style="display: flex;">
              ПИН умершего
            </div>
          </th>
          <th>
            <Sort title="ФИО умершего"/>
          </th>
          <th>
            <Sort title="Дата рождения"/>
          </th>
          <th>
            <div style="display: flex;">
              Место последнего проживания
            </div>
          </th>
          <th>
            <Sort title="Дата смрети"/>
          </th>
          <th>
            <Sort title="Дата создания"/>
          </th>
          <th>
            <div style="display: flex;">
              Кем создан
            </div>
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
          v-for="(offer, i) in paginatedItems"
          :key="i"
        >
          <td>
            <Qr />
          </td>
          <td>125-1563</td>
          <td>20607199701079</td>
          <td>Усеналиев Оморбек Токтошевич</td>
          <td>01.07.1976</td>
          <td>01.01.2022</td>
          <td>ЧН Абдыгулов</td>
          <td>Недееспособный, инвалидность 3-й группы</td>
          <td>20607199701079</td>
          <td>Усеналиев Оморбек Токтошевич</td>
          <td>01.07.1976</td>
          <td>Кыргызстан, Таласская обл., село Арпачы, ул Бакыракай-Ата, ул 25</td>
          <td>01.01.2022</td>
          <td>01.01.2022</td>
          <td>ЧН Абдыгулов</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="order-list__bottom">
      <Pagination
        :items-per-page="6"
        :items="files"
        @paginate="paginate"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

import Btn from '@/components/Buttons/Btn.vue'
import Qr from '@/components/Tables/OfferTable/Qr.vue'
import Sort from '@/components/Tables/OfferTable/Sort.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
const store = useStore()

const router = useRouter()
const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Черный список'))()
})
const typeOfDoc = ['Доверенность', 'Договор', 'Соглашение', 'Завещание']
const isfilter = ref(true)

const files = store.state.tableListNotarius

const paginatedItems = ref(files)

const paginate = data => {
  paginatedItems.value = data.value // paginatedItems.push(data)
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.order-list {
  flex: 1;
  box-sizing: border-box;

  &__actions {
    display: none;
    justify-content: center;

    svg {
      cursor: pointer;
    }
  }

  &__table {
    min-height: 448px;
    overflow-x: scroll;
    max-width: 73vw;
  }

  tr {
    transition: 0.5s;
  }

  table {
    width: 3214px;

    tr {
      height: 80px;
      transition: 0.5s;
    }
  }

  &__top {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 18px;
      color: #1f2937;
    }
  }

  &__bottom {
    margin: 50px auto 0;
    display: flex;
    justify-content: center;
  }
}

.order-list__table {
  table {
    margin-top: 40px;
    border-collapse: collapse;
  
    thead {
      border: 1px solid #cdcdcd;
      border-bottom: 2px solid #cdcdcd;
      height: 64px;
  
      th {
        padding: 22px 13px;
        background: #ffffff;
        font-weight: 600;
        font-size: 16px;
        text-align: center;
        color: #24334b;
        gap: 20px;
      }
    }
  
    tbody {
      tr {
        border: 1px solid transparent;
  
        .order-list__name {
          color: #1BAA75;
        }
  
        &:hover {
          background: #ffffff;
          border-color: #cdcdcd;
        }
  
        td {
          padding: 16px;
          box-sizing: border-box;
          font-weight: 500;
          font-size: 14px;
          color: #24334b;
          text-align: left;
          padding: 22px 13px;
        }
      }
    }
  }
}
</style>
