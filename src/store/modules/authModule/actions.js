import api from '@/api/api'

const USER_REGISTRATION_PATH = '/users'
const USER_SESSION_PATH = 'users/sign_in'

export const actions = {
  async getUserAuth ({ commit }, {user, type}) {

    const currentPath = type === 'login'
    ? USER_SESSION_PATH
    : USER_REGISTRATION_PATH;
    
    try {
      commit('getNewUser')
      const { data, headers } = await api.post(`${currentPath}`, { user });
    if (headers.authorization){
    localStorage.setItem('token', headers.authorization)
    }
    } catch ({ response }) {
      const currentError = response.data.message ? response.data.message : response.statusText
      commit('setUsersErrorRequest', currentError)
    }
  },
  toggleModal({ commit }, payload) {
    commit('setToggleModal', payload);
  },

}


