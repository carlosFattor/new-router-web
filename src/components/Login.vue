<template>
  <div class="container container-table">
      <div class="row vertical-10p">
        <div class="container">
          <img src="/static/img/logo.png" class="center-block logo">
          <div class="text-center col-md-4 col-sm-offset-4">
            <!-- login form -->
            <form class="ui form loginForm"  @submit.prevent="checkCreds">

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input class="form-control" name="email" placeholder="email" type="text" v-model="email">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
              </div>
              <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">Submit</button>
            </form>

            <!-- errors -->
            <div v-if=response class="text-red"><p>{{response}}</p></div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
  name: 'Login',
  created () {
    this.service = new LoginService(this.$resource)
  },
  data (router) {
    return {
      section: 'Login',
      loading: '',
      email: '',
      password: '',
      response: ''
    }
  },
  methods: {
    checkCreds () {
      const {email, password} = this

      this.toggleLoading()
      this.resetResponse()
      this.$store.commit('TOGGLE_LOADING')
      const params = {email, password}
      this.service.login(params)
      .then(response => {
        this.toggleLoading()
        var data = response.data
        if (data.error) {
          var errorName = data.error.name
          if (errorName) {
            this.response = errorName === 'InvalidCredentialsError'
            ? 'email/Password incorrect. Please try again.'
            : errorName
          } else {
            this.response = data.error
          }

          return
        }

        /* Setting user in the state and caching record to the localStorage */
        if (data.user) {
          const token = 'Bearer ' + data.token
          const isAdmin = data.isAdmin || null
          this.$store.commit('SET_USER', data.user)
          this.$store.commit('SET_TOKEN', token)
          if (isAdmin) {
            data.user.isAdmin = isAdmin
          }

          if (window.localStorage) {
            window.localStorage.setItem('user', JSON.stringify(data.user))
            window.localStorage.setItem('token', token)
          }
          this.$router.push('/' + data.redirect)
        }
      })
      .catch(() => {
        this.$store.commit('TOGGLE_LOADING')
        this.response = 'email/Password incorrect. Please try again.'
        this.toggleLoading()
      })
    },
    toggleLoading () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse () {
      this.response = ''
    }
  }
}
</script>

<style>
html, body, .container-table {
  height: 100%;
  background-color: #282B30 !important;
}
.container-table {
    display: table;
    color: white;
}
.vertical-center-row {
    display: table-cell;
    vertical-align: middle;
}
.vertical-20p {
  padding-top: 20%;
}
.vertical-10p {
  padding-top: 10%;
}
.logo {
  width: 15em;
  padding: 3em;
}
.loginForm .input-group {
  padding-bottom: 1em;
  height: 3em;
}
.input-group input {
  height: 3em;
}
</style>
