export const getters = {
  // getToggleModal: state => state.toggleModal,
  // getTypeModal: state => state.typeModal,
  // getUserAuth: state => state.userAuth,
  // getErrorAuth: state => state.error,
  // getUserIsLoggedIn: state => state.isLoggedIn
  getNewUser: state => state.isFetching,
  setUsersErrorRequest: state => state.error,
  setNewUserRequest: state => state.userAuth,
  getToggleModal: state => state.toggleModal
}