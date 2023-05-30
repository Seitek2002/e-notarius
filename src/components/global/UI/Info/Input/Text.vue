<template>
  <label
    :for="text"
    @input="handleChange"
  >
    <p>
      {{ text }}
    </p>
    <input
      :id="text"
      type="text"
      :placeholder="placeholder"
    >
  </label>
</template>

<script setup>
import { useStore } from 'vuex'

const props = defineProps(['text', 'placeholder', 'notarius'])
const store = useStore()

const handleChange = ({ target }) => {
  if (props.notarius) {
    if (props.text === 'Фамилия') {
      store.commit('editItem', {
        key: 'surName',
        data: target.value,
        applicant: true,
      })
    } else if (props.text === 'Имя') {
      store.commit('editItem', {
        key: 'name',
        data: target.value,
        applicant: true,
      })
    } else if (props.text === 'Отчество') {
      store.commit('editItem', {
        key: 'lastName',
        data: target.value,
        applicant: true,
      })
    }
  }
}

</script>

<style lang="scss">
label {
  font-family: 'Montserrat', sans-serif;
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: #24334b;

  p {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    padding: 11px 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #24334b;
  }
}
</style>
