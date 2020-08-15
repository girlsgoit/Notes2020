<template>
  <div id="app">
    <HeaderLogIn v-if="token" :user="user"/>
    <router-view></router-view>
    <Footer v-if="token">
  </div>
</template>

<script>
import HeaderLogIn from "./components/HeaderLogIn";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    HeaderLogIn,
    Footer
  },
  data() {
    return {
      token: "",
      user: {}
    };
  },
  created() {
    this.token = localStorage.getItem("NOTES_AUTH");

    if (this.token) {
      this.user = {
        username: localStorage.getItem("USER_NAME"),
        fullName: localStorage.getItem("FULL_NAME"),
        id: localStorage.getItem("USER_ID")
      };
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
