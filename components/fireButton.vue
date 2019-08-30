<template>
  <div class="fireButton">
    <input
      type="button"
      value="DRACARYS!"
      @click="$store.commit('startTheWar', 'fire')">
  </div>
</template>

<script>
   export default {
   }
</script>

<style scoped>
   div.fireButton {
      display: inline;
      margin-left: auto;
      margin-right: auto;
      padding: 3rem;
   }
   input {
      color: white;
      background-color: black;
      font-size: 3rem;
      font-weight: bold;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
   }
</style>
