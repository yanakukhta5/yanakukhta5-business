<script lang="ts">
import { mapState } from "pinia";
import store from "@/store/index.js";
export default {
  computed: mapState(store, ["isOptionChosen", "isCreating"]),
};
</script>

<template>
  <button
    :class="[{ button__disabled: !isOptionChosen || isCreating }, 'button']"
    :disabled="!isOptionChosen || isCreating"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  width: fit-content;
  text-transform: capitalize;
  background-color: $primary;
  color: #fff;
  border: 1px solid $primary;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  &__disabled {
    background-color: #ffffff;
    color: #000;
    border: 1px solid gray;
    cursor: unset;
  }
}
</style>
