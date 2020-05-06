import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
<<<<<<< HEAD
  render: h => h(App)
=======
  render: (h) => h(App),
>>>>>>> f133d23cf5fb6286048361fc934620ec2b5b685c
}).$mount('#app');
