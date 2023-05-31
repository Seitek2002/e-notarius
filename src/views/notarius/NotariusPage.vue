<template>
  <section class="notarius">
    <div class="container">
      <div class="notarius__content">
        <div class="notarius__box">
          <div class="notarius__left">
            <img
              :src="data.avatar"
              alt="#"
            >
            <RatingIcon/>
            <p class="notarius__mark">
              {{ data.votes }} оцен
            </p>
          </div>
          <div class="notarius__center">
            <p class="notarius__name">
              {{ data.name }}
            </p>
            <div class="notarius__block">
              <PersonCircleIcon/>
              <p class="notarius__info">
                {{ data.typeOfNotarius }}
              </p>
            </div>
            <div class="notarius__block">
              <RewardIcon/>
              <p class="notarius__info">
                {{ data.license }}
              </p>
            </div>
            <div class="notarius__block">
              <PhoneIcon/>
              <p class="notarius__info">
                <template
                  v-for="item in data.phoneNumbers"
                  :key="item"
                >
                  {{ item }},
                </template>
              </p>
            </div>
            <div class="notarius__block">
              <WhatsAppIcon/>
              <p
                class="notarius__info"
                style="text-decoration: underline #1baa75; color: #1baa75"
              >
                {{ data.whatsApp }}
              </p>
            </div>
            <div class="notarius__block">
              <EmailIcon/>
              <p
                class="notarius__info"
                style="text-decoration: underline #1baa75; color: #1baa75"
              >
                {{ data.email }}
              </p>
            </div>
            <div class="notarius__block">
              <GeoIcon/>
              <p class="notarius__info">
                <template
                  v-for="item in data.geo"
                  :key="item"
                >
                  {{ item }} <br>
                </template>
              </p>
            </div>
            <div class="notarius__block">
              <div class="notarius__case">
                <ClockIcon/>
                <ul class="notarius__row">
                  <li
                    v-for="item in data.schedule"
                    :key="item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="notarius__right">
            <label
              for="#"
              class="notarius__block__box"
            >
              <button class="notarius__btn__one">
                <AddNewReqIcon/>
                Оформить заявку
              </button>
              <button class="notarius__btn__two">
                <WriteMessageIcon/>

                Написать сообщение
              </button>
            </label>
          </div>
        </div>
        <img
          src="/src/assets/images/Notarius/map.png"
          alt=""
          class="notarius__map"
        >
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

import AddNewReqIcon from '@/views/Icons/AddNewReqIcon.vue'
import ClockIcon from '@/views/Icons/ClockIcon.vue'
import EmailIcon from '@/views/Icons/EmailIcon.vue'
import GeoIcon from '@/views/Icons/GeoIcon.vue'
import PersonCircleIcon from '@/views/Icons/PersonCircleIcon.vue'
import PhoneIcon from '@/views/Icons/PhoneIcon.vue'
import RatingIcon from '@/views/Icons/RatingIcon.vue'
import RewardIcon from '@/views/Icons/RewardIcon.vue'
import WhatsAppIcon from '@/views/Icons/WhatsAppIcon.vue'
import WriteMessageIcon from '@/views/Icons/WriteMessageIcon.vue'

const store = useStore()
const route = useRoute()
onMounted(() => {
  window.scrollTo({ top: 0 })
})

// console.log(store.state.notariusList.find(item => item.id == route.params.id));

const data = ref(
  store.state.notariusList.find(item => item.id == route.params.id)
)

</script>

<style lang="scss">
.notarius {
  margin-top: 100px;

  p {
    font-family: "Montserrat", sans-serif;
  }

  &__box {
    display: flex;
  }

  &__left {
    gap: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 50px;

    img {
      width: 194px;
      height: 194px;
    }

    p {
      color: #bdbdbd;
    }
  }

  &__center {
    display: flex;
    flex-direction: column;
    margin-right: 100px;
  }

  &__case {
    display: flex;
    gap: 9px;

    ul {
      margin: 0;
    }
  }

  &__name {
    font-weight: 600;
    font-size: 24px;
    color: #24334b;
  }

  &__block {
    display: flex;
    align-items: center;
    gap: 17px;
  }

  &__info {
    width: 511px;
  }

  &__map {
    margin-top: 80px;
    margin: 80px 0 120px 0;
  }

  &__block__box {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__btn__one {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    width: 320px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1baa75;
    border: none;
    gap: 12px;
  }

  &__btn__two {
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: #fff;
    width: 320px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3f5984;
    box-shadow: 0 10px 20px #acbbd2;
    border: none;
    gap: 12px;
  }
}
</style>
