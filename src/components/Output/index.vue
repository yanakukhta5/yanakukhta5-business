<script lang="ts">
 export default{
  
 }
</script>

<template>
 <p class="title">Область отображения результатов POST-запрос на API amoCRM: </p>
 <output class="output" name="results"></output>
</template>

<style scoped lang="scss">
.output {
 display: block;
 width: clamp(320px, 50%, 500px);
 padding: 10px;
 min-height: 420px;
 border: 1px solid $secondary;
 border-radius: 6px;
}
.title {
 margin: 0;
}
</style>
