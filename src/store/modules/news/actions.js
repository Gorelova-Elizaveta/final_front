import api from '@/api/api'

const COMPANIES_PATH = '/posts'

export const actions = {
  async requestListOfNews ({ commit }) {
    try {
      commit('getNewsRequest')
      const { data } = await api.get(COMPANIES_PATH)
      console.log('setNewsResponse')
      commit('setNewsResponse', data)
    } catch ({ response }) {
      const currentError = response.data.message
        ? response.data.message
        : response.statusText
      commit('setNewsErrorRequest', currentError)
    }
  }
}
