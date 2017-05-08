
export default {
  name: 'Users',
  data: function () {
    return {
      url: 'api/v1/account-rest-api/account/users',
      columns: ['avatar', 'firstName', 'email', 'createdAt', 'edit'],
      options: {
        perPage: 5
      }
    }
  },
  methods: {
    edit: function (row) {
      console.log(row)
      this.$router.push('/users/updateuser/' + row.email)
    },
    newUser: function () {
      this.$router.push('/users/newuser')
    }
  }
}
