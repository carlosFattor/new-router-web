<template>
  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header with-border">
          <div class="box-body row">
            <div class="col-md-2 col-sm-3 col-xs-12 avatar">
              <img-resp :url="user.avatar" :title="email" class="img-rounded"></img-resp>
              <button class="btn btn-warning btn-sm btn-avatar">change picture</button>
              <div v-for="role in user.roles" class="col-md-12 col-sm-12 col-xs-3" style="margin-bottom: 5px;">
                <chip :role="role" type="button"></chip>
              </div>
            </div>
            <hr class="visible-xs-block">
            <div class="col-md-10 col-sm-9 col-xs-12">
              <form @submit.prevent="updateUser()" class="form-horizontal">
                <div class="form-group">
                  <label for="email" class="col-sm-1 control-label">Email</label>
                  <div class="col-sm-7">
                    <input type="email" class="form-control" id="email" placeholder="Email" v-model="user.email" disabled>
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
                <div class="form-group">
                  <label for="location" class="col-sm-1 control-label">Location</label>
                  <div class="col-sm-7">
                    <input type="text" class="form-control" id="location" placeholder="Location" v-model="user.location">
                  </div>
                </div>
                <div class="form-group">
                  <label for="gender" class="col-sm-1 control-label">Gender</label>
                  <div class="col-sm-3">
                    <select v-model="user.gender" name="gender" id="gender" class="form-control">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="password" class="col-sm-1 control-label">Password</label>
                  <div class="col-sm-3">
                    <input type="password" class="form-control" id="password" name="password" data-vv-as="password" v-validate data-vv-rules="min:6|max:30" placeholder="password" v-model="password">
                    <span class="error" v-show="errors.has('password')">{{errors.first('password')}}</span>
                  </div>
                </div>
                <div class="form-group">
                  <span class="col-sm-1"></span>
                  <div class="col-sm-3">
                    <button type="submit" class="btn btn-primary btn-sm">Update</button>
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

<script src='./Profile.js'>
</script>
<style src="./Profile.scss" lang="scss">
</style>
