import Vue from 'vue'

export default class Auth {

  constructor (resource) {
    this._resource = resource('api/v1/account-rest-api/refresh-token')
  }
  checkExpiredToken (res, req) {
    const self = this
    return new Promise(function (resolve, reject) {
      if (res.status === 401 && res.body.tokenException === 'GEN-TOKEN-EXPIRED') {
        self._refreshToken(this, req)
            .then(function (response) {
              resolve(response)
            }, error => {
              console.log(error)
            })
      }
    })
  }

  _refreshToken (context, request) {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    const self = this
    return new Promise(function (resolve, reject) {
      self._resource.save({'email': self.user['email']})
      .then(function (response) {
        window.localStorage.setItem('token', 'Bearer ' + response.body.data.token)
        Vue.http(request).then(function (newResponse) {
          resolve(newResponse)
        })
      }, function (newResponse) {
        window.localStorage.clear()
        self.router.go('/')
        reject(newResponse)
      })
    })
  }
}
