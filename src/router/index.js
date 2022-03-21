import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import Contact from '../views/ContactView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(
        /* webpackChunkName: "about", webpackPrefetch:true  */ "../views/AboutView.vue"
      ),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(
        /* webpackChunkName: "contact", webpackPrefetch:true */ "../views/ContactView.vue"
      ),
  },
  {
    path: "/basic",
    name: "Basic",
    component: () =>
      import(
        /* webpackChunkName: "basic", webpackPrefetch:true */ "../views/BasicView.vue"
      ),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch:true */ "../views/DataBinding.vue"
      ),
  },
  {
    path: "/databindinghtml",
    name: "DataBindingHtml",
    component: () =>
      import(
        /* webpackChunkName: "databindinghtml", webpackPrefetch:true */ "../views/DataBindingHtml.vue"
      ),
  },
  {
    path: "/example",
    name: "Example",
    component: () =>
      import(
        /* webpackChunkName: "example", webpackPrefetch:true */ "../views/Example.vue"
      ),
  },
  {
    path: "/serverdata",
    name: "ServerData",
    component: () =>
      import(
        /* webpackChunkName: "serverdata", webpackPrefetch:true */ "../views/ServerData.vue"
      ),
  },
  {
    path: "/mixin",
    name: "MixinTest",
    component: () =>
      import(
        /* webpackChunkName: "mixin", webpackPrefetch:true */ "../views/MixinTest.vue"
      ),
  },
  {
    path: "/calculator",
    name: "Calculator",
    component: () =>
      import(
        /* webpackChunkName: "calculator", webpackPrefetch:true */ "../views/Calculator.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
