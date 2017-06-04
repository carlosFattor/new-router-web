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
  SET_IS_ADMIN (state, status) {
    state.isAdmin = status
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
    state.user = null
    state.token = null
    state.isAdmin = false
  },
  'users/ROW_CLICK' (state, event) {
    state.tableRow = event.row
  }
}
