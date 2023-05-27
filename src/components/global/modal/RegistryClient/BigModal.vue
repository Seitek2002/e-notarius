<template>
    <div class="big_modal">
        <div @click="store.state.registryClientBigModal = false; store.state.registryClientMiniModal = false"
            class="big_modal-tobig_modaller"></div>
        <form
            @submit.prevent="store.state.registryClientBigModal = false; deleteData(); store.state.registryClientMiniModal = true"
            class="big_modal-wrapper">
            <div class="big_modal-head">
                <h4 class="big_modal-title">Регистрация пользователя</h4>
                <span @click="store.state.registryClientBigModal = false" class="big_modal-close"><svg width="24"
                        height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <input type="text" class="big_modal-input" required placeholder="Персональный номер (ИНН)"
                        v-model="fourth">
                </div>
            </div>
            <Suptitle text="Документ, удостоверяющий личность" />
            <div class="big_modal__form--wrapper">
                <p class="big_modal-text">Наименование</p>
                <div class="accordeon">
                    <label :class="idIsActive ? 'active' : ''" @click="idIsActive = !idIsActive">
                        <span>{{ idActiveOption }}</span>
                        <ArrowDownSmallIcon class="arrow" :class="{ active: idIsActive }" />
                    </label>
                    <div v-show="idIsActive" class="accordeon__select">
                        <div v-for="option in [
                            'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                            'Свидетельствование (подлинности, верности копий и перевода)  ',
                            'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                            'Совершение (исполнительной надписи, протестов)',
                            'Обеспечение доказательства',
                            'Представление на государственную регистрацию',
                        ]" :key="option" class="accordeon__option"
                            @click="store.commit('setKey', { key: 'notarialActs', data: option }), idActiveOption = option, idIsActive = !idIsActive">
                            {{ option }}
                        </div>
                    </div>
                </div>

            </div>
            <div class="big_modal__form--wrapper">
                <p class="big_modal-text">Серия и № паспорта*</p>
                <div class="big_modal-flex" style="align-items: start;">
                    <div style="max-width:100px;" class="accordeon">
                        <label :class="idChenge ? 'active' : ''" @click="idChenge = !idChenge">
                            <span>{{ idActiveChenge }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: idChenge }" />
                        </label>
                        <div v-show="idChenge" class="accordeon__select">
                            <div v-for="option in [
                                'ID',
                                'AN',
                                'AC',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), idActiveChenge = option, idChenge = !idChenge">
                                {{ option }}
                            </div>
                        </div>
                    </div>
                    <input type="text" class="big_modal-input" required placeholder="Персональный номер (ИНН)"
                        v-model="fourth">
                </div>

            </div>
            <div class="big_modal__form--wrapper">
                <p class="big_modal-text">Орган и дата выдачи</p>
                <div class="big_modal-flex">
                    <input placeholder="МКК" class="big_modal-input" style="max-width:80px;" type="text">
                    <input placeholder="217021" class="big_modal-input" type="number">
                    от
                    <input placeholder="01.08.2017" class="big_modal-input" style="max-width:100px;" type="number">
                </div>
            </div>
            <Suptitle text="Адрес прописки (регистрации)" />
            <div class="big_modal-content">
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Область</p>
                    <div class="accordeon">
                        <label :class="regionActionIsActive ? 'active' : ''"
                            @click="regionActionIsActive = !regionActionIsActive">
                            <span>{{ regionActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: regionActionIsActive }" />
                        </label>
                        <div v-show="regionActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Чуйская',
                                'Иссык-Кульская',
                                'Нарынская',
                                'Ошская',
                                'Джалал-Абадская',
                                'Таласская',
                                'Баткенская',
                                'Ош'
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), regionActionActiveOption = option, regionActionIsActive = !regionActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Район</p>
                    <div class="accordeon">
                        <label :class="areaActionIsActive ? 'active' : ''"
                            @click="areaActionIsActive = !areaActionIsActive">
                            <span>{{ areaActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: areaActionIsActive }" />
                        </label>
                        <div v-show="areaActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                                'Свидетельствование (подлинности, верности копий и перевода)  ',
                                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                                'Совершение (исполнительной надписи, протестов)',
                                'Обеспечение доказательства',
                                'Представление на государственную регистрацию',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), areaActionActiveOption = option, areaActionIsActive = !areaActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Населенный пункт, город</p>
                    <div class="accordeon">
                        <label :class="cityActionIsActive ? 'active' : ''"
                            @click="cityActionIsActive = !cityActionIsActive">
                            <span>{{ cityActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: cityActionIsActive }" />
                        </label>
                        <div v-show="cityActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                                'Свидетельствование (подлинности, верности копий и перевода)  ',
                                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                                'Совершение (исполнительной надписи, протестов)',
                                'Обеспечение доказательства',
                                'Представление на государственную регистрацию',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), cityActionActiveOption = option, cityActionIsActive = !cityActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Улица</p>
                    <input type="text" class="big_modal-input" required placeholder="Каримова" v-model="first">
                </div>
                <div class="big_modal-flex">
                    <div class="big_modal__form--wrapper" style="width: 100%;">
                        <p class="big_modal-text">Дом</p>
                        <input type="number" class="big_modal-input" required placeholder="23" v-model="first">
                    </div>
                    <div class="big_modal__form--wrapper" style="width: 100%;">
                        <p class="big_modal-text">Квартира</p>
                        <input type="text" class="big_modal-input" required placeholder="16" v-model="first">
                    </div>
                </div>
            </div>
            <div class="big_modal-content">
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Область</p>
                    <div class="accordeon">
                        <label :class="regionSecondActionIsActive ? 'active' : ''"
                            @click="regionSecondActionIsActive = !regionSecondActionIsActive">
                            <span>{{ regionSecondActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: regionSecondActionIsActive }" />
                        </label>
                        <div v-show="regionSecondActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Чуйская',
                                'Иссык-Кульская',
                                'Нарынская',
                                'Ошская',
                                'Джалал-Абадская',
                                'Таласская',
                                'Баткенская',
                                'Ош'
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), regionSecondActionActiveOption = option, regionSecondActionIsActive = !regionSecondActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Район</p>
                    <div class="accordeon">
                        <label :class="areaSecondActionIsActive ? 'active' : ''"
                            @click="areaSecondActionIsActive = !areaSecondActionIsActive">
                            <span>{{ areaSecondActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: areaSecondActionIsActive }" />
                        </label>
                        <div v-show="areaSecondActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                                'Свидетельствование (подлинности, верности копий и перевода)  ',
                                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                                'Совершение (исполнительной надписи, протестов)',
                                'Обеспечение доказательства',
                                'Представление на государственную регистрацию',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), areaSecondActionActiveOption = option, areaSecondActionIsActive = !areaSecondActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Населенный пункт, город</p>
                    <div class="accordeon">
                        <label :class="citySecondActionIsActive ? 'active' : ''"
                            @click="citySecondActionIsActive = !citySecondActionIsActive">
                            <span>{{ citySecondActionActiveOption }}</span>
                            <ArrowDownSmallIcon class="arrow" :class="{ active: citySecondActionIsActive }" />
                        </label> 
                        <div v-show="citySecondActionIsActive" class="accordeon__select">
                            <div v-for="option in [
                                'Удостоверение (доверенностей, договоров, фактов и др. сделки)',
                                'Свидетельствование (подлинности, верности копий и перевода)  ',
                                'Принятие (документов на хранение, депозит, деньги, ценные бумаги и т.д.)',
                                'Совершение (исполнительной надписи, протестов)',
                                'Обеспечение доказательства',
                                'Представление на государственную регистрацию',
                            ]" :key="option" class="accordeon__option"
                                @click="store.commit('setKey', { key: 'notarialActs', data: option }), citySecondActionActiveOption = option, citySecondActionIsActive = !citySecondActionIsActive">
                                {{ option }}
                            </div>
                        </div>
                    </div>

                </div>
                <div class="big_modal__form--wrapper">
                    <p class="big_modal-text">Улица</p>
                    <input type="text" class="big_modal-input" required placeholder="Каримова" v-model="first">
                </div>
                <div class="big_modal-flex">
                    <div class="big_modal__form--wrapper" style="width: 100%;">
                        <p class="big_modal-text">Дом</p>
                        <input type="number" class="big_modal-input" required placeholder="23" v-model="first">
                    </div>
                    <div class="big_modal__form--wrapper" style="width: 100%;">
                        <p class="big_modal-text">Квартира</p>
                        <input type="text" class="big_modal-input" required placeholder="16" v-model="first">
                    </div>
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
                    <div class="big_modal-flex" style="align-items: start; margin: 20px 0 30px; ">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM14.3 7.61L9.73 13.61C9.63685 13.731 9.51721 13.8291 9.38027 13.8967C9.24333 13.9643 9.09272 13.9996 8.94 14C8.78811 14.0008 8.63803 13.967 8.50114 13.9012C8.36426 13.8353 8.24418 13.7392 8.15 13.62L5.71 10.51C5.62924 10.4063 5.5697 10.2876 5.53479 10.1609C5.49987 10.0341 5.49027 9.90172 5.50652 9.77126C5.52277 9.64079 5.56456 9.5148 5.6295 9.40049C5.69444 9.28617 5.78126 9.18576 5.885 9.105C6.09452 8.94189 6.36026 8.8687 6.62375 8.90152C6.75421 8.91777 6.8802 8.95955 6.99452 9.02449C7.10883 9.08943 7.20924 9.17626 7.29 9.28L8.92 11.36L12.7 6.36C12.7801 6.25494 12.8801 6.16669 12.9943 6.10029C13.1085 6.03388 13.2347 5.99062 13.3657 5.97298C13.4966 5.95534 13.6297 5.96365 13.7574 5.99746C13.8851 6.03126 14.0049 6.08989 14.11 6.17C14.2151 6.25011 14.3033 6.35012 14.3697 6.46433C14.4361 6.57855 14.4794 6.70472 14.497 6.83565C14.5147 6.96658 14.5063 7.0997 14.4725 7.22742C14.4387 7.35514 14.3801 7.47494 14.3 7.58V7.61Z"
                            fill="#1BAA75" />
                    </svg>
                    <Suptitle style="margin: 0;" text="Паспортные данные действительны в базе данных “Тундук”" />
                </div>
                <Suptitle text="Контактные данные" />
                    <div class="big_modal__form--wrapper">
                        <p class="big_modal-text">E-mail*</p>
                        <input type="email" class="big_modal-input" required placeholder="E-mail*" v-model="first">
                    </div>
                    <div class="big_modal__form--wrapper">
                        <p class="big_modal-text">Номер телефона*</p>
                        <input type="number" class="big_modal-input" required placeholder="Номер телефона*" v-model="second">
                    </div>
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
const notActionActiveOption = ref('Пользователь')
const idIsActive = ref(false)
const idActiveOption = ref('Паспорт ID')
const idChenge = ref(false)
const idActiveChenge = ref('ID')

const regionActionIsActive = ref(false)
const regionActionActiveOption = ref('Чуйская')
const areaActionIsActive = ref(false)
const areaActionActiveOption = ref('Московский')
const cityActionIsActive = ref(false)
const cityActionActiveOption = ref('село Беловодское')

const regionSecondActionIsActive = ref(false)
const regionSecondActionActiveOption = ref('Чуйская')
const areaSecondActionIsActive = ref(false)
const areaSecondActionActiveOption = ref('Московский')
const citySecondActionIsActive = ref(false)
const citySecondActionActiveOption = ref('село Беловодское')

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

<style lang="scss"> .big_modal {

     input {

         &[type="number"]::-webkit-inner-spin-button,
         &[type="number"]::-webkit-outer-spin-button {
             -webkit-appearance: none;
             margin: 0;
         }
     }

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
     }

     &-flex {
         display: flex;
         align-items: center;
         gap: 10px;
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
         padding: 15px 12px;
         box-sizing: border-box;
         border: 1px solid #1BAA75;
     }

     &-btns {
         display: flex;
         margin-top: 40px;
         flex-direction: column; 

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
         margin-top: 40px;
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
 }</style>