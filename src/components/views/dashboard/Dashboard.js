
export default {

  computed: {
  },
  mounted () {
  },
  methods: {
    show () {
      this.$modal.show('hello-word')
    },
    hide () {
      this.$modal.hide('hello-world')
    }
  },
  data: function () {
    return {
      name: '',
      names: ['Carlos']
    }
  }
}
