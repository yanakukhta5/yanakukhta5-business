<script lang="ts">
import { mapActions } from 'pinia';

import store from './store';

import Dropdown from '@/components/Dropdown/index.vue'
import Output from '@/components/Output/index.vue'
import Button from '@/components/Button/index.vue'

export default {
 components: {
  Dropdown, Output, Button
 },
 methods: mapActions(store, ["getApi"]),
 mounted(){
  this.getApi()
 }
}

</script>

<template>
 <div class="_container">
<Dropdown :options="['сделка', 'контакт', 'компания']" default="не выбрано">
 <Button>создать</Button>
</Dropdown>

<Output />
</div>
</template>

<style scoped lang="scss">
._container {
 max-width: 1100px;
 display: flex;
 justify-content: space-between;
 padding: 20px 0px;
 margin: 0 auto;
}
</style>
