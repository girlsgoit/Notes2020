<template>
    <div class="bar_create_note">
      <h1 class="name">Dashboard</h1>
      <a class="button" @click="newNote()">NEW NOTE</a>
    </div>
</template>
<script>
export default {
  name: "Toolbar",
  data: function() {
    return {};
  },
  methods: {
    newNote() {
      this.$router.push({ path: "/new-notes" });
    }
  }
};
</script>
<style scoped>
.name {
  display: block;
  color: black;
  font-size: 40px;
  font-weight: normal;
  font-style: normal;
}

.button {
  background: #2ea1f8;
  padding: 15px 32px 14px 32px;
  margin: 25px 10px 25px 10px;
  text-decoration: none;
  font-weight: normal;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  border-radius: 5px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
}

.button:hover {
  background-color: #4ab1ff;
}

.bar_create_note {
  display: flex;
  justify-content: space-between;
}
</style>
