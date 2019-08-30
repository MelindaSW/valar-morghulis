<template>
  <div :class="hotOrCold">
    <pre :class="hotOrCold">

      ^    / \:/ \      ^               +                        |>
     / \      ^        / \        *    / \    *              |>  |
    /   \             /   \      OnO  :xxx:  OnO             |  III     |>
   (_____)           (_____)     I I   I I   I I           /-|\ III i>  |
    |   |  _   _   _  |   |      I I   I I   I I         _|__|__III i   ^
    | O |_| |_| |_| |_| O |     O_O_O_O_O_O_O_O_O     |>\______/III i  ^^^
    |   |   - _^_     |   |     \_______________/     |   !__!__III/\ ^^^^^
    |  _|    //|\\  - |   |      I     ___     I     /\\ ////|====IIII ===
    |   |   ///|\\\   |  -|      I    / i \    I    /\\\/////|====IIII ===
    |-  |_  |||||||   |   |      I   I: i :I   I    | | ||||::::::IIII ===
    |   |   |||||||   |-  |      I___I:_i_:I___I    | | ||||      IIII ===
    |___|___|||||||___|___|                         -----------------------
           (      (
            \      \            . o       c ,              0   \0
             )      )           `'#v-- --v#`'             /0--- :\
             |      |            /'\     \`\              / \  / \
             (      )
              \      \
      </pre>
  </div>
</template>

<script>
   export default {
      computed: {
         hotOrCold() {
            return this.$store.state.hotOrCold
         }
      }
   }
</script>

<style scoped>

   div.plain {
      color: black;
      background-color: white;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      padding: 6rem;
      width: 100%;
   }

   div.fire {
      background-attachment: fixed;
      background-image: url(fire.jpeg);
      background-repeat: no-repeat;
      background-size: cover;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      padding: 6rem;
      width: 100%;
   }

   div.ice {
      background-attachment: fixed;
      background-image: url(frost.jpeg);
      background-repeat: no-repeat;
      background-size: cover;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      padding: 6rem;
      width: 100%;
   }

   pre.plain {
      color: black;
      background-color: white;
      height: auto;
      font-size: 1.2rem;
      font-weight: bolder;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
   }

   pre.fire {
      color: white;
      background-color: black;
      font-size: 1.2rem;
      font-weight: bolder;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
      width: 50%;
   }

   pre.ice {
      color: white;
      background-color:  rgb(25,25,112);
      font-size: 1.2rem;
      font-weight: bolder;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px rgb(0,0,255), 0 0 70px rgb(0,0,255), 0 0 80px rgb(0,0,255), 0 0 100px rgb(0,0,255), 0 0 150px rgb(0,0,255);
      width: 50%;
   }

</style>
