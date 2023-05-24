<template>
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
</template>

<script setup>
import {
  computed, onMounted, ref, watch,
} from 'vue'

import ArrowNextIcon from '@/components/Pagination/Icons/ArrowNextIcon.vue'
import ArrowPrevIcon from '@/components/Pagination/Icons/ArrowPrevIcon.vue'

const props = defineProps(['itemsPerPage', 'items'])
const emits = defineEmits(['paginate'])

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(props.items.length / props.itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * props.itemsPerPage)
const endIndex = computed(() => startIndex.value + props.itemsPerPage)

const paginatedItems = computed(() => props.items.slice(startIndex.value, endIndex.value))
const pages = computed(() => {
  const result = []
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i)
  }
  return result
})

onMounted(() => {
  emits('paginate', paginatedItems)
})

watch(paginatedItems, () => {
  emits('paginate', paginatedItems)
})
</script>

<style lang="scss" scoped>
.pagination {
  display: inline-flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 8px 10px;
  background: #fff;
  border: 1px solid #cdcdcd;
  box-sizing: border-box;
  gap: 5px;

  li {
    font-family: 'Montserrat', sans-serif;
    color: #24334b;
    font-size: 16px;
    border: 1px solid transparent;
    background: #fff;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
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
