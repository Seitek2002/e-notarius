<template>
    <section class="profile">
        <div class="profile-head">
            <div @click="paginationItem = i" v-for="(item, i) in pagination" :key="item"
                :class="paginationItem == i ? 'profile-item active' : 'profile-item'">{{ item }}
            </div>
        </div>
        <div v-if="paginationItem == 0" class="profile-wrapper">
            <div class="profile-btns">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill="#1BAA75" />
                    <path
                        d="M50.5002 48.2083C52.3132 48.2083 54.0854 47.6707 55.5929 46.6635C57.1003 45.6562 58.2753 44.2246 58.9691 42.5496C59.6629 40.8746 59.8444 39.0315 59.4907 37.2533C59.137 35.4752 58.264 33.8418 56.982 32.5599C55.7 31.2779 54.0667 30.4048 52.2885 30.0511C50.5103 29.6974 48.6672 29.879 46.9922 30.5728C45.3172 31.2666 43.8856 32.4415 42.8784 33.9489C41.8711 35.4564 41.3335 37.2287 41.3335 39.0417C41.3335 41.4728 42.2993 43.8044 44.0184 45.5235C45.7374 47.2426 48.069 48.2083 50.5002 48.2083ZM50.5002 34.4583C51.4067 34.4583 52.2928 34.7271 53.0465 35.2308C53.8003 35.7344 54.3877 36.4502 54.7346 37.2877C55.0815 38.1252 55.1723 39.0468 54.9954 39.9358C54.8186 40.8249 54.3821 41.6416 53.7411 42.2826C53.1001 42.9236 52.2834 43.3601 51.3943 43.5369C50.5052 43.7138 49.5837 43.623 48.7462 43.2761C47.9087 42.9292 47.1929 42.3418 46.6893 41.588C46.1856 40.8343 45.9168 39.9482 45.9168 39.0417C45.9168 37.8261 46.3997 36.6603 47.2593 35.8008C48.1188 34.9412 49.2846 34.4583 50.5002 34.4583ZM50.5002 52.7917C46.2456 52.7917 42.1654 54.4818 39.157 57.4902C36.1486 60.4986 34.4585 64.5788 34.4585 68.8333C34.4585 69.4411 34.6999 70.024 35.1297 70.4538C35.5595 70.8836 36.1424 71.125 36.7502 71.125C37.358 71.125 37.9408 70.8836 38.3706 70.4538C38.8004 70.024 39.0418 69.4411 39.0418 68.8333C39.0418 65.7944 40.249 62.8799 42.3979 60.7311C44.5468 58.5822 47.4612 57.375 50.5002 57.375C53.5391 57.375 56.4536 58.5822 58.6024 60.7311C60.7513 62.8799 61.9585 65.7944 61.9585 68.8333C61.9585 69.4411 62.1999 70.024 62.6297 70.4538C63.0595 70.8836 63.6424 71.125 64.2502 71.125C64.858 71.125 65.4408 70.8836 65.8706 70.4538C66.3004 70.024 66.5418 69.4411 66.5418 68.8333C66.5418 64.5788 64.8517 60.4986 61.8433 57.4902C58.8349 54.4818 54.7547 52.7917 50.5002 52.7917Z"
                        fill="white" />
                </svg>
                <div class="profile-btn">
                    <button class="profile-gren-btn">Загрузить</button>
                <button class="profile-white-btn">Удалить</button>
                </div>
            </div>
            <div class="profile-hr"></div>

            <div class="profile__form--wrapper">
                <Suptitle text="Персональные данные" />
                <div class="profile-flex">
                    <label class="profile-label">
                        <p>ФИО</p>
                        <input type="text" placeholder="ЧН Абдыгулов Баяман Алыкулович">
                    </label>

                    <label class="profile-label">
                        <p>Логин</p>
                        <input type="text" placeholder="bayaman">
                    </label>
                </div>
            </div>


            <div class="profile__form--wrapper">
                <Suptitle text="Контактные данные" />
                <div class="profile-flex">
                    <label class="profile-label">
                        <p>E-mail</p>
                        <input type="email" placeholder="bayaman@example.org">
                    </label>

                    <label class="profile-label">
                        <p>Номер телефона</p>
                        <input type="number" placeholder="+996 700 000 000">
                    </label>
                </div>
            </div>


            <div class="profile-hr"></div>

            <div class="profile__form--wrapper">
                <Suptitle text="Пароль" />
                <div class="profile-flex">
                    <label class="profile-label">
                        <p>Введите пароль</p>
                        <input type="password" placeholder="Пароль">
                    </label>

                    <label class="profile-label">
                        <p>Подтвердите пароль</p>
                        <input type="password" placeholder="Подтвердите пароль">
                    </label>
                </div>
            </div>

            <div class="profile-btns">
                <button class="profile-gren-btn-another">Сохранить</button>
                <button class="profile-blackbery-btn">Отмена</button>
            </div>
        </div>
        <div v-if="paginationItem == 1" class="profile-wrapper">
            <div v-for="item in notice" :key="item.id" class="profile-block">
                <p class="profile-text">{{ item.text }}</p>
                <span class="profile-time">{{item.time}}</span>
                <div v-show="item.notice" class="profile-notice"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from "vue"
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
const emits = defineEmits(['islam'])
onMounted(() => {
    (() => emits('islam', 'Профиль'))()
})
const pagination = ref(["Аватар", "Уведомления"])
const paginationItem = ref(0)
const notice = ref([
    {
        id: 0,
        text: "Новое сообщение от пользователя Нурмырзаевой А.",
        time: "5 мин",
        notice: true,
    },
    {
        id: 1,
        text: "Нотариальное действие ID 028-336 успешно внесено в реестр",
        time: "2 часа",
        notice: true,
    },
    {
        id: 2,
        text: "Профиль пользователя изменен",
        time: "5 часов",
        notice: true,
    },
    {
        id: 3,
        text: "Новый пользователь успешно добавлен ",
        time: "1 день",
        notice: true,
    },
    {
        id: 4,
        text: "Новый пользователь успешно добавлен ",
        time: "2 день",
        notice: false,
    },
    {
        id: 5,
        text: "Новый пользователь успешно добавлен ",
        time: "3 день",
        notice: false,
    },
])
</script>

