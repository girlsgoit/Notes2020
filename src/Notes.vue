<template>
  <div>
    <h1 v-if="verificare">notes</h1>
    <div class="delete-button-container">
      <button class="delete-button" @click="onDeleteNote">Delete Note</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Notes",
  data: function() {
    return {
      noteId: null,
      verificare: true
    };
  },
  created() {
    this.noteId = this.$route.params.id;
  },
  methods: {
    onDeleteNote: function() {
      const that = this;

      axios
        .delete("https://notes-api.girlsgoit.org/notes/" + that.noteId + "/")
        .then(function() {
          that.$router.push({ path: "/dashboard" });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.test {
  color: red;
  display: none;
}

.delete-button {
  background-color: white;
  color: #fa4820;
  font-family: Arial black;
  padding: 14px 20px;
  margin: 20px;
  border-color: #fa4820;
  border-style: ridge;
  cursor: pointer;
  opacity: 0.9;
  border-radius: 10px;
  width: 960px;
}

.delete-button:hover {
  opacity: 1;
}

.delete-button-container {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 960px) {
  .delete-button {
    width: 100%;
  }
}
</style>
