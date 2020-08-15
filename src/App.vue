<template>
  <div id="app">
    <HeaderLogIn v-if="token" :user="user"/>
    <HeaderLogOut v-else/>

    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import HeaderLogIn from "./components/HeaderLogIn";
import HeaderLogOut from "./components/HeaderLogOut";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    HeaderLogIn,
    HeaderLogOut,
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
