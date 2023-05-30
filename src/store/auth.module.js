import AuthService from '../services/auth.service';


const initialState = {
  user :{
    username: '',
    password: ''
  },
  isLoggedIn : false,
  data : {
    name : null,
    id : null,
    group: {
      name: null,
      id: null,
      $version: null
    },
    $wkfStatus: null
  }
}

export const Auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, user) {
      return AuthService.login(user).then(
        user => {
          console.log('loginSuccess')
          commit('loginSuccess', user, true);
          return Promise.resolve(user);
        },
        error => {
          console.log('loginFailure')
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
    getRole( {commit }, user) {
      return AuthService.getRole(user).then(
        data => {
          console.log('Success ' + data)
          commit('getRoleSuccess', data);
          return Promise.resolve(user);
        },
        error => {
          console.log('getRoleFailure')
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    loginSuccess(state, user, isLoggedIn) {
      state.user = user;
      state.isLoggedIn = isLoggedIn;
    },
    loginFailure(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
    getRoleSuccess(state, data) {
      state.data = data;
    }
  },
  getters: {
    GET_ROLE: state => {
      return state.auth.data.group.name;
    }
  }
};
