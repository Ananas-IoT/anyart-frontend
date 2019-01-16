
import LandingPage from './components/landing/LandingPage'
import Map from './components/map/Map'
import Auth from './components/auth/Auth'
import Register from './components/auth/Register'
import RegisterGovernment from './components/auth/RegisterGovernment'
import Login from './components/auth/Login'

export default [
  {path:'/', component: LandingPage},
  {path:'/map', component: Map},
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
