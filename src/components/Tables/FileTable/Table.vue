<template>
  <table>
    <thead>
    <tr>
      <th>
        <div
          class="files-list__name"
          @click="isActive = !isActive"
        >
          <div class="checkbox-input">
            <CheckboxSuccessBlackIcon/>
          </div>
          Паспорт файла
        </div>
      </th>
      <th>
        <div class="files-list__download">
          <ArrowIcon/>
          Дата загрузки
        </div>
      </th>
      <th>
        <div class="files-list__size">
          <ArrowIcon/>
          Размер
        </div>
      </th>
      <th>
        <div class="files-list__format">
          Формат
          <FormatMenu/>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(_,i) in files"
      :key="i"
    >
      <td>
        <div class="files-list__name">
          <Checkbox title="Фото_для док.jpg"/>
        </div>
      </td>
      <td>
        <div class="files-list__download">
          21.01.2022
        </div>
      </td>
      <td>
        <div class="files-list__size">
          350 кб
        </div>
      </td>
      <td>
        <div class="files-list__format">
          <div class="files-list__format--title">
            jpg
          </div>
          <div class="files-list__format--icons">
            <DownloadIcon/>
            <RemoveIcon/>
          </div>
        </div>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'
import ArrowIcon from '@/components/icons/Table/ArrowIcon.vue'

import CheckboxSuccessBlackIcon from '@/components/Tables/Icons/CheckboxSuccessBlackIcon.vue'
import DownloadIcon from '@/components/icons/Table/DownloadIcon.vue'
import FormatMenu from '@/components/icons/Table/FormatMenu.vue'
import RemoveIcon from '@/components/icons/Table/RemoveIcon.vue'
import Checkbox from '@/components/Tables/FileTable/Checkbox.vue'

const isActive = ref(false)
defineProps(['files'])
</script>
