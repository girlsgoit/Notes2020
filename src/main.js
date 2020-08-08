import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Login from "./Login.vue";
import Register from "./Register.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = new VueRouter({
  mode: "history", // ne ajuta sa avem URL mai curate (fara #)
  routes: routes
});
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
