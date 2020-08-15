<template>
  <div>
    <div class="register">
      <img
          class="logo"
          src="/assets/logo.svg"
      >

      <input type="text" placeholder="Username" name="username" v-model="input.username">

      <input type="text" placeholder="Full Name" v-model="input.fullName">
      <input type="password" placeholder="Enter Password" name="password" v-model="input.password">
      <input
          type="password"
          placeholder="Repeat Password"
          name="confirm_password"
          v-model="input.confirmPassword"
      >
      <p v-if="registerComplete">Your registration was successfully completed !</p>
      <p v-if="registerComplete">Log in and enjoy Notes!</p>
      <button class="register-button" @click="onRegister">Register</button>
      <button class="login-button" v-on:click="goToLogin()">Log In</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data: function() {
    return {
      input: {
        username: "",
        fullName: "",
        password: "",
        confirmPassword: ""
      },
      registerComplete: false
    };
  },

  methods: {
    onRegister() {
      if (
          this.input.username === "" ||
          this.input.password === "" ||
          this.input.confirmPassword === ""
      ) {
        alert("Enter the required data");
      } else if (this.input.password !== this.input.confirmPassword) {
        alert("The password does not match");
      } else {
        const that = this;
        const data = {
          username: this.input.username,
          password: this.input.password,
          confirm_password: this.input.confirmPassword
        };

        axios
            .post("https://notes-api.girlsgoit.org/users/", data)
            .then(function() {
              console.log("mergeee");
              that.input.username = that.input.fullName = that.input.password = that.input.confirmPassword =
                  "";

              that.registerComplete = true;
            })
            .catch(function(error) {
              // if(error.data.status === 400) {
              console.log(error);
              alert("This username exists");
            });
      }
    },
    goToLogin() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>

<style scoped>
.register {
  max-width: 350px;
  border-radius: 20px;
  border: 1.5px solid #4567ff;
  background: white;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 5px 10px #bccacc;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 50px;
}

.register h2 {
  font-family: Lobster;
  text-align: center;
  color: #1b81e0;
  font-size: 40px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  margin: 7px auto;
  box-sizing: border-box;
  border-radius: 15px;
  padding: 12px 5px;
  outline: none;
  border: 1px solid #666666;
  color: black;
}

.register-button,
.login-button {
  cursor: pointer;
}

.register-button {
  display: inline-block;
  font-size: 17px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 45px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #1b81e0;
  color: white;
  transition: 0.7s;
}

.login-button {
  display: inline-block;
  font-size: 17px;
  padding: 10px;
  margin-top: 20px;
  margin-left: 45px;
  margin-right: 30px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  color: #2876bf;
  transition: 0.5s;
}

a.register-button:hover {
  background-color: #64b4fa;
}

a.login-button:hover {
  background-color: #1b81e0;
  color: white;
}
</style>
