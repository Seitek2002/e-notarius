<template>
    <div class="big_modal">
        <div @click="store.state.registryClientBigModal = false; store.state.registryClientMiniModal = false" class="big_modal-tobig_modaller"></div>
        <form @submit.prevent="store.state.registryClientBigModal = false; deleteData(); store.state.registryClientMiniModal = true"
            class="big_modal-wrapper">
            <div class="big_modal-head">
                <h4 class="big_modal-title">Регистрация пользователя</h4>
                <span @click="store.state.registryClientBigModal = false"
                    class="big_modal-close"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4099 11.9963L17.7099 7.70628C17.8982 7.51798 18.004 7.26258 18.004 6.99628C18.004 6.72998 17.8982 6.47458 17.7099 6.28628C17.5216 6.09798 17.2662 5.99219 16.9999 5.99219C16.7336 5.99219 16.4782 6.09798 16.2899 6.28628L11.9999 10.5863L7.70994 6.28628C7.52164 6.09798 7.26624 5.99219 6.99994 5.99219C6.73364 5.99219 6.47824 6.09798 6.28994 6.28628C6.10164 6.47458 5.99585 6.72998 5.99585 6.99628C5.99585 7.26258 6.10164 7.51798 6.28994 7.70628L10.5899 11.9963L6.28994 16.2863C6.19621 16.3792 6.12182 16.4898 6.07105 16.6117C6.02028 16.7336 5.99414 16.8643 5.99414 16.9963C5.99414 17.1283 6.02028 17.259 6.07105 17.3809C6.12182 17.5027 6.19621 17.6133 6.28994 17.7063C6.3829 17.8 6.4935 17.8744 6.61536 17.9252C6.73722 17.9759 6.86793 18.0021 6.99994 18.0021C7.13195 18.0021 7.26266 17.9759 7.38452 17.9252C7.50638 17.8744 7.61698 17.8 7.70994 17.7063L11.9999 13.4063L16.2899 17.7063C16.3829 17.8 16.4935 17.8744 16.6154 17.9252C16.7372 17.9759 16.8679 18.0021 16.9999 18.0021C17.132 18.0021 17.2627 17.9759 17.3845 17.9252C17.5064 17.8744 17.617 17.8 17.7099 17.7063C17.8037 17.6133 17.8781 17.5027 17.9288 17.3809C17.9796 17.259 18.0057 17.1283 18.0057 16.9963C18.0057 16.8643 17.9796 16.7336 17.9288 16.6117C17.8781 16.4898 17.8037 16.3792 17.7099 16.2863L13.4099 11.9963Z"
                            fill="#1BAA75" />
                    </svg> Отменить
                </span>
            </div>
            <div class="big_modal-content">
                <div class="big_modal__form--wrapper"> 
                    <p class="big_modal-text">Роль пользователя</p>
                    <div class="accordeon">
                        <label :class="notActionIsActive ? 'active' : ''" @click="notActionIsActive = !notActionIsActive">
                            <span>{{ notActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: notActionIsActive }" />
                        </label>
                        <div v-show="notActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                                'Свидетельствование (подлинности, верности копий и перевода)  ',
                                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                                'Совершение (исполнительной надписи, протестов)',
                                'Обеспечение доказательства',
                                'Представление на государственную регистрацию',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), notActionActiveOption = option, notActionIsActive = !notActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal-poker-face" @click="checked = !checked">
                    <input type="checkbox" :checked="checked">
                    Иностранное лицо
                </div>
                <Suptitle text="Данные для выгрузки с портала “Тундук”" />
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Фамилия</p>
                    <input type="text" class="big_modal-input" required placeholder="Фамилия" v-model="first">
                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Имя</p>
                    <input type="text" class="big_modal-input" required placeholder="Имя" v-model="second">
                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Отчество</p>
                    <input type="text" class="big_modal-input" required placeholder="Отчество" v-model="third">
                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Персональный номер (ИНН)</p>
                    <input type="text" class="big_modal-input" required placeholder="Персональный номер (ИНН)" v-model="fourth">
                </div>
            </div>
            <div class="big_modal-btns">
                <button class="big_modal-btn-first">
                    Проверить
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 5H6.5C5.39543 5 4.5 5.89543 4.5 7V19C4.5 20.1046 5.39543 21 6.5 21H12.197"
                            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.5 12V7C18.5 5.89543 17.6046 5 16.5 5H14.5" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <rect x="8.5" y="3" width="6" height="4" rx="2" stroke="white" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.5 11H12.5" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.5 15H11.5" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <circle cx="17" cy="17.5" r="2.5" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M19 19.5L21.5 22" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="big_modal-btn-second">Зарегистрировать</button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useStore } from "vuex";
import Suptitle from '@/components/global/UI/Info/Suptitle.vue'
import ArrowDownSmallIcon from '@/components/global/UI/Info/Icons/ArrowDownSmallIcon.vue'
import { ref } from "vue";
const notActionIsActive = ref(false)
const notActionActiveOption = ref('Все')
const store = useStore()
const checked = ref(false)
const first = ref("")
const second = ref("")
const third = ref("")
const fourth = ref("")

const deleteData = () => {
        first.value = ""
    second.value = ""
    third.value = ""
    fourth.value = ""
}

</script>

<style lang="scss">
.big_modal {
    &-tobig_modaller {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        background: rgba(205, 205, 205, 0.1);
        backdrop-filter: blur(15px);
    }

    &-wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 4;
        transform: translate(-50%, -50%);
        background: #FFFFFF;
        box-shadow: 0px 10px 40px #DCDCDC;
        padding: 40px 20px;
        width: 520px;
        box-sizing: border-box;
        overflow: auto;
        height: 90%;

        &[type="number"]::-webkit-inner-spin-button,
        &[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    }

    &-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    &-close {
        display: flex;
        gap: 5px;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        color: #1BAA75;
    }

    &-title {
        font-weight: 600;
        font-size: 18px;
        color: #24334B;
    }

    &-poker-face {
        font-weight: 500;
        font-size: 14px;
        color: #24334B;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 15px 0 30px;
        cursor: pointer;
    }

    &-text {
        font-weight: 500;
        font-size: 14px;
        color: #24334B;
        margin: 0;
        margin-bottom: 5px;
    }

    &__form--wrapper {
        display: flex;
        flex-direction: column;
        margin-top: 15px;

        p {
            font-weight: 500;
            font-size: 14px;
            color: #24334B;
        }
    }

    &-input {
        width: 100%;
        padding: 10px 12px;
        box-sizing: border-box;
        border: 1px solid #1BAA75;
    }

    &-btns {
        display: flex;
        margin-top: 40px;
        flex-direction: column;
        gap: 40px;

        button {
            padding: 10px 20px;
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            justify-content: center;
        }
    }

    &-btn-first {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #3F5984;
        color: #FFFFFF;
    }

    &-btn-second {
        display: flex;
        align-items: center;
        gap: 10px;
        background: #1BAA75;
        color: #F6F6F6;
    }
}

.accordeon {
    width: 100%;
    position: relative;

    &__select {
        background: #fff;
        width: 100%;
        border: 1px solid #1baa75;
        border-top: none;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 15px;
    }

    p {
        margin-bottom: 5px;
    }

    &__option {
        color: #24334b;
        cursor: pointer;
    }

    label {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: #ffffff;
        border: 1px solid #1baa75;
        padding: 12px 10px;
        box-sizing: border-box;

        &.active {
            border-bottom: 1px solid transparent;
        }
    }
}
</style>