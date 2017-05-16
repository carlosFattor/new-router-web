
export default {
  name: 'Users',
  data: function () {
    return {
      url: 'api/v1/account-rest-api/account/users',
      columns: ['avatar', 'firstName', 'email', 'gender', 'confirmed', 'createdAt', 'edit'],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        columnsDisplay: {
          'gender': 'desktop',
          'createdAt': 'desktop'
        }
      }
    }
  },
  methods: {
    edit: function (row) {
      this.$router.push('/users/updateuser/' + row.email)
    },
    newUser: function () {
      this.$router.push('/users/newuser')
    }
  }
}
