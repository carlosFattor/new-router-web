<template>
  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <div class="box-body row">
            <div class="col-md-2 col-sm-3 col-xs-12 avatar">
              <img-resp :url="user.avatar" :title="email" class="img-rounded"></img-resp>
              <button class="btn btn-warning btn-sm btn-avatar">change picture</button>
            </div>
            <hr class="visible-xs-block">
            <div class="col-md-10 col-sm-9 col-xs-12">
              <form class="form-horizontal" autocomplete="off">
                <div class="form-group">
                  <label for="email" class="col-sm-1 control-label">Email</label>
                  <div class="col-sm-7">
                    <input data-vv-as="email" name="email" id="email" v-validate data-vv-rules="required|email" type="email" class="form-control" placeholder="Email" v-model="user.email">
                    <span class="error" v-show="errors.has('email')">{{errors.first('email')}}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="name" class="col-sm-1 control-label">Name</label>
                  <div class="col-sm-7">
                    <input data-vv-as="name" id="name" name="name" v-validate data-vv-rules="required|min:3|max:30" type="text" class="form-control"  placeholder="Name" v-model="user.firstName">
                    <span class="error" v-show="errors.has('name')">{{errors.first('name')}}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="lastName" class="col-sm-1 control-label">Last name</label>
                  <div class="col-sm-7">
                    <input data-vv-as="lastName" id="lastName" name="lastName" v-validate data-vv-rules="required|min:3|max:30" type="text" class="form-control" placeholder="Last name" v-model="user.lastName">
                    <span class="error" v-show="errors.has('lastName')">{{errors.first('lastName')}}</span>
                  </div>
                </div>
                <div class="form-group" v-if="!email">
                  <label for="password" class="col-sm-1 control-label">password</label>
                  <div class="col-sm-7">
                    <input data-vv-as="password" id="password" name="password" v-validate data-vv-rules="required|min:3|max:30" type="password" class="form-control" placeholder="Password" v-model="user.password">
                    <span class="error" v-show="errors.has('password')">{{errors.first('password')}}</span>
                  </div>
                </div> 
                <div class="form-group">
                  <label for="chips" class="col-sm-1 control-label">User roles</label>
                  <div class="col-sm-1" v-for="_role in roles">
                    <chip :role="_role" type="button" v-on:remove_role="removeRole" event="remove_role"></chip>
                  </div>
                </div>
                <div class="form-group">
                  <label for="role" class="col-sm-1 control-label">Add role</label>
                  <div class="col-sm-2">
                    <select name="role" id="role" class="form-control" v-model="user.roles">
                      <option v-for="_type in userTypes" v-bind:value="_type.name">
                        {{_type.name}}
                      </option>
                    </select>
                  </div>
                </div> 
                <div class="form-group">
                  <span class="col-sm-1"></span>
                  <div class="col-sm-3">
                    <button v-if="!email" @click.prevent="createUser()" class="btn btn-primary btn-sm">Create</button>
                    <button v-if="email" @click.prevent="updateUser()" class="btn btn-primary btn-sm">Update</button>
                    <router-link to="/users" class="btn btn-danger btn-sm">Cancel</router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script src="./User.js">
</script>

<style src="./User.scss" lang="scss">
</style>
