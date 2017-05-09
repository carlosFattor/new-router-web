const _user = JSON.parse(window.localStorage.getItem('user')) || {}

export default {
  user: _user,
  token: window.localStorage.getItem('token'),
  isAdmin: _user.isAdmin || false
}
