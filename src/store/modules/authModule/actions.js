import api from '@/api/api'

const USER_REGISTRATION_PATH = '/users'
const USER_SESSION_PATH = '/sign_in'

export const actions = {
  async getUserAuth ({ commit }, payload) {
    console.log('userAuth', payload)
    try {
      commit('getNewUser')
      const data = await api.post(USER_REGISTRATION_PATH, { user: payload })
console.log(data)
      // commit('setNewUserRequest', data)
    } catch ({ response }) {
      const currentError = response.data.message ? response.data.message : response.statusText
      commit('setRequestError', currentError)
    }
  },
  toggleModal({ commit }, payload) {
    commit('setToggleModal', payload);
  }
}


