
import LandingPage from './components/the-landing-page'
import Map from './components/the-map'
import Auth from './components/auth/the-auth'
import Register from './components/auth/auth-register'
import RegisterGovernment from './components/auth/auth-reqiester-government'
import Login from './components/auth/auth-login'
import UserProfile from './components/user-profile/user-profile'

export default [

  {path:'/', component: LandingPage},
  {path:'/map', component: Map},
  {path: '/user', component: UserProfile},
  {path:'/auth', component: Auth, children: [
      {
        path: 'register', component: Register
      },
      {
        path: 'login', component: Login
      },
      {
        path: 'government', component: RegisterGovernment
      }
    ]}
]
