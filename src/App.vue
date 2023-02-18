<script setup lang="ts">
import Dropdown from './components/Dropdown/index.vue'
import Output from './components/Output/index.vue'
import Button from './components/Button/index.vue'
</script>

<template>
<Dropdown :options="['сделка', 'контракт', 'компания']" default="не выбрано" />
<Button>создать</Button>
<Output />
</template>

<style scoped lang="scss">

</style>
