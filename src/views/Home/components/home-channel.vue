<template lang="">
<van-tabs v-model:active="active">
  <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>

</van-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const active = ref(0)
// TypeScript的接口用于标记数据格式
interface INvaItem {
  id: string
  text: string
}
// 频道数据 <invaitem[]>表示list是个数组其中每个项都是Inavitem接口的类型
const list = ref<INvaItem[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log(res)
  list.value = res.data.result
})
</script>
