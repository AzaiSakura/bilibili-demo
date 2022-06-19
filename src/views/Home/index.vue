<template>
    <!-- Header Component -->
    <AppHeader/>
    <!-- Channel Component -->
    <HomeChannel/>
    <!-- Swipe Component -->
    <HomeSwipe/>
    <!-- Video List Component -->
    <HomeVideoList/>
</template>

<script setup lang="ts">
import AppHeader from '@/components/app-header.vue'
import HomeChannel from './components/home-channel.vue'
import HomeSwipe from './components/home-swipe.vue'
import HomeVideoList from './components/home-video-list.vue'
</script>