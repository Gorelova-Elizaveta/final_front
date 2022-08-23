import api from '@/api/api'

const USER_REGISTRATION_PATH = '/users'
const USER_SESSION_PATH = '/sign_in'

export const actions = {
  async userAuth ({ commit }, payload) {
    try {
      commit('setNewUser')
      await api.post(USER_REGISTRATION_PATH)
      // await api.post(USER_REGISTRATION_PATH, { user: payload })
    } catch ({ response }) {
      const currentError = response.data.message ? response.data.message : response.statusText
      commit('setRequestError', currentError)
    }
  }
}