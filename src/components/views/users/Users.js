import SidebarLeft from '../../shared/sideBarLeft/SidebarLeft.vue'

export default {
  name: 'Users',
  components: {
    SidebarLeft
  },
  data: function () {
    return {
      url: 'api/v1/account-rest-api/account/users',
      columns: ['firstName', 'email', 'gender', 'confirmed', 'createdAt', 'edit'],
      options: {
        perPage: 5,
        perPageValues: [5, 10, 15, 20],
        columnsDisplay: {
          avatar: 'desktop',
          createdAt: 'desktop',
          gender: 'desktop',
          confirmed: 'desktop'
        }
      },
      size: 0,
      title: 'User info'
    }
  },
  computed: {
    isAdmin: function () {
      return this.$store.state.isAdmin
    },
    row: function () {
      return this.$store.state.tableRow
    }
  },
  methods: {
    edit: function (row) {
      this.$router.push('/users/updateuser/' + row.email)
    },
    newUser: function () {
      this.$router.push('/users/newuser')
    },
    hideBar: function () {
      this.size = 0
    },
    showBar: function () {
      this.size = 250
    }
  }
}
