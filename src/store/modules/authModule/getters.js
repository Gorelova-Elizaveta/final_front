export const getters = {
  getNewUser: state => state.isFetching,
  setUsersErrorRequest: state => state.error,
  setNewUserRequest: state => state.userAuth,
  getToggleModal: state => state.toggleModal
}