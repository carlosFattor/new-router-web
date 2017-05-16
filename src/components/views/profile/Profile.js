import UserService from '../../../services/UserService'
import ImgResp from '../../shared/ImgResp'
import chip from '../../shared/chips/chip.vue'

export default {
  name: 'Profile',
  components: {
    'img-resp': ImgResp,
    chip
  },
  created () {
    this.service = new UserService(this.$resource)
    const email = JSON.parse(window.localStorage.getItem('user'))['email']
    if (email) {
      this.service.findUser(email)
        .then(res => {
          this.user = res
          this.user['email'] = email
        })
    }
  },
  data: function () {
    return {
      user: {},
      password: null
    }
  },
  methods: {
    updateUser () {
      this.$validator.validateAll()
      .then(() => {
        if (this.password) {
          this.user.password = this.password
        }
        this.service.updateProfile(this.user)
          .then(resp => {
            this.$toasted.success('Update success', {
              duration: 3000
            })
          }).catch(() => {
            this.$toasted.error('Error tryng update profile')
          })
      })
      .catch(() => {
        this.$toasted.error('Error tryng update profile')
      })
    }
  }
}
