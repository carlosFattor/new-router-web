import DogProfileModal from '../../shared/modals/DogProfileModal.vue'
import MyModal from '../../shared/modals/MyModal.vue'

export default {
  name: 'dashboard',
  components: {
    DogProfileModal,
    'my-modal': MyModal
  },
  data: function () {
    return {
      animation: 'slide-down',
      show: false,
      delay: 10,
      draggable: true,
      transition: 'scale',
      height: 260,
      width: 260
    }
  },
  methods: {
    showModal () {
      this.show = true
    },
    opened (event) {
    }
  }
}
