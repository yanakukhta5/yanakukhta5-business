<script lang="ts">
import { mapState, mapActions } from "pinia";
import store from "../../store/index.js";
export default {
  computed: mapState(store, ["isOptionChosen"]),
};
</script>

<template>
  <button
    :class="[{ button__disabled: !isOptionChosen }, 'button']"
    :disabled="isOptionChosen"
  >
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.button {
  text-transform: capitalize;
  background-color: $primary;
  color: #fff;
  border: 1px solid $primary;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  &__disabled {
    background-color: #ffffff;
    color: #000;
    border: 1px solid gray;
    cursor: unset;
  }
}
</style>
