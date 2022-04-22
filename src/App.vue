<template>
  <div id="app">
    <animated-background />
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar'
import AnimatedBackground from '@/components/layout/AnimatedBackground'

export default {
  components: { AnimatedBackground, AppNavbar },
}
</script>
