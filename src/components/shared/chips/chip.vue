<template>
    <span class="chip"><p> {{role}}  <a v-on:click="trigger" :type="type" ><i class="fa fa-times" aria-hidden="true"></i></a></p></span>
</template>
<script>
export default {
  props: {
    'role': {
      required: true,
      type: String
    },
    'type': {
      required: true,
      type: String
    },
    'event': {
      required: true,
      type: String
    }
  },
  methods: {
    trigger: function () {
      this.$emit(this.event, this.role)
    }
  }
}
</script>

<style lang="scss">
.chip {
    display: inline-block;
    padding: 5px 10px 0px 10px;
    height: 25px;
    font-size: 10px;
    border-radius: 25px;
    background-color: #f1f1f1;
}
.chip i {
    margin-left: 3px;
}
</style>
