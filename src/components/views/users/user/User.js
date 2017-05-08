import ImgResp from '../../../shared/ImgResp.vue'
import UserService from '../../../../services/UserService'

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
    'img-resp': ImgResp
  },
  data: function () {
    return {
      user: {
        avatar: 'https://api.adorable.io/avatars/' + new Date().getTime()
      }
    }
  },
  computed: {
  },
  methods: {
    createUser () {
      this.$validator.validateAll()
        .then(() => {
          console.log(this.user)
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
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    updateUser () {
      this.$validator.validateAll()
      .then(() => {
        this.service.updateProfile(this.user)
          .then(resp => {
            this.$toasted.success('Update success', {
              duration: 3000
            })
          }).catch(() => {
            this.$toasted.error('Error tryng update profile')
          })
      })
    }
  }
}
