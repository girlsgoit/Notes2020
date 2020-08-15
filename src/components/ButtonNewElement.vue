<template>
  <div
    class="add-element-button"
    @click.stop="addButton()"
    :class="{
      active: isActive
    }"
  >
    <hr class="line line-left" />
    <div class="add-element">+</div>
    <hr class="line line-right" />
  </div>
</template>

<script>
export default {
  name: "ButtonNewElement",
  props: ["isActive"],
  methods: {
    addButton() {
      this.$emit("newElement");
    }
  }
};
</script>

<style>
.add-element-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  opacity: 0;
  padding: 10px 0;
  margin: -25px 0;
  position: relative;
  z-index: 10;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.5);
}

.add-element-button:hover {
  cursor: pointer;
  opacity: 1;
  transition: 0.3s;
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
  font-style: normal;
  font-weight: normal;
  font-size: 21px;
  margin: 0 10px;
}

.add-element-button .line {
  width: calc(50% - 25px);
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

.add-element-button.active {
  opacity: 1;
}

.add-element-button.active .line-left {
  width: 100%;
  background-color: #fab965;
}
</style>
