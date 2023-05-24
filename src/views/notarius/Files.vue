<template>
  <section class="files-list">
    <div class="files-list__top">
      <h2>Мои загруженные файлы</h2>
      <Btn title="Добавить файл" bg="#1BAA75" :icon="icon" />
    </div>
    <Table :files="paginatedItems" />
    <div class="files-list__bottom">
      <Pagination :itemsPerPage="6" :items="files" @paginate="paginate" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import ArrowNextIcon from '@/components/Pagination/Icons/ArrowNextIcon.vue'
import ArrowPrevIcon from '@/components/Pagination/Icons/ArrowPrevIcon.vue'
import Btn from '@/components/Buttons/Btn.vue'
import Table from '@/components/global/Tables/FileTable/Table.vue'
import Pagination from "@/components/Pagination/Pagination.vue";

const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Мои файлы'))()
})

const files = new Array(39)

const paginatedItems = ref(files)
const paginate = (data) => {
  paginatedItems.value = data.value; // paginatedItems.push(data)
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.files-list {
  flex: 1;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 65px;

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
</style>
