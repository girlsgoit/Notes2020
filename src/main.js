import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import App from "./App.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";
import Dashboard from "./Dashboard";
import Notes from "./Notes";
import Landing from "./Landing";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/notes/:id", component: Notes },
  {path: "/landing", component: Landing}
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