<style lang="scss">
.profile {
    margin-top: 50px;
    background: #FFFFFF;
    box-shadow: 0px 10px 40px #E9E9E9;
    padding: 30px 40px;

    &-head {
        display: flex;
        align-items: center;
    }

    &-item {
        background: #fff;
        font-weight: 500;
        font-size: 16px;
        color: #24334B;
        padding: 10px 16px;
        cursor: pointer;

        &.active {
            color: #1BAA75;
            background: #EFEFEF;
        }
    }

    &-btns {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 30px;
        margin-top: 30px;
        button {
            @media screen and (max-width: 685px) {
            width: 100%;
            padding: 12.5px 0;
        }
        }
    }
        &-btn {
        display: flex;
        @media screen and (max-width:385px) {
                    flex-wrap: wrap;
        }
        button {
            padding: 13px 37px;
        }
    }
    &__form--wrapper {
        margin-top: 30px;
    }

    &-gren-btn {
        font-weight: 600;
        background: #1BAA75;
        font-size: 14px;
        color: #FFFFFF;
        padding: 13px 37px; 
    }

    &-gren-btn-another {
        font-weight: 600;
        background: #1BAA75;
        font-size: 14px;
        color: #FFFFFF;
        padding: 12.5px 114px;
    }

    &-blackbery-btn {
        font-weight: 600;
        background: #3F5984;
        font-size: 14px;
        color: #FFFFFF;
        padding: 12.5px 114px;
    }

    &-white-btn {
        font-weight: 600;
        background: #fff;
        font-size: 14px;
        color: #1BAA75;
        border: 1px dashed #CDCDCD;
        padding: 13px 37px;
    }

    &-wrapper {
        margin-top: 30px;
    }

    &-hr {
        background: #CDCDCD;
        width: 100%;
        height: 1px;

        margin-top: 30px;
    }

    &-flex {
        display: flex;
        
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        @media screen and (max-width: 685px) {
            justify-content: center;
            flex-direction: column;
        }
    }

    &-label {
        display: flex;
        flex-direction: column;
        width: 47%;
@media screen and (max-width: 685px) {
            width: 100%;
        }
        p {
            font-weight: 500;
            font-size: 14px;
            color: #24334B;
            margin-bottom: 5px;
        }

        input {
            padding: 12px 10px;
            border: none;
            background: #FFFFFF;
            border: 1px solid #CDCDCD;
            width: 100%;

            &::placeholder {
                font-weight: 400;
                font-size: 14px;
                color: #687C9B;
            }

            &[type="number"]::-webkit-inner-spin-button,
            &[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &:focus {
                border: 1px solid #1BAA75;
            }
        }

    }

    &-block {
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #F6F6F6;

        &:hover {
            background: #F6F6F6;
        }
    }

    &-text {
        font-weight: 400;
        font-size: 14px;
        color: #24334B;
        margin: 0;
    }

    &-time {
        font-weight: 400;
        font-size: 12px;
        color: #687C9B;
    }

    &-notice {
        position: absolute;
        top: 15px;
        right: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #1BAA75;
    }

}
</style>