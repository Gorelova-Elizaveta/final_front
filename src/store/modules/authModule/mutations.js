export const mutations = {
  getNewUser (state) {
    state.isFetching = true
    state.error = null
  },
  setNewsUser (state, payload) {
    state.userAuth = payload
    state.isFetching = false
    state.error = null
  },
  setUsersErrorRequest (state, payload) {
    state.error = payload
    state.isFetching = false
  },
  setToggleModal(state, payload) {
    state.toggleModal = payload;
  },
  
}