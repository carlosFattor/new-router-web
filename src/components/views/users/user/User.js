import ImgResp from '../../../shared/ImgResp.vue'
import UserService from '../../../../services/UserService'
import {EnumUserType} from '../../../../models/User'
import chip from '../../../shared/chips/chip.vue'

export default {
  name: 'User',
  created () {
    this.email = this.$route.params.email
    this.service = new UserService(this.$resource, 'api/v1/account-rest-api/account/users')
    if (this.email) {
      this.findUSer(this.email)
    }
  },
  components: {
    'img-resp': ImgResp,
    chip
  },
  data: function () {
    return {
      roles: [],
      userTypes: EnumUserType,
      user: {
        avatar: 'https://api.adorable.io/avatars/' + new Date().getTime()
      }
    }
  },
  computed: {
  },
  methods: {
    removeRole: function (value) {
      this.roles = this.roles.filter(_r => {
        return _r !== value
      })
      console.log(this.user.roles)
    },
    createUser () {
      this.$validator.validateAll()
        .then(() => {
          this.service.createUser(this.user)
            .then(() => {
              this.$toasted.success('Successfully created', {
                duration: 3000
              })
            }).catch((error) => {
              this.$toasted.error(error)
            })
        })
        .catch(() => {
          this.$toasted.error('Please,fill all fields.')
        })
    },
    findUSer (email) {
      this.service.rootFindUser(email)
        .then(resp => {
          resp.email = email
          this.user = resp
          for (let i = 0; i < resp.roles.length; i++) {
            this.roles[i] = resp.roles[i]
          }
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    updateUser () {
      this.$validator.validateAll()
      .then(() => {
        if (this.roles.length > 0 || this.user.roles) {
          const _role = this.user.roles
          if (_role) {
            this.roles.push(_role)
          }
          this.user['roles'] = this.roles
          this.service.updateProfile(this.user)
            .then(resp => {
              this.$toasted.success('Update success', {
                duration: 3000
              })
            }).catch(() => {
              this.$toasted.error('Error tryng update profile')
            })
        } else {
          this.$toasted.error('Role is necessary.')
        }
      })
    }
  }
}
