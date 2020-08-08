import Vue from "vue";
import HelloWorld from "./components/HelloWorld";
import App from "./App.vue";
import VueRouter from "vue-router";
import Dashboard from "./Dashboard";
import Notes from "./Notes";
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/dashboard", component: Dashboard },
  { path: "/notes/:id", component: Notes }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
