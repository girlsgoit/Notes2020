<template>
  <div>
    <Toolbar></Toolbar>
    <section class="cards-section">
      <div class="column">
        <div class="card" v-for="element in left_column_elements" :key="element.id">
          <NoteElement :tag="element.note_elements[0].tag" :value="element.note_elements[0].content"/>
        </div>
      </div>

      <div class="column">
        <div class="card" v-for="element in right_column_elements" :key="element.id">
          <NoteElement :tag="element.note_elements[0].tag" :value="element.note_elements[0].content"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import NoteElement from "./components/NoteElement";
import axios from "axios";

export default {
  name: "Dashboard",
  components: {
    Toolbar,
    NoteElement
  },
  data: function() {
    return {
      notes: [],
      left_column_elements: [],
      right_column_elements: []
    };
  },
  created() {
    const that = this;

    axios.get("/notes/").then(function(response) {
      that.notes = response.data;

      for (let index = 0; index < that.notes.length; index++) {
        if (index % 2 === 0) {
          that.left_column_elements.push(that.notes[index]);
        } else {
          that.right_column_elements.push(that.notes[index]);
        }
      }
    });
  },
  methods: {
    goToNote(noteId) {
      console.log(noteId);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap");

.cards-section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cards-section .column {
  width: 50%;
}

@media screen and (max-width: 600px) {
  .cards-section .column {
    width: 100%;
  }
}

.card {
  color: #393939;
  background: #ffffff;
  border: 1px #f3efee;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 5px;
  box-shadow: 0px 0px 27px rgba(230, 230, 230, 0.5);
  font-family: "Roboto";
  overflow: hidden;
}

.date {
  text-align: right;
  color: #919191;
}

.card a {
  text-decoration: none;
  color: #1b81e0;
}
</style>
