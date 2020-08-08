import Vue from "vue";
import HelloWorld from "./components/HelloWorld";
import App from "./App.vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [{ path: "/", component: HelloWorld }];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
