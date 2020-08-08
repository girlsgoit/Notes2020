import Vue from "vue";
import App from "./App.vue";
import HelloWorld from "./components/HelloWorld";
import VueRouter from "vue-router";
import Dashboard from "./Dashboard";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/dashboard", component: Dashboard },
  { path: "/notes/:id", component: Notes}
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
