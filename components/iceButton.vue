<template>
  <div class="iceButton">
    <input
      type="button"
      value="WINTER IS HERE!"
      @click="$store.commit('startTheWar', 'ice')">
  </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>
   div.iceButton {
      display: inline;
      margin-left: auto;
      margin-right: auto;
      padding: 3rem;
   }
   input {
      color: white;
      background-color: CornflowerBlue;
      font-size: 3rem;
      font-weight: bold;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px rgb(0,0,255), 0 0 70px rgb(0,0,255), 0 0 80px rgb(0,0,255), 0 0 100px rgb(0,0,255), 0 0 150px rgb(0,0,255);
   }
</style>
