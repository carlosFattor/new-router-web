<template>
  <aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="pictureUrl" />
        </div>
        <div class="pull-left info">
          <div>
            <p class="white">{{ displayName }}</p>
          </div>
          <a href="javascript:;">
            <i class="fa fa-circle text-success"></i> Online
          </a>
        </div>
      </div>
      <div class="sidebar-menu">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-link btn-link-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <small><i class="fa fa-rocket" aria-hidden="true"></i></small>
            <span class="page user-info">{{role}}</span><span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/profile">
                <!-- Message title and timestamp -->
                <h5>
                  <small><i class="fa fa-cogs" aria-hidden="true"></i></small>
                  Profile
                </h5>
              </router-link>
            </li>
            <li>
              <router-link to="/profile">
                <!-- Message title and timestamp -->
                <h5>
                  <small><i class="fa fa-address-card-o" aria-hidden="true"></i></small>
                  Contacts
                </h5>
              </router-link>
            </li>
            <li>
              <router-link to="/profile">
                <!-- Message title and timestamp -->
                <h5>
                  <small><i class="fa fa-envelope-o" aria-hidden="true"></i></small>
                  Mailbox
                </h5>
              </router-link>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a @click="logout()" role="button">
                <!-- Message title and timestamp -->
                <h5>
                  <small><i class="fa fa-sign-out" aria-hidden="true"></i></small>
                  Logout
                </h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- search form (Optional) -->
      <form v-on:submit.prevent class="sidebar-form">
        <div class="input-group">
          <input type="text"
            name="search"
            id="search"
            class="search form-control"
            data-toggle="hideseek" p
            laceholder="Search Menus"
            data-list=".sidebar-menu">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <sidebar-menu />
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
import SidebarMenu from './SidebarMenu'

export default {
  name: 'Sidebar',
  props: ['displayName', 'pictureUrl', 'role'],
  components: { SidebarMenu },
  methods: {
    logout () {
      if (window.localStorage) {
        window.localStorage.clear()
      }
      this.$router.push('/login')
    }
  }
}
</script>
<style>
  .user-panel .image img {
    border-radius: 50%;
  }
  .user-info {
    font-size: 11px;
  }
  .nav-header .text-muted {
    color: #8095a8;
  }
  .block {
    display: block !important;
  }
  .sidebar-toggle:selected {
    .user-info {
      display: none!important;
    }
  }
</style>
