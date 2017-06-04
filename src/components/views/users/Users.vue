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
              <v-server-table name="users" :url="url" :columns="columns" :options="options" >
                <template slot="avatar" scope="props">
                  <img :src="props.row.avatar" class="img-avatar" @click="showBar">
                </template>
                <template slot="firstName" scope="props">
                  <div v-on:click="showBar">
                    <span>{{props.row.firstName}}</span>
                  </div>
                </template>
                <template slot="email" scope="props">
                  <div v-on:click="showBar">
                    <span>{{props.row.email}}</span>
                  </div>
                </template>
                <template slot="gender" scope="props">
                  <div v-on:click="showBar">
                    <span>{{props.row.gender}}</span>
                  </div>
                </template>
                <template slot="createdAt" scope="props">
                  <div v-on:click="showBar">
                    <span>{{props.row.createdAt | prettyDate}}</span>
                  </div>
                </template>
                <template slot="confirmed" scope="props">
                  <div v-on:click="showBar">
                    <span>{{props.row.confirmed}}</span>
                  </div>
                </template>
                <template slot="edit" scope="props">
                    <button class="btn btn-primary btn-xs" @click="edit(props.row)"><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit"></i></button>
                    <button class="btn btn-danger btn-xs"><i class="fa fa-trash-o" aria-hidden="true" title="Delete"></i></button>
                </template>
              </v-server-table>
            </div>
          </div>
        </div>
    </div>
    <aside>
      <sidebar-left :size='size' v-on:onSidebar="hideBar" :title="title" event="onSidebar">
        <template slot="body">
          <div class="body-content">
            <div class="sidebar-info">
              <img :src="row.avatar" class="img-responsive center-block" />
              <hr>
              <div><b>NOME:</b> {{row.firstName}}</div>
              <div><b>EMAIL:</b> {{row.email}}</div>
            </div>
          </div>
        </template>
        <template slot="footer">
          <div class="sidebar-footer">
            <button class="btn btn-primary" @click="edit(row)"><i class="fa fa-pencil-square-o" aria-hidden="true" title="Edit"></i></button>
            <button class="btn btn-danger"><i class="fa fa-trash-o" aria-hidden="true" title="Delete"></i></button>
          </div>
        </template>
        
      </sidebar-left>
    </aside>
  </section>
</template>

<script src="./Users.js">
</script>

<style src="./Users.scss" lang="scss">
</style>
