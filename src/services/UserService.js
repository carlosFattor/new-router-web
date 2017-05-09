export default class UserService {
  constructor (resource, url = 'api/v1/account-rest-api/users') {
    this._resource = resource(url)
  }

  recoverPass (email) {
    return this._resource.save({email})
      .then(resp => resp.json())
      .catch(error => {
        throw new Error(error.body.error)
      })
  }

  rootFindUser (email) {
    return this._resource.get({email})
        .then(res => res.json())
        .catch(() => {
          throw new Error('It is not possible find user')
        })
  }

  findUser (email) {
    return this._resource.get({email})
        .then(res => res.json())
        .catch(() => {
          throw new Error('It is not possible find user')
        })
  }
  updateProfile (profile) {
    return this._resource.update(profile)
      .then(res => {
        console.log(res)
      })
      .catch(() => {
        throw new Error('Error tryng update profile')
      })
  }
  createUser (profile) {
    return this._resource.save(profile)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        throw new Error(error.body.error)
      })
  }
}
