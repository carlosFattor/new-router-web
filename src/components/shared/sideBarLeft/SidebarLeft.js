export default {
  name: 'sidebar',
  props: {
    size: {
      required: true,
      type: Number
    },
    event: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    closeNav: function () {
      this.$emit(this.event)
    },
    openNav: function () {
      this.size = 0
    }
  }
}
