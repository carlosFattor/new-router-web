export default class LoginService {
  constructor (resource) {
    this._resource = resource('api/v1/account-rest-api/login')
  }

  login (params) {
    return this._resource.save(params)
        .then(res => res.json(),
        () => {
          throw new Error('It is not possible logging')
        })
  }
}
