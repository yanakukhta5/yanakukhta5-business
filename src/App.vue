<script setup lang="ts">
import Dropdown from '@/components/Dropdown/index.vue'
import Output from '@/components/Output/index.vue'
import Button from '@/components/Button/index.vue'

import axios from 'axios';

const url = 'http://127.0.0.1:1234/api'
     axios({
      method: 'get',
      url
     }).then(response => {
      console.log(response)
     })
</script>

<template>
<Dropdown :options="['сделка', 'контракт', 'компания']" default="не выбрано" />
<Button>создать</Button>
<Output />
</template>

<style scoped lang="scss">

</style>
