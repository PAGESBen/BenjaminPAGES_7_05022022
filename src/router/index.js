import Vue from 'vue'
import VueRouter from 'vue-router'
// import LoginForm from '../components/LoginForm'
// import Home2 from '../views/Home2'
import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component : Register
  },
  {
    path : '/',
    name : 'Home', 
    component : Home
  }
]

const router = new VueRouter({
  routes
})

export default router
