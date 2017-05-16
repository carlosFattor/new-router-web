<template>
  <section class="content">
      <div class="box">
        <div class="box-header with-border">
          <div class="row">
            <div class="col-sm-12">
              <button class="btn btn-primary pull-right btn-new-user" @click="newUser()">New user</button>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
            <v-server-table name="users" :url="url" :columns="columns" :options="options">
              <template slot="avatar" scope="props">
                <img :src="props.row.avatar" class="img-avatar">
              </template>
              <template slot="createdAt" scope="props">
                <span>{{props.row.createdAt | prettyDate}}</span>
              </template>
              <template slot="confirmed" scope="props">
                <span>{{props.row.confirmed}}</span>
              </template>
              <template slot="edit" scope="props">
                <div>
                    <button class="btn btn-primary btn-xs" @click="edit(props.row)">Edit</button>
                </div>
              </template>
            </v-server-table>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script src="./Users.js">
</script>

<style src="./Users.scss" lang="scss">
</style>
