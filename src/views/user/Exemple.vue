<template>
    <section class="exemple">
        <div class="exemple-head">
            <input type="text" placeholder="Поиск по ключевому слову" class="exemple-input">
            <Search />
        </div>
        <div class="exemple-table">
            <table>
                <thead>
                    <tr>
                        <th>
                            <Sort title="ID шаблона" style="white-space: nowrap" />
                        </th>
                        <th>
                            <Sort title="Наименование шаблона" style="white-space: nowrap" />
                        </th> 
                        <th>
                            <Dropdown title="Вид действия" :options="firstList" style="white-space: nowrap" />
                        </th> 
                        <th>
                            <Dropdown title="Вид документа" :options="secondList" style="white-space: nowrap" />
                        </th> 
                        <th>
                            <Dropdown title="Объект" :options="thirdList" />
                        </th>
                        <th>
                            <Dropdown title="Вид объекта" :options="thirdList" style="white-space: nowrap" />
                        </th> 
                        <th>
                            Выбрать действие
                        </th> 
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(_,i) in paginatedItems" :key="i" >
                        <td> 01238 </td>
                        <td>Удостоверение</td> 
                        <td style="white-space: nowrap">Обеспечение доказательства</td>
                        <td>Доверенность</td>
                        <td style="white-space: nowrap">Договор купли продажи квартиры(жилого дома) с участием представителя</td>
                        <td>Заработная плата</td>
                        <td> <div class="exemple-icons">
                            <Add style="cursor: pointer;" />
                            <Remove style="cursor: pointer;" />
                        </div> </td> 
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="exemple-pagination">
            <Pagination :itemsPerPage="6" :items="files" @paginate="paginate" />
        </div> 
    </section>
</template>
<script setup>
import { onMounted, ref } from "vue"
import Dropdown from "@/components/global/Tables/OfferTable/Dropdown.vue"; 
import Search from "@/components/icons/exemple/Search.vue"; 
import Add from "@/components/icons/exemple/Add.vue";
import Remove from "@/components/icons/exemple/Remove.vue";
import Sort from "@/components/global/Tables/OfferTable/Sort.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import { useStore } from "vuex";

const store = useStore()
const emits = defineEmits(['islam'])
onMounted(() => {
    (() => emits('islam', 'Мои шаблоны'))()
})



const files = ref(store.state.registryOfUser);

const paginatedItems = ref(files.value);

const paginate = (data) => {
  paginatedItems.value = data.value; // paginatedItems.push(data)
};

const firstList = ref([
  "Согласие",
  "Доверенность",
  "Заявление",
  "Выдача",
  "Копии",
  "Факты",
  "Свидетельство",
]);
const secondList = ref([
  "Согласие",
  "Доверенность",
  "Заявление",
  "Выдача",
  "Копии",
  "Факты",
  "Свидетельство",
]);
const thirdList = ref([
  "Исполнен",
  "На разъяснении",
  "В обработке",
  "Отменен",
  "Отклонен",
  "На исполнении",
]);

</script>
<style scoped lang="scss">
.exemple {
    margin-top: 62px;
    &-head {
        display: flex;
        align-items: center;
    }

    &-input {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        outline: unset;
        border: none;
        background: #FFFFFF;
        border-width: 1px 0px 1px 1px;
        border-style: solid;
        border-color: #CDCDCD;

        &::placeholder {
            font-weight: 400;
            font-size: 14px;
            color: #BDBDBD;
        }
    }
    &-icons {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    &-pagination {
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
}

.exemple-table {
    max-width: 1115px;
    overflow: auto;

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
                    color: #1baa75;
                }

                &:hover {
                    background: #ffffff;
                    border-color: #cdcdcd;
                }

                td {
                    padding: 12px;
                    box-sizing: border-box;
                    font-weight: 500;
                    font-size: 14px;
                    color: #24334b;
                    text-align: left; 
                }
            }
        }
    }
}
</style>