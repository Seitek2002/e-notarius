import { createStore } from 'vuex'
import { state } from './mockState'
import { auth } from './auth.module';

const store = createStore({
  modules: {
    auth
  },
  state,
  mutations: { 
    checkUserClient(state, data) {
      if (data) {
        state.auth = data
      } else {
        state.auth.check = false
      }
    },
    getLocal(state) {
      state.sidebar = localStorage.getItem('sidebar') || '';
      console.log(state.sidebar);
    },
    setAuth(state) {
      state.auth.check = false
    },
    setChooseObject(state, data) {
      state.chooseObject = data
    },
    setTypeOfObject(state, data) {
      state.typeOfObject = data
    },
    setNotarialActs(state, data) {
      state.notarialActs = data
    },
    setTypeOfNotarialActs(state, data) {
      state.typeOfNotarialActs = data
    },
    setTypeOfAction(state, data) {
      state.typeOfAction = data
    },
    setDoc(state, data) {
      state.doc = data
    },
    editItem(state, data) {
      state.item[data.key] = data.data
    },
    pushNewItem(state) {
      state.registryOfNotariusAction.push(state.item)
      state.item = {
        id: 15163,
        qr: false,
        surName: '',
        name: '',
        lastName: '',
        registryNumber: '125-8563',
        notariusAction: 'Обеспечение доказательства',
        typeOfAction: 'Постановление',
        typeOfDocument: 'Постановление о назначении экспертизы',
        applicant: '',
        status: 'Исполнен',
        dateOfCreating: '01.01.2022',
        dateOfAdd: '01.01.2022',
        dateOfCancel: '01.01.2022',
        duty: 'Оплачен',
        cause: '',
      }
    },
    pushNewItemUser(state) {
      state.registryOfUser.push(state.item)
      state.registryOfNotariusAction.push(state.item)
      state.item = {
        id: 15163,
        qr: false,
        surName: '',
        name: '',
        lastName: '',
        registryNumber: '125-8563',
        notariusAction: 'Обеспечение доказательства',
        typeOfAction: 'Постановление',
        typeOfDocument: 'Постановление о назначении экспертизы',
        applicant: '',
        status: 'Исполнен',
        dateOfCreating: '01.01.2022',
        dateOfAdd: '01.01.2022',
        dateOfCancel: '01.01.2022',
        duty: 'Оплачен',
        cause: '',
      }
      console.log(state.registryOfUser)
      console.log(state.registryOfNotariusAction)
    },
    setIsSubmit(state, data) {
      state.isSubmit = data
    },
    setKey(state, data) {
      state[data.key] = data.data
    },
    setChoosenApplicant(state, data) {
      state.choosenApplicant = data
    },
    setDateOfBirth(state, data) {
      state.dateOfBirth = data
    },
    setPersonApplicant(state, data) {
      state.personApplicant = data
    },
    setPersonNotarius(state, data) {
      state.personNotarius = data
    },
    setSideBar(state, data) {
      state.notariusSidebar = data
    },
    setUserSideBar(state, data) {
      state.userSidebar = data
    }
  },
  actions: {},
  getters: {},
})

export default store
