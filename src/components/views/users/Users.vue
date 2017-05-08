<template>
  <section class="content">
      <div class="col-sm-12">
        <div class="box">
          <div class="box-header with-border">
          <button class="btn btn-primary pull-right" @click="newUser()">New user</button>
          <v-server-table name="users" :url="url" :columns="columns" :options="options">
            <template slot="avatar" scope="props">
              <img :src="props.row.avatar" class="img-avatar">
            </template>
            <template slot="createdAt" scope="props">
              <span>{{props.row.createdAt | prettyDate}}</span>
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
  </section>
</template>

<script src="./Users.js">
</script>

<style src="./Users.scss" lang="scss">
</style>