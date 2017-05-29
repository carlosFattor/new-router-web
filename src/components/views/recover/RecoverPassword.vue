<template>
    <div class="container container-table">
        <div class="row vertical-10p">
            <div class="container">
                <img src="/static/img/logo.png" class="center-block logo">
                <div class="text-center col-md-4 col-sm-offset-4">
                    <form action="" class="ui form loginForm" @submit.prevent="recoverCreds">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                            <input class="form-control" name="email" placeholder="email" type="email" v-model="email" required>
                        </div>
                        <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">recover</button>
                        <router-link class="btn btn-warning btn-lg" to="/login"> back </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../../services/UserService'
export default {
  name: 'recover-password',
  created () {
    this.service = new UserService(this.$resource, 'api/v1/account-rest-api/recover-password')
  },
  data: function () {
    return {
      email: ''
    }
  },
  methods: {
    recoverCreds: function () {
      this.service.recoverPass(this.email)
        .then(resp => {
          this.$toasted.success('Password recovered, check your email.')
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    }
  }
}
</script>

<style lang="scss">
.recoverForm .input-group {
  padding-bottom: 1em;
  height: 3em;
}
</style>
