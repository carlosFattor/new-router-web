import DashView from './components/Dash.vue'
import LoginView from './components/Login.vue'
import NotFoundView from './components/404.vue'

// Import Views - Dash
import DashboardView from './components/views/dashboard/Dashboard.vue'
import Profile from './components/views/profile/Profile.vue'
import Users from './components/views/users/Users.vue'
import Activate from './components/views/users/active/Activate.vue'

// New user
import User from './components/views/users/user/User.vue'

// Recover password
import RecoverPassword from './components/views/recover/RecoverPassword.vue'
import RecoverValidate from './components/views/recover/RecoverValidate.vue'

// Routes
const routes = [
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/recover-password',
    component: RecoverPassword
  },
  {
    path: '/recover-password/validate/:token',
    component: RecoverValidate
  },
  {
    path: '/active-user/:token',
    component: Activate
  },
  {
    path: '/',
    component: DashView,
    meta: {
      auth: true
    },
    children: [
      {
        path: '/profile',
        component: Profile,
        name: 'Profile',
        meta: {description: 'User information'}
      },
      {
        path: '/dashboard',
        alias: '',
        component: DashboardView,
        name: 'Dashboard',
        meta: {
          description: 'Overview of environment'
        }
      },
      {
        path: '/users',
        alias: '',
        component: Users,
        name: 'Users',
        meta: {
          description: 'List of system users'
        }
      },
      {
        path: '/users/newuser',
        alias: '',
        component: User,
        name: 'User',
        meta: {
          description: 'Creating new user'
        }
      },
      {
        path: '/users/updateuser/:email',
        alias: '',
        component: User,
        name: 'NewUser',
        meta: {
          description: 'Updating user'
        }
      }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]

export default routes
