<template>
  <div>
    <div class="register">
      <div class="logo">
        <img src="/assets/logo.svg">
      </div>
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
      <div class="buttons">
        <button class="register-button" @click="onRegister">Register</button>
        <button class="login-button" v-on:click="goToLogin()">Log In</button>
      </div>
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
  border-radius: 10px;
  border: 1px solid #4567ff;
  background: white;
  box-sizing: border-box;
  padding: 30px;
  box-shadow: 5px 10px #bccacc;
  margin: 150px auto 50px;
}

.register h2 {
  text-align: center;
  color: #1b81e0;
  font-size: 40px;
}

.register .logo {
  text-align: center;
  margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  margin: 7px auto;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 12px 15px;
  outline: none;
  border: 1px solid #666666;
  color: black;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.register-button,
.login-button {
  cursor: pointer;
}

.register-button {
  display: inline-block;
  font-size: 17px;
  padding: 10px 20px;
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
  padding: 10px 20px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: transparent;
  color: #2876bf;
  transition: 0.5s;
}

.register-button:hover {
  background-color: #64b4fa;
}

.login-button:hover {
  color: #64b4fa;
}
</style>
