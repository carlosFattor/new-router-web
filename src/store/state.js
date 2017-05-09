export default {
  user: JSON.parse(window.localStorage.getItem('user')),
  token: window.localStorage.getItem('token'),
  isAdmin: JSON.parse(window.localStorage.getItem('user'))['isAdmin']
}
