export default {
  name: 'my-modal',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 240
    },
    duration: {
      type: Number,
      default: 300
    },
    measure: {
      type: String,
      default: 'px'
    },
    animation: {
      type: String,
      default: 'slide-left'
    },
    mask: {
      type: Boolean,
      default: true
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        animationDuration: `${this.duration}ms`,
        webkitAnimationDuration: `${this.duration}ms`
      }
    },
    dialogStyle () {
      return {
        width: `${this.width + this.measure}`,
        height: `${this.height + this.measure}`
      }
    }
  },
  methods: {
    onEsc () {
      this.show && this.$emit('hide')
    }
  },
  watch: {
    show (show) {
      show && this.$nextTick(() => {
        this.$el.focus()
      })
    }
  }
}
