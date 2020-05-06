import Vue from 'vue';
import VueRouter from 'vue-router';
<<<<<<< HEAD
import Search from '../views/Search.vue';
=======
import Home from '../views/Home.vue';
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Search',
    component: Search
=======
    name: 'Home',
    component: Home,
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  routes
=======
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
});

export default router;
