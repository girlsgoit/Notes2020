<template>
  <div>
    <ButtonNewElement @newElement="newElement" @getButtonId="getButtonId($event)"></ButtonNewElement>

    <section class="rectangle" v-if="isVisible">
      <div class="note-element">
        <textarea class="input1" placeholder="Write your text here" v-if="isVisible" v-model="text"></textarea>
        <br>
      </div>
      <div class="buttons">
        <button
          class="style-button"
          @click="addElement(text,buttonTag)"
          v-for="buttonTag in buttonTags"
          :key="buttonTag"
        >{{buttonTag}}</button>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";
import ButtonNewElement from "./ButtonNewElement";
export default {
  name: "Notes",
  components: {
    ButtonNewElement
  },
  data: function() {
    return {
      text: "",
      isVisible: false,
      idNote: null,
      indexElements: 1,
      buttonTags: ["h1", "h2", "h3", "img", "p", "ul", "link"],
      elements: [] //!!lista cu elemente poate avea alta denumire
    };
  },

  methods: {
    getButtonId(event) {
      this.indexElements = event;
    },
    newElement() {
      this.isVisible = true;
      console.log("here");
    },
    addElement(text, tagHere, idNote) {
      const that = this;
      this.idNote = this.$route.params.id;
      const data = {
        note_elements: [
          {
            tag: tagHere,
            content: this.text
          }
        ]
      };

      //daca e o notita noua,sa se creeze o noua notita
      if (this.$route.path === "/new-notes") {
        axios
          .post("https://notes-api.girlsgoit.org/notes/", data)
          .then(response => {
            console.log(response);
            this.$router.push({ path: `/notes/${response.data.id}` });
          })
          .catch(error => {
            console.log(error.response.request._response);
          });
        this.text = null;
        this.isVisible = false;
      }
      //------------------------------
      axios
        .get("https://notes-api.girlsgoit.org/notes/" + this.idNote + "/")
        .then(function(response) {
          that.elements = response.data.note_elements;
          console.log(that.elements);
        })
        .catch(error => {
          console.log(error);
        });
      this.elements.splice(this.indexElements, 0, data.note_elements);
      console.log(this.elements);
      //salvarea noului element si afisarea in lista

      axios
        .put(
          "https://notes-api.girlsgoit.org/notes/" + this.idNote,
          this.elements
        )
        .then(function(response) {
          console.log(response);
        })
        .catch(error => {
          console.log(error.response.request._response);
        });
      //-----------------------------------------
      this.text = null;
      this.isVisible = false;
    }
  }
};
</script>

<style>
.note-container {
  width: 100%;
  height: 280px;
  position: fixed;
  background-color: #f2f2f2;
  bottom: 22px;
}
.rectangle {
  position: fixed;
  display: inline-block;
  background-color: white;
  box-shadow: 0px -2px 40px rgba(191, 191, 191, 0.5);
  border-radius: 10px;
  padding: 30px;
  width: 750px;
  box-sizing: border-box;
  transform: translateX(-50%);
  left: 50%;
  max-width: 90%;
  bottom: 0;
  z-index: 5;
}
.rectangle .note-element {
  padding-bottom: 10px;
}

.rectangle .input1 {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #a9a9a9;
  line-height: 22px;
  border: none;
  width: 100%;
  height: 150px;
  resize: none;
}
.rectangle .input1:focus {
  outline: none;
}
.rectangle .buttons {
  padding-top: 5px;
}

.rectangle button {
  text-align: center;
  text-transform: uppercase;
  background: #2ea1f8;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  width: 90px;
  border: none;
  cursor: pointer;
  margin: 2px;
  flex: 1 0 auto;
}
.rectangle button:hover {
  background-color: #59acff;
  border: none;
}
.rectangle button:focus {
  outline: none;
  background-color: #99ccff;
  font-weight: bold;
}
.rectangle .buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 -2px;
}
</style>