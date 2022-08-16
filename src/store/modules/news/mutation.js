export const mutations = {
  getNewsRequest (state) {
    state.isFetching = true
    state.error = null
  },
  setNewsResponse (state, payload) {
    state.isFetching = false
    state.error = null
    state.news = payload
  },
  setNewsErrorRequest (state, payload) {
    state.error = payload
    state.isFetching = false
  }
}
