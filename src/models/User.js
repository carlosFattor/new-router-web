export class User {
  constructor (name = '', avatar = '', email = '') {
    this.name = name
    this.avatar = avatar
    this.email = email
  }
}

export class UserInfo {
  constructor (messages = [], notifications = [], tasks = []) {
    this.messages = messages
    this.notifications = notifications
    this.tasks = tasks
  }
}
