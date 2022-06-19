<template lang="">
    <div class="list">
      <AppVideoItem v-for="item in list" :key="item" :video="item"/>
    </div>
</template>
<script setup lang="ts">
import AppVideoItem from '@/components/app-video-item.vue'
import { ref } from 'vue'
import axios from 'axios'

interface IVideoItem {
  id: number
  imgSrc: string
  desc: string
  playCount: string
  commenCount: string
  VideoSrc: string
}

const list = ref<IVideoItem[]>([])

axios({
  method: 'get',
  url: '/videosList'
}).then(({ data }) => {
  list.value = data.result
})
</script>
<style lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 0 1vw;
}
</style>