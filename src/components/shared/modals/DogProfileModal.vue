<template>
  <modal name="dog-profile"
         classes="cute-dog-profile-photo"
         transition="scale"
         :height="260"
         :width="260"
         @opened="opened">
    <img src="/static/img/cute_dog.gif" />
  </modal>
</template>
<script>
export default {
  name: 'InputFocusModal',
  methods: {
    opened (event) {
      console.log('teste')
    }
  }
}
</script>
<style lang="scss">
  .cute-dog-profile-photo {
    background-color: transparent;
    border-radius: 100%;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.65);
    img {
      width: 260px;
      height: 260px;
    }
  }
  .scale-enter-active,
  .scale-leave-active {
    transition: all 0.5s;
  }
  .scale-enter,
  .scale-leave-active {
    opacity: 0;
    transform: scale(0.3) translateY(24px);
  }
</style>
