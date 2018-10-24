
import Auth from './components/auth/Auth'
import SignUp from './components/auth/SignUp'
import SignUpGovernment from './components/auth/SignUpGovernment'
import SignIn from './components/auth/SignIn'

export default [

  {path:'/auth', component: Auth, children: [
      {
        path: 'signup', component: SignUp
      },
      {
        path: 'signin', component: SignIn
      },
      {
        path: 'government', component: SignUpGovernment
      }
    ]}

]
