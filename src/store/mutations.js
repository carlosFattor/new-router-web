export default {
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  LOGIN (state) {
    state.pending = true
  },
  LOGIN_SUCCESS (state) {
    state.isLoggedIn = true
    state.pending = false
  },
  LOGOUT (state) {
    state.isLoggedIn = false
  }
}
