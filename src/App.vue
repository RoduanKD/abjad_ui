<template>
  <div id="app">
    <animated-background />
    <app-navbar />
    <router-view class="page" />
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar'
import AnimatedBackground from '@/components/layout/AnimatedBackground'

export default {
  components: { AnimatedBackground, AppNavbar },
}
</script>

<style>
.page {
  padding-top: 7rem;
  min-height: 100vh;
}
</style>
