export const state = () => ({
  toggleModal: false,
  isFetching: false,
  userAuth: {},
  error: null,
  isLoggedIn: Boolean(localStorage.getItem('token'))
})