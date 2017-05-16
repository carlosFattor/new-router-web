<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss">
html, body, .container-table {
    font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background-color: #2f4050;
    font-size: 13px;
    color: #676a6c;
    overflow-x: hidden;
}
@media (max-width: 768px) {
  .main-header .logo {
    display: none!important;
  }  
}
.skin-blue .main-header .logo {
    background-color: transparent;
}
.skin-blue .main-header .logo:hover {
    background-color: transparent;
}
.skin-blue .main-header .navbar .sidebar-toggle:hover {
    background-color: transparent;
}
.skin-blue .sidebar-form {
    border-radius: 3px;
    border: 1px solid #374850;
    margin: 1px 10px;
}
.main-header .sidebar-toggle {
    font-size: 15px!important;
}
.box {
  border-top: 1px solid #D2D6DE;
}
.skin-blue .main-header .navbar {
    background-color: transparent;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
.float-e-margins .btn {
    margin-bottom: 5px;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }
  .btn-group-xs>.btn, .btn-xs {
    padding: 1px 5px;
    font-size: 12px;
    line-height: 1.5;
    border-radius: 3px;
  }
  .btn-w-m {
    min-width: 120px;
  }
  .btn-default {
    color: inherit;
    background: white;
    border: 1px solid #e7eaec;
  }
  .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, .btn-default:active:focus, .btn-default:active:hover, .btn-default.active:hover, .btn-default.active:focus {
    color: inherit;
    border: 1px solid #d2d2d2;
  }
  .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, .btn-default:active:focus, .btn-default:active:hover, .btn-default.active:hover, .btn-default.active:focus {
    color: inherit;
    border: 1px solid #d2d2d2;
  }
  .btn-default:hover, .btn-default:focus, .btn-default:active, .btn-default.active, .open .dropdown-toggle.btn-default, .btn-default:active:focus, .btn-default:active:hover, .btn-default.active:hover, .btn-default.active:focus {
    color: inherit;
    border: 1px solid #d2d2d2;
  }
  .btn-primary {
    background-color: #1ab394;
    border-color: #1ab394;
    color: #FFFFFF;
  }
  .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary {
    background-image: none;
  }
  .btn:focus {
    outline: none !important;
  }
  .float-e-margins .btn {
    margin-bottom: 5px;
  }
  .btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open .dropdown-toggle.btn-primary, .btn-primary:active:focus, .btn-primary:active:hover, .btn-primary.active:hover, .btn-primary.active:focus {
    background-color: #18a689;
    border-color: #18a689;
    color: #FFFFFF;
  }
  .btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success {
    background-image: none;
  }
  .btn:focus {
    outline: none !important;
  }
  .btn-success {
    background-color: #1c84c6;
    border-color: #1c84c6;
    color: #FFFFFF;
  }
  .btn-success:hover, .btn-success:focus, .btn-success:active, .btn-success.active, .open .dropdown-toggle.btn-success, .btn-success:active:focus, .btn-success:active:hover, .btn-success.active:hover, .btn-success.active:focus {
    background-color: #1a7bb9;
    border-color: #1a7bb9;
    color: #FFFFFF;
  }
  .btn-success {
    background-color: #1c84c6;
    border-color: #1c84c6;
    color: #FFFFFF;
  }
  .btn-info {
    background-color: #23c6c8;
    border-color: #23c6c8;
    color: #FFFFFF;
  }
  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info, .btn-info:active:focus, .btn-info:active:hover, .btn-info.active:hover, .btn-info.active:focus {
    background-color: #21b9bb;
    border-color: #21b9bb;
    color: #FFFFFF;
  }
  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info, .btn-info:active:focus, .btn-info:active:hover, .btn-info.active:hover, .btn-info.active:focus {
    background-color: #21b9bb;
    border-color: #21b9bb;
    color: #FFFFFF;
  }
  .btn-info:hover, .btn-info:focus, .btn-info:active, .btn-info.active, .open .dropdown-toggle.btn-info, .btn-info:active:focus, .btn-info:active:hover, .btn-info.active:hover, .btn-info.active:focus {
    background-color: #21b9bb;
    border-color: #21b9bb;
    color: #FFFFFF;
  }
  .btn-info {
    background-color: #23c6c8;
    border-color: #23c6c8;
    color: #FFFFFF;
  }
  .btn-warning {
    background-color: #f8ac59;
    border-color: #f8ac59;
    color: #FFFFFF;
  }
  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning, .btn-warning:active:focus, .btn-warning:active:hover, .btn-warning.active:hover, .btn-warning.active:focus {
    background-color: #f7a54a;
    border-color: #f7a54a;
    color: #FFFFFF;
  }
  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning, .btn-warning:active:focus, .btn-warning:active:hover, .btn-warning.active:hover, .btn-warning.active:focus {
    background-color: #f7a54a;
    border-color: #f7a54a;
    color: #FFFFFF;
  }
  .btn-warning:hover, .btn-warning:focus, .btn-warning:active, .btn-warning.active, .open .dropdown-toggle.btn-warning, .btn-warning:active:focus, .btn-warning:active:hover, .btn-warning.active:hover, .btn-warning.active:focus {
    background-color: #f7a54a;
    border-color: #f7a54a;
    color: #FFFFFF;
  }
  .btn-warning {
    background-color: #f8ac59;
    border-color: #f8ac59;
    color: #FFFFFF;
  }
  .btn-danger {
    background-color: #ed5565;
    border-color: #ed5565;
    color: #FFFFFF;
  }
  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger, .btn-danger:active:focus, .btn-danger:active:hover, .btn-danger.active:hover, .btn-danger.active:focus {
    background-color: #ec4758;
    border-color: #ec4758;
    color: #FFFFFF;
  }
  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger, .btn-danger:active:focus, .btn-danger:active:hover, .btn-danger.active:hover, .btn-danger.active:focus {
    background-color: #ec4758;
    border-color: #ec4758;
    color: #FFFFFF;
  }
  .btn-danger:hover, .btn-danger:focus, .btn-danger:active, .btn-danger.active, .open .dropdown-toggle.btn-danger, .btn-danger:active:focus, .btn-danger:active:hover, .btn-danger.active:hover, .btn-danger.active:focus {
    background-color: #ec4758;
    border-color: #ec4758;
    color: #FFFFFF;
  }
  .btn-link {
    color: inherit;
  }
  .btn-link-dark {
    color: #fff!important;
  }
  .btn-link:hover, .btn-link:focus, .btn-link:active, .btn-link.active, .open .dropdown-toggle.btn-link {
    color: #1ab394;
    text-decoration: none;
  }
  .btn-link:hover, .btn-link:focus, .btn-link:active, .btn-link.active, .open .dropdown-toggle.btn-link {
    color: #1ab394;
    text-decoration: none;
  }
  .btn-link:hover, .btn-link:focus, .btn-link:active, .btn-link.active, .open .dropdown-toggle.btn-link {
    color: #1ab394;
    text-decoration: none;
  }
  .btn-link, .btn-link:active, .btn-link:focus, .btn-link:hover {
    border-color: transparent;
  }
</style>
