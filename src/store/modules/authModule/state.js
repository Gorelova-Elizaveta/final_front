export const state = () => ({
  toggleModal: false,
  // typeModal: '',
  isFetching: false,
  userAuth: {},
  error: null,
  isLoggedIn: Boolean(localStorage.getItem('token'))
})