<template>
  <div>
    <h1 v-if="tag === 'h1'">{{value}}</h1>
    <h2 v-if="tag === 'h2'">{{value}}</h2>
    <h3 v-if="tag === 'h3'">{{value}}</h3>
    <p v-if="tag === 'p'">{{value}}</p>
    <a v-if="tag === 'a'" :href="value">{{value}}</a>
    <div class="photo" v-if="tag === 'img'">
      <img :src="value">
    </div>
    <ul v-if="tag === 'ul'">
      <li v-for="(ulElement, index)  in ulElements" :key="index">{{ulElement}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NoteElement",
  props: ["tag", "value"],
  data: function() {
    return {
      ulElements: []
    };
  },
  created() {
    const that = this;
    if (that.tag === "ul") {
      that.ulElements = that.value.split("\n");
    }
  }
};
</script>

<style scoped>
.photo {
  margin: -20px -20px 0 -20px;
}

.photo img {
  width: 100%;
}

a {
  text-decoration: none;
  color: #1b81e0;
}
</style>

