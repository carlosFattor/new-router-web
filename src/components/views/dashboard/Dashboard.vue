<template>
  <section class="content">
        <div class="box">
          <div class="box-header with-border">
            <div class="row">
              <div class="col-sm-12">
                <button class="btn btn-w-m btn-primary"
                        @click="$modal.show('dog-profile')">
                  Primary
                </button>
                <button class="btn btn-w-m btn-default"
                        @click="showModal()">
                  Default
                </button>
                <button class="btn btn-w-m btn-success"
                        >
                  Success
                </button>
                <button class="btn btn-w-m btn-info"
                        >
                  Info
                </button>
                <button class="btn btn-w-m btn-warning"
                        >
                  Warning
                </button>
                <button class="btn btn-w-m btn-danger"
                        >
                  Danger
                </button>
                <button class="btn btn-w-m btn-link"
                        >
                  Link
                </button>
              </div>
            </div>
          </div>
      </div>
      <dog-profile-modal
        transition="transition"
        :height="height"
        :width="width">
      </dog-profile-modal>

        <my-modal :show="show" :animation="animation" :duration="300" :closeButton="false" @hide="show = false">
          <div>A vue modal with animations.</div>
        </my-modal>
    </section>
</template>

<script src="./Dashboard.js">
</script>
<style src="./Dashboard.scss" lang="scss">
</style>
