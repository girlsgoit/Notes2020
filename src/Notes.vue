<template>
  <div class="note">
    <div class="container-note">
      <div v-for="(noteElement, index) in noteElements" :key="index">
        <ButtonNewElement
          @newElement="newElementAt(index)"
          :isActive="currentIndex === index && isEditorVisible"
        />

        <div @click="hideEditor">
          <h1 v-if="noteElement.tag === 'h1'" class="header">
            {{ noteElement.content }}
          </h1>
          <h2 v-if="noteElement.tag === 'h2'" class="header2">
            {{ noteElement.content }}
          </h2>
          <h3 v-if="noteElement.tag === 'h3'" class="header3">
            {{ noteElement.content }}
          </h3>
          <p v-if="noteElement.tag === 'p'" class="paragraph">
            {{ noteElement.content }}
          </p>
          <a v-if="noteElement.tag === 'a'" :href="noteElement.content">{{
            noteElement.content
          }}</a>
          <ul v-if="noteElement.tag === 'ul'" class="list">
            <li v-for="item in noteElement.content.split('\n')" :key="item">
              {{ item }}
            </li>
          </ul>
          <img v-if="noteElement.tag === 'img'" :src="noteElement.content" />
        </div>
      </div>

      <ButtonNewElement
        @newElement="newElementAt(noteElements.length)"
        :isActive="currentIndex === noteElements.length && isEditorVisible"
      />
    </div>

    <AddElement
      :isVisible="isEditorVisible"
      :blocks="noteElements"
      :index="currentIndex"
      :id="noteId"
      @blockAdded="noteElements = $event"
      @indexAdded="currentIndex = $event"
    />

    <div class="delete-button-container">
      <button class="delete-button" @click="onDeleteNote">DELETE NOTE</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddElement from "./components/AddElement";
import ButtonNewElement from "./components/ButtonNewElement";

export default {
  name: "Notes",
  components: {
    AddElement,
    ButtonNewElement
  },
  data: function () {
    return {
      noteElements: [],
      noteId: null,
      currentIndex: 0,
      isEditorVisible: false
    };
  },
  created() {
    const that = this;
    this.noteId = this.$route.params.id;
    const url = "https://notes-api.girlsgoit.org/notes/" + this.noteId;
    axios
      .get(url)
      .then(function (response) {
        that.noteElements = response.data.note_elements;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    newElementAt: function (index) {
      this.currentIndex = index;
      this.isEditorVisible = true;
    },
    hideEditor: function () {
      this.isEditorVisible = false;
    },
    onDeleteNote: function () {
      const that = this;

      axios
        .delete("https://notes-api.girlsgoit.org/notes/" + that.noteId + "/")
        .then(function () {
          that.$router.push({ path: "/dashboard" });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scopped>
.container-note {
  max-width: 960px;
  margin: 0 auto;
}
.note {
  padding-top: 30px;
}
.header {
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 64px;
}
.paragraph {
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
}
.container-note img {
  width: 100%;
}

.container-note a {
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
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  line-height: 36px;
}

.header3 {
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;
  color: #393939;
}

.header2 {
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 36px;
  color: #393939;
}

.paragraph2 {
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
  padding: 14px 20px;
  margin: 20px;
  border: 1px solid #fa4820;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.5;
  border-radius: 5px;
  width: 960px;
  transition: opacity 0.2s ease-in;
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
