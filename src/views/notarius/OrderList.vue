<template>
  <section class="order-list">
    <div class="order-list__top">
      <h2>Нотариальные действия</h2>
      <Btn
        title="Создать действия"
        bg="#1BAA75"
        @click="router.push('/info-notarius')"
      />
    </div>
    <div class="order__adaptive">
      <div class="order__left">
        <label class="tooltip">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
              stroke="#1BAA75"
              stroke-width="2"
            />
            <path
              d="M10.9998 16.9996C11.6625 16.9996 12.1998 16.4624 12.1998 15.7996C12.1998 15.1369 11.6625 14.5996 10.9998 14.5996C10.3371 14.5996 9.7998 15.1369 9.7998 15.7996C9.7998 16.4624 10.3371 16.9996 10.9998 16.9996Z"
              fill="#1BAA75"
            />
            <path
              d="M8.75 7.2497C8.75005 6.85567 8.85358 6.46856 9.05023 6.1271C9.24688 5.78565 9.52975 5.50183 9.87054 5.30403C10.2113 5.10623 10.5981 5.0014 10.9921 5.00001C11.3861 4.99863 11.7736 5.10075 12.1158 5.29616C12.458 5.49156 12.7428 5.77339 12.9418 6.11346C13.1409 6.45353 13.2471 6.8399 13.2499 7.23392C13.2528 7.62794 13.152 8.0158 12.9579 8.35867C12.7637 8.70155 12.4829 8.98743 12.1436 9.1877C11.5736 9.5249 11 10.0373 11 10.6997V12.1997"
              stroke="#1BAA75"
              stroke-width="2"
              stroke-linecap="round"
            /></svg
          ><input type="checkbox" /><span
            >Таблицу можно скролить по<br />
            горизонтали либо Вы можете<br />
            использовать кнопки для<br />
            перемещения по таблице<svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.64645 6.35355L17.9602 17.6673"
                stroke="#1BAA75"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.35355 17.3536L17.6673 6.03985"
                stroke="#1BAA75"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              /></svg
          ></span>
        </label>
      </div>
      <div class="order__right">
        <svg
          @click="handleScrollLeft"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <g clip-path="url(#clip0_2412_22742)">
            <path
              d="M22 16L18 20L22 24"
              stroke="#1BAA75"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </g>
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
          <defs>
            <clipPath id="clip0_2412_22742">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(28 12) rotate(90)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          @click="handleScrollRight"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0.5" y="0.5" width="39" height="39" fill="white" />
          <g clip-path="url(#clip0_2412_22746)">
            <path
              d="M18 24L22 20L18 16"
              stroke="#1BAA75"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </g>
          <rect x="0.5" y="0.5" width="39" height="39" stroke="#EFEFEF" />
          <defs>
            <clipPath id="clip0_2412_22746">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="matrix(0 -1 1 0 12 28)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div ref="container" class="order-list__table">
      <table>
        <thead>
          <tr>
            <th>QR</th>
            <th>
              <Dropdown title="Вид действия" :options="typeOfDoc" />
            </th>
            <th>
              <Dropdown title="Вид документа" :options="typeOfDoc" />
            </th>
            <th>
              <Dropdown title="Статус" :options="typeOfDoc" />
            </th>
            <th>
              <Sort title="Дата" />
            </th>
            <th>
              <Dropdown title="Исполнитель" :options="typeOfDoc" />
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(offer, i) in paginatedItems" :key="i">
            <td
              class="qr-code"
              :class="qrActive ? ' active' : ''"
              @click="(qrActive = !qrActive), (qrAnother = 'asdaf')"
            >
              <Qr class="qr" :i="i" />
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
                <OfferIcon />
                <EditIcon />
                <DownloadIcon />
                <RemoveIcon />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="order-list__bottom">
      <Pagination :itemsPerPage="6" :items="files" @paginate="paginate" />
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import Btn from "@/components/global/UI/Buttons/Btn.vue";
import DownloadIcon from "@/components/icons/Table/DownloadIcon.vue";
import EditIcon from "@/components/icons/Table/EditIcon.vue";
import OfferIcon from "@/components/icons/Table/OfferIcon.vue";
import RemoveIcon from "@/components/icons/Table/RemoveIcon.vue";
import Dropdown from "@/components/global/Tables/OfferTable/Dropdown.vue";
import Qr from "@/components/global/Tables/OfferTable/Qr.vue";
import Sort from "@/components/global/Tables/OfferTable/Sort.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
// console.log("qwerty");
const qrActive = ref(false);
const store = useStore();
const qrAnother = ref("Asdf");

const router = useRouter();
const emits = defineEmits(["islam"]);
onMounted(() => {
  (() => emits("islam", "Нотариальное действие"))();
});
const typeOfDoc = ["Доверенность", "Договор", "Соглашение", "Завещание"];
const isfilter = ref(true);

const files = store.state.tableListNotarius;

const paginatedItems = ref(files);

const paginate = (data) => {
  paginatedItems.value = data.value; // paginatedItems.push(data)
};

  const container = ref(null);

  const handleScrollRight = () => {
    container.value.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const handleScrollLeft = () => {
    container.value.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.order {
  &__adaptive {
    display: none;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width: 1138px) {
      display: flex;
    }
  }
  &__left svg {
    cursor: pointer;
  }
  &__right svg {
    margin-left: 10px;
    cursor: pointer;
  }
}
.order-list {
  max-width: 100%;

  &__actions {
    display: none;
    justify-content: center;

    svg {
      cursor: pointer;
    }
  }

  &__table {
    min-height: 448px;
    overflow-x: auto;
    max-width: 100%;
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
      @media screen and (max-width: 768px) {
      display: none;
    }
    }
    button {
      @media screen and (max-width: 768px) {
      width: 100%;
    }
    }
  }

  &__bottom {
    margin: 50px auto 0;
    display: flex;
    justify-content: center;
    .pagination {
      @media screen and (max-width: 1050px) {
      margin: 0 0;
      padding: 8px 20%;
    }
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
    text-align: center;
  }
}

.order-list__table {
  table {
    margin-top: 40px;
    border-collapse: collapse;
    width: 100%;

    tr {
      width: 100%;
    }

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
          color: #1baa75;
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
.tooltip {
  position: relative;
}
.tooltip span {
  visibility: hidden;
  width: 320px;
  background: #ffffff;
  color: #000;
  text-align: start;
  border-radius: 6px;
  padding: 16px 16px;
  box-sizing: border-box;
  position: absolute;
  z-index: 9;
  top: -1em;
  left: 100%;
  margin-left: 1em;
  opacity: 0;
  transition: opacity 1s;
  display: flex;
  justify-content: space-between;
}
.tooltip span::after {
  content: "";
  position: absolute;
  top: 1.5em;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent white transparent transparent;
}
.tooltip input {
  display: none;
}
.tooltip input:checked + span {
  visibility: visible;
  opacity: 1;
}
</style>
