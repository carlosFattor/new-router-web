<template>
  <ul class="sidebar-menu">
    <li class="header">MENU</li>
    <li class="active pageLink" v-on:click="toggleMenu">
      <router-link to="/"><i class="fa fa-desktop" aria-hidden="true"></i>
        <span class="page">Dashboard</span>
      </router-link>
    </li>
    <li class="header" v-if="isAdmin">ADMIN</li>
    <li class="pageLink" v-if="isAdmin" v-on:click="toggleMenu">
      <router-link to="/users"><i class="fa fa-tasks" aria-hidden="true"></i>
        <span class="page">Users</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'SidebarName',
  methods: {
    toggleMenu (event) {
      const active = document.querySelector('li.pageLink.active')
      if (active) {
        active.classList.remove('active')
      }
      event.toElement.parentElement.className = 'pageLink active'
    }
  },
  computed: {
    isAdmin () {
      return this.$store.state.isAdmin
    }
  },
  data: function () {
    return {
    }
  }
}
</script>
<style>
  /* override default */
  .sidebar-menu>li>a {
    padding: 12px 15px 12px 15px;
  }

  .sidebar-menu li.active>a>.fa-angle-left, .sidebar-menu li.active>a>.pull-right-container>.fa-angle-left {
    animation-name: rotate;
    animation-duration: .2s;
    animation-fill-mode: forwards;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-90deg);
    }
  }
</style>
