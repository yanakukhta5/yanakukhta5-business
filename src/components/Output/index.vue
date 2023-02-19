<script lang="ts">
import { mapState } from 'pinia';

import store from '@/store';

 export default{
  computed: mapState(store, ['responses'])
 }
</script>

<template>
 <div class="wrapper">
  <p class="title">Область отображения результатов POST-запросов на API amoCRM: </p>
  <output class="output" name="results">
   <p class="output__text" v-for="response in responses">{{ response.name }} : {{ response.id }}</p>
  </output>
 </div>
</template>

<style scoped lang="scss">
.output {
 display: grid;
 grid-auto-flow: column;
 grid-template-columns: repeat(3, 1fr);
 grid-template-rows: repeat(14, 1fr);
 align-content: baseline;
 padding: 10px 20px;
 min-height: 420px;
 border: 1px solid $secondary;
 border-radius: 6px;
 &__text {
  height: fit-content;
  margin: 5px 0px;
 }
}
.title {
 margin: 0;
 font-size: 1.3em;
}
</style>
