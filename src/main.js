import App from './App.vue';
import Home from './Home.vue';
import Navbar from './Navbar.vue';
import Projects from './Projects.vue';
import Blog from './Blog.vue';
import Travel from './Blog-Entries/Travel2018.vue';
import Travel2019 from './Blog-Entries/Travel2019.vue';
import Japan from './Blog-Entries/Japan.vue';
import Queenstown from './Blog-Entries/Queenstown.vue';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vueScrollBehavior from 'vue-scroll-behavior'
Vue.use(vueScrollBehavior, { router: router })

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.http.options.emulateJSON = true;

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/travel",
    name: "travel",
    component: Travel
  },
  {
    path: "/travel2019",
    name: "travel2019",
    component: Travel2019
  },
  {
    path: "/japan",
    name: "japan",
    component: Japan
  },
  {
    path: "/queenstown",
    name: "queenstown",
    component: Queenstown
  }
];

const router = new VueRouter({
  routes: routes,
  // mode: 'history',
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

new Vue({
  el: '#navbar',
  router: router,
  render: h => h(Navbar)
});
