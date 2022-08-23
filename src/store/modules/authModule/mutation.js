export const mutations = {
  setNewUser (state) {
    state.isFetching = true
    state.error = null
  },
  setUsersErrorRequest (state, payload) {
    state.error = payload
    state.isFetching = false
  } 
}