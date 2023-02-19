<script lang="ts">
 export default{
  
 }
</script>

<template>
 <div class="wrapper">
  <p class="title">Область отображения результатов POST-запросов на API amoCRM: </p>
  <output class="output" name="results"></output>
 </div>
</template>

<style scoped lang="scss">
.output {
 display: block;
 padding: 10px;
 min-height: 420px;
 border: 1px solid $secondary;
 border-radius: 6px;
}
.title {
 margin: 0;
 font-size: 1.3em;
}
</style>
