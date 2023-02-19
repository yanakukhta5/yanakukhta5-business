<script setup lang="ts">
import Dropdown from '@/components/Dropdown/index.vue'
import Output from '@/components/Output/index.vue'
import Button from '@/components/Button/index.vue'

import axios from 'axios';

const url = 'https://test.gnzs.ru/oauth/get-token.php'
     const headers = {
       "X-Client-Id": 30878566
      }
     axios({
      method: 'get',
      url,
      headers
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
