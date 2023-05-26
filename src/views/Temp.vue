<template>
    <section class="temp">
        <div class="temp-head">
            <input type="text" placeholder="Поиск по ключевому слову" class="temp-input">
            <Search />
        </div>
        <div class="temp-table">
            <table>
                <thead>
                    <tr>
                        <th>
                            <Sort title="ID шаблона" style="white-space: nowrap" />
                        </th>
                        <th>
                            <Sort title="Наименование шаблона" style="white-space: nowrap; gap: 80px;"  />
                        </th>
                        <th>
                            <Dropdown title="Вид действия" :options="firstList" style="white-space: nowrap" />
                        </th>
                        <th>
                            <Dropdown title="Вид документа" :options="secondList" style="white-space: nowrap" />
                        </th>
                        <th>
                            <Dropdown title="Вид объекта" :options="thirdList" style="white-space: nowrap" />
                        </th>
                        <th>
                            <div style="white-space: nowrap">
                                Выполнить действие
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(_, i) in paginatedItems" :key="i">
                        <td> 01238 </td>
                        <td class="temp-hover_none" >Доверенность на получение з/п</td>
                        <td class="temp-hover_active" >
                            <div class="temp-btns">
                                <router-link to="/order-list-notarius" class="temp-new">Новая заявка</router-link>
                                <router-link to="/exemple-notarius" class="temp-exemple"> В Мои шаблоны</router-link>
                            </div>
                        </td>
                        <td>Удостоверение</td>
                        <td style="white-space: nowrap">Договор купли продажи квартиры(жилого дома) с участием представителя
                        </td>
                        <td>Заработная плата</td>
                        <td>
                            <div class="temp-btns">
                                <router-link to="/order-list-notarius" class="temp-new">Новая заявка</router-link>
                                <router-link to="/exemple-notarius" class="temp-exemple"> В Мои шаблоны</router-link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="temp-pagination">
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
.temp {
    margin-top: 62px; 
    &-head {
        display: flex;
        align-items: center;
    }

    &-btns {
        display: flex;
        align-items: center;
        gap: 16px;
        white-space: nowrap;
    }

    &-new {
        background: #1BAA75;
        padding: 7px 17px;
        font-weight: 600;
        font-size: 14px;
        color: #FFFFFF;
    }
    &-exemple {
        background:#fff ;
        padding: 7px 17px;
        font-weight: 600;
        font-size: 14px;
        color: #1BAA75;
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

.temp-table {
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

                .temp-hover_active {
                        display: none;
                    }

                &:hover {
                    background: #ffffff;
                    border-color: #cdcdcd;

                    .temp-hover_active {
                        display: block;
                    }
                    .temp-hover_none {
                        display: none;
                    }
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