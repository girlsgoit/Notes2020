import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import LogIn from "./components/LogIn";
import Dashboard from "./Dashboard";
import Notes from "./Notes";
import Axios from "axios";
import Register from "./Register";
import Landing from "./Landing";

Vue.config.productionTip = false;

Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("NOTES_AUTH");

    if (token) {
      config.headers["Authorization"] = "Token " + token;
    }

    return config;
  },
  function (error) {
    console.log(error);
  }
);
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Landing },
  { path: "/login", component: LogIn },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard },
  { path: "/notes/:id", component: Notes },
  { path: "/new-notes", component: Notes }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
