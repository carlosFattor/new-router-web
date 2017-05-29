<template>
    <div class="container container-table">
        <div class="row vertical-10p">
            <div class="container">
                <img src="/static/img/logo.png" class="center-block logo">
                <div v-show="user.firstName" class="text-center col-md-4 col-sm-offset-4">
                    <h1>Olá {{user.firstName + ' ' + user.lastName}}</h1>
                    <h4>Este é o seu primeiro acesso, por-favor, cadastre a sua senha.</h4>
                    <form class="ui form loginForm" @submit.prevent="updatePassword">
                        <div class="input-group">
                            <span class="input-group-addon"><i class="fa fa-unlock"></i></span>
                            <input type="password" class="form-control" id="password" name="password" data-vv-as="password" v-validate data-vv-rules="min:6|max:30" placeholder="new password" v-model="password">
                            <span class="error" v-show="errors.has('password')">{{errors.first('password')}}</span>
                        </div>
                        <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">update</button>
                        <router-link class="btn btn-warning btn-lg" to="/login"> back </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from '../../../../services/UserService'
export default {
  name: 'active-user',
  created () {
    this.token = this.$route.params.token
    this.service = new UserService(this.$resource, 'api/v1/account-rest-api/users/active/' + this.token)
    this.service.findUserByToken(this.token)
      .then(res => {
        this.user = res
      })
      .catch(error => {
        this.$toasted.error(error)
      })
  },
  data: function () {
    return {
      password: '',
      user: {}
    }
  },
  methods: {
    updatePassword: function () {
      this.user.password = this.password
      this.service.updatePassword(this.user)
        .then(resp => {
          this.$toasted.success('Password updated.')
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
