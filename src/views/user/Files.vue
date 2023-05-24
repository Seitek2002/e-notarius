<template>
  <section class="files-list">
    <div class="files-list__top">
      <h2>Мои загруженные файлы</h2>
      <Btn
        title="Добавить файл"
        bg="#1BAA75"
        :icon="icon"
      />
    </div>
    <Table :files="paginatedItems"/>
    <div class="files-list__bottom">
      <ul class="pagination">
        <li v-if="currentPage > 1">
          <a @click="currentPage--">
            <ArrowPrevIcon/>
            Пред.
          </a>
        </li>
        <li
          v-for="page in pages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a @click="currentPage = page">{{ page }}</a>
        </li>
        <li v-if="currentPage < totalPages">
          <a @click="currentPage++">
            След.
            <ArrowNextIcon/>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

import Btn from '@/components/Buttons/Btn.vue'
import Table from '@/components/OwnRoom/FileTable/Table.vue'
import ArrowNextIcon from '@/components/Pagination/Icons/ArrowNextIcon.vue'
import ArrowPrevIcon from '@/components/Pagination/Icons/ArrowPrevIcon.vue'

const emits = defineEmits(['islam'])
onMounted(() => {
  (() => emits('islam', 'Мои файлы'))()
})

const files = new Array(39)
const itemsPerPage = 6

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(files.length / itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)

const paginatedItems = computed(() => files.slice(startIndex.value, endIndex.value))
const pages = computed(() => {
  const result = []
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i)
  }
  return result
})
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
        transition: .3s;

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
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 17px auto;
  padding: 8px 10px;
  max-width: 583px;
  background: #fff;
  border: 1px solid #cdcdcd;

  li {
    font-family: 'Montserrat', sans-serif;
    color: #24334b;
    font-size: 16px;
    border: 1px solid transparent;

    a {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    svg {
      margin: 0 9px;
    }

    &.active {
      border: 1px solid #1baa75;
      color: #1baa75;
    }
  }
}
</style>
