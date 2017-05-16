export class User {
  constructor (name = '', avatar = '', email = '', role = '') {
    this.name = name
    this.avatar = avatar
    this.email = email
    this.role = role
  }
}

export class UserInfo {
  constructor (messages = [], notifications = [], tasks = []) {
    this.messages = messages
    this.notifications = notifications
    this.tasks = tasks
  }
}

export const EnumUserType = {
  DEFAULT: {value: 0, name: 'DEFAULT', code: 'DE'},
  ADMIN: {value: 1, name: 'ADMIN', code: 'AD'},
  DRIVER: {value: 2, name: 'DRIVER', code: 'DR'},
  OPERATOR: {value: 3, name: 'OPERATOR', code: 'OP'}
}
