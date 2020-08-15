<template>
  <div>
    <section class="bar_line">
      <div class="bar_create_note">
        <h1 class="name">Dashboard</h1>
        <a class="button" @click="newNote()">NEW NOTE</a>
      </div>
    </section>
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