import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";
import App from "./App.vue";
import LogIn from "./components/LogIn";
import Dashboard from "./Dashboard";
import Notes from "./Notes";
import Register from "./Register";
import Landing from "./Landing";
import WorkInProgress from "@/WorkInProgress";

Vue.config.productionTip = false;

Vue.use(VueRouter);

function loginGuard(from, to, next) {
  console.log("guarding!");
  const token = localStorage.getItem("NOTES_AUTH");
  if (token) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  { path: "/", component: Landing },
  { path: "/login", component: LogIn },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard, beforeEnter: loginGuard },
  { path: "/notes/:id", component: Notes, beforeEnter: loginGuard },
  { path: "/new-notes", component: Notes, beforeEnter: loginGuard },
  { path: "/settings", component: WorkInProgress, beforeEnter: loginGuard },
  { path: "/help", component: WorkInProgress, beforeEnter: loginGuard },
  { path: "*", component: Landing }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});


Axios.interceptors.request.use(
  function(config) {
    const token = localStorage.getItem("NOTES_AUTH");

    if (token) {
      config.headers["Authorization"] = "Token " + token;
    } else {
      router.push("/login");
    }

    return config;
  },
  function(error) {
    console.log(error);
  }
);

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
