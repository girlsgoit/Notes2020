<template>
  <section class="cards-section">
    <Toolbar></Toolbar>
    <div class="cards-list">
      <div class="column">
        <div
            class="card"
            @click="goToNote(element.id)"
            v-for="element in left_column_elements"
            :key="element.id"
        >
          <NoteElement
              :tag="element.note_elements[0].tag"
              :value="element.note_elements[0].content"
          />
          <p class="date">{{ element.created_at }}</p>
        </div>
      </div>

      <div class="column">
        <div
            class="card"
            @click="goToNote(element.id)"
            v-for="element in right_column_elements"
            :key="element.id"
        >
          <NoteElement
              :tag="element.note_elements[0].tag"
              :value="element.note_elements[0].content"
          />
          <p class="date">{{ element.created_at }}</p>
        </div>
      </div>
    </div>
  </section>
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

    axios
        .get("https://notes-api.girlsgoit.org/notes/")
        .then(function(response) {
          that.notes = response.data;
          console.log(response);

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
      this.$router.push(`/notes/${noteId}`);
    }
  }
};
</script>

<style scoped>
.cards-section {
  margin: 0 auto;
  max-width: 960px;
}

.cards-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.cards-list .column {
  width: 50%;
}

@media screen and (max-width: 600px) {
  .cards-list .column {
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
  box-shadow: 0 0 27px rgba(230, 230, 230, 0.5);

  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
}

.card:hover {
  box-shadow: 0 0 40px rgba(230, 230, 230, 0.85);
}

.date {
  text-align: right;
  color: #919191;
}
</style>
