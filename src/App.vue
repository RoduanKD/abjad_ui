<template>
  <div id="app">
    <animated-background />
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AnimatedBackground from '@/components/home/AnimatedBackground'

export default {
  components: { AnimatedBackground, AppNavbar },
}
</script>
