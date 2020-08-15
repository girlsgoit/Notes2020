<template>
<div class="container">
  <img src="/assets/wip.gif" alt="Work in progress">
</div>
</template>

<script>
export default {
name: "WorkInProgress"
}
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
  }

  .container img {
    width: 50%;
    max-width: 480px;
  }
</style>
