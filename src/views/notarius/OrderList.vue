<template>
  <section class="order-list">
    <div class="order-list__top">
      <h2>Нотариальные действия</h2>
      <Btn
        title="Создать действия"
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
            <Dropdown
              title="Вид действия"
              :options="typeOfDoc"
            />
          </th>
          <th>
            <Dropdown
              title="Вид документа"
              :options="typeOfDoc"
            />
          </th>
          <th>
            <Dropdown
              title="Статус"
              :options="typeOfDoc"
            />
          </th>
          <th>
            <Sort title="Дата"/>
          </th>
          <th>
            <Dropdowns
              title="Исполнитель"
              :options="typeOfDoc"
            />
          </th>
        </tr>
        </thead>

        <tbody>
        <tr
          v-for="(offer, i) in paginatedItems"
          :key="i"
        >
          <td
            class="qr-code"
            :class="qrActive ? ' active' : ''"
            @click="qrActive = !qrActive, qrAnother = 'asdaf'"
          >
            <Qr
              class="qr"
              :i="i"
            />
          </td>
          <td>{{ offer.typeOfDoc }}</td>
          <td>Доверенность</td>
          <td>{{ offer.status }}</td>
          <td>{{ offer.date }}</td>
          <td>
            <div class="order-list__name">
              {{ offer.executer }}
            </div>
            <div class="order-list__actions">
              <OfferIcon/>
              <EditIcon/>
              <DownloadIcon/>
              <RemoveIcon/>
            </div>
          </td>
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
import DownloadIcon from '@/components/icons/Table/DownloadIcon.vue'
import EditIcon from '@/components/icons/Table/EditIcon.vue'
import OfferIcon from '@/components/icons/Table/OfferIcon.vue'
import RemoveIcon from '@/components/icons/Table/RemoveIcon.vue'
import Dropdown from '@/components/Tables/OfferTable/Dropdown.vue'
import Dropdowns from '@/components/Tables/OfferTable/Dropdowns.vue'
import Qr from '@/components/Tables/OfferTable/Qr.vue'
import Sort from '@/components/Tables/OfferTable/Sort.vue'
import Pagination from '@/components/Pagination/Pagination.vue'

const qrActive = ref(false)
const store = useStore()
const qrAnother = ref('Asdf')

const router = useRouter()
const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Нотариальное действие'))()
})
const typeOfDoc = ['Доверенность', 'Договор', 'Соглашение', 'Завещание']
const isfilter = ref(true)

const files = store.state.tableListNotarius

const paginatedItems = ref(files)

const paginate = data => {
  paginatedItems.value = data.value // paginatedItems.push(data)
}
</script>

<style lang="scss">
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
  }

  tr {
    transition: 0.5s;

  }

  table {
    tr {
      height: 80px;
      transition: 0.5s;

      &:hover {
        td {
          .order-list__name {
            display: none;
          }

          .order-list__actions {
            display: flex;
            align-items: center;
            gap: 26px;
          }
        }
      }
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
    text-align: center;
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


.qr-code {
  position: relative;
}

</style>
