<template>
  <div>
    <div class="add-element-button" v-bind:class="{active:isAddElementActive}">
      <hr class="line line-left active">
      <div @click="addButton(elementId)" class="add-element">+</div>
      <hr class="line line-right">
    </div>
  </div>
</template>

<script>
export default {
  name: "ButtonNewElement",
  data: function() {
    return {
      isAddElementActive: false,
      elementId: null //de modifica in dependenta de denumire
    };
  },
  methods: {
    addButton(elementId) {
      this.isAddElementActive = true;
      this.$emit("newElement", this.isAddElementActive);
      this.$emit("getButtonId", elementId);
    }
  }
};
</script>

<style scoped>
.add-element-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0;
  margin-top: 15px;
}

.add-element-button:hover {
  cursor: pointer;
  opacity: 1;
  transition: 1s;
}

.add-element-button .add-element {
  border: 1px solid #208afa;
  box-sizing: border-box;
  color: #208afa;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  margin: 0 10px;
}

.add-element-button .line {
  width: calc(50% - 25px);
  /*border: 1px solid #208afa; */
  border: none;
  background-color: #208afa;
  height: 2px;
  color: white;
  opacity: 0.5;
}

.add-element-button.active .line-right,
.add-element-button.active .add-element {
  display: none;
}

.add-element-button.active .line-left {
  width: 100%;
  background-color: #fab965;
}
</style>