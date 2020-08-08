
<template>
  <button @click="signOut()">Sign out</button>
</template>
<script>
export default {
  name: "Logout",
  data: function() {
    return {};
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push({ path: `/landing-page` }); //denumirea path-ului de schimbat
    }
  }
};
</script>