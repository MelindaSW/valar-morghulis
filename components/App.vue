<template>
  <div>
    <castle />
    <div id="buttons">
      <fire-button />
      <ice-button />
    </div>
  </div>
</template>

<script>
   import Castle from './castle.vue'
   import FireButton from './fireButton.vue'
   import IceButton from './iceButton.vue'

   export default {
      components: {
         'castle': Castle,
         'fire-button': FireButton,
         'ice-button': IceButton
      }
   }
</script>

<style scoped>
   div#buttons {
      padding: 2rem;
      width: 55%;
      margin-left: auto;
      margin-right: auto;
   }
</style>
