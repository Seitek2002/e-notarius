<template>
  <section class="files-list">
    <div class="files-list__top">
      <h2>Мои загруженные файлы</h2>
      <Btn title="Добавить файл" bg="#1BAA75" :icon="icon" />
    </div>
    <div class="files-list__adaptive">
      <div class="files-list__left">
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
      <div class="files-list__right">
        <svg
          @click="handleScrollLeftt"
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
          @click="handleScrollRightt"
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
    <div  ref="containerr" class="files-list__table">
      <Table :files="paginatedItems" />
    </div>
    <div class="files-list__bottom">
      <Pagination :itemsPerPage="itemsPerPage" :items="files" @paginate="paginate" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import Btn from '@/components/global/UI/Buttons/Btn.vue'
import Table from '@/components/global/Tables/FileTable/Table.vue'
import ArrowNextIcon from '@/components/Pagination/Icons/ArrowNextIcon.vue'
import Pagination from "@/components/Pagination/Pagination.vue";
import ArrowPrevIcon from '@/components/Pagination/Icons/ArrowPrevIcon.vue'

const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Мои файлы'))()
})

const files = new Array(39)
const itemsPerPage = 6

const paginatedItems = ref(files)
const paginate = (data) => {
  paginatedItems.value = data.value; // paginatedItems.push(data)
};
const containerr = ref(null);

const handleScrollRightt = () => {
  containerr.value.scrollBy({
    left: 200,
    behavior: "smooth",
  });
};

const handleScrollLeftt = () => {
  containerr.value.scrollBy({
    left: -200,
    behavior: "smooth",
  });
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.files-list {
  flex: 1;
  &__table {
        overflow-x: auto;
    max-width: 100%;
  }
  &__adaptive {
    display: none;
    justify-content: space-between;
    margin-top: 30px;
    @media screen and (max-width: 1138px) {
      display: flex;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 65px;
    flex-wrap: wrap;
    button {
      @media screen and (max-width: 768px) {
      width: 100%;
    }
    }
    h2 {
      font-weight: 600;
      font-size: 18px;
      color: #1f2937;
    }
  }

  &__format {
    &--icons {
      align-items: center;
      gap: 36px;
      display: none;

      svg {
        cursor: pointer;
      }
    }
  }

  table {
    margin-top: 43px;
    border-collapse: collapse;

    width: 100%;

    tr {
      width: 100%;
    }
    thead {
      height: 64px;

      tr {
        background: #ffffff;
        border: 1px solid #cdcdcd;

        th {
          font-weight: 600;
          font-size: 16px;
          color: #24334b;
        }
      }
    }

    tbody {
      tr {
        border: 1px solid transparent;

        &:hover {
          background: #fff;
          border: 1px solid #cdcdcd;

          .files-list__format--title {
            display: none;
          }

          .files-list__format--icons {
            display: flex;
          }
        }
      }
    }
  }

  &__name {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 23px 19px;
  }

  &__download {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  &__size {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  &__format {
    display: flex;
    align-items: center;
    justify-content: space-between;

    svg {
      padding-right: 16px;
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
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
