<template>
  <div class="note">
    <div class="container-note">
      <div v-for="(noteElement, index) in noteElements" :key="index">
        <h1 v-if="noteElement.tag === 'h1'" class="header">{{ noteElement.content }}</h1>
        <h2 v-if="noteElement.tag === 'h2'" class="header2">{{ noteElement.content }}</h2>
        <h3 v-if="noteElement.tag === 'h3'" class="header3">{{ noteElement.content }}</h3>
        <p v-if="noteElement.tag === 'p'" class="paragraph">{{ noteElement.content }}</p>
        <a v-if="noteElement.tag === 'a'">{{ noteElement.content }}</a>
        <ul v-if="noteElement.tag === 'ul'" class="list">
          <li v-for="item in noteElement" :key="item">{{ item }}</li>
        </ul>
        <img v-if="noteElement.tag === 'img'" :src="noteElement.content">
      </div>
    </div>

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
      noteElements: [],
      noteId: null
    };
  },
  created() {
    const that = this;
    this.noteId = this.$route.params.id;
    const url = "https://notes-api.girlsgoit.org/notes/" + this.noteId;
    axios
      .get(url)
      .then(function(response) {
        that.noteElements = response.data.note_elements;
      })
      .catch(error => {
        console.log(error);
      });
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

<style scopped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");
.container-note {
  max-width: 960px;
  margin: 0 auto;
}
.note {
  padding-top: 30px;
}
.header {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
}
.paragraph {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
}
.container-note img {
  width: 100%;
}

.container-note a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
  text-decoration: none;
  color: #208afa;
}
.container-note a:hover {
  color: #208afa;
  text-decoration: underline;
}

.list {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
}

.header3 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #393939;
}

.header2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  color: #393939;
}

.paragraph2 {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
  color: #393939;
}
@media only screen and (max-width: 960px) {
  .note div img {
    margin-left: 0;
    margin-right: 0;
  }
}
@media only screen and (max-width: 960px) {
  .note {
    font-size: 14px;
  }
  .note h1,
  .note h2,
  .note h3,
  .note p,
  .note ul {
    margin-bottom: 1em;
    margin-top: 0;
  }
  .note h2,
  .note h3 {
    font-weight: bold;
  }

  .note h1 {
    font-size: 2em;
  }

  .note h2 {
    font-size: 1.5em;
  }

  .note h3 {
    font-size: 1.25em;
  }
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
