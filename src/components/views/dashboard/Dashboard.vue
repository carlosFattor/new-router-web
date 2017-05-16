<template>
  <section class="content">
        <div class="box">
          <div class="box-header with-border">
            <div class="row">
              <div class="col-sm-12">
                <button class="btn btn-w-m btn-primary"
                        @click="$modal.show('hello-world')">
                  Primary
                </button>
                <button class="btn btn-w-m btn-default"
                        @click="$modal.show('hello-world')">
                  Default
                </button>
                <button class="btn btn-w-m btn-success"
                        @click="$modal.show('hello-world')">
                  Success
                </button>
                <button class="btn btn-w-m btn-info"
                        @click="$modal.show('hello-world')">
                  Info
                </button>
                <button class="btn btn-w-m btn-warning"
                        @click="$modal.show('hello-world')">
                  Warning
                </button>
                <button class="btn btn-w-m btn-danger"
                        @click="$modal.show('hello-world')">
                  Danger
                </button>
                <button class="btn btn-w-m btn-link"
                        @click="$modal.show('hello-world')">
                  Link
                </button>
              </div>
            </div>
          </div>
      </div>
      <modal name="hello-world">
        hello, world!
      </modal>
    </section>
</template>

<script srr="./Dashboard.js">
</script>
<style src="./Dashboard.scss" lang="scss">
</style>
