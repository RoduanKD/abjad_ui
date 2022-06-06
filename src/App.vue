<template>
  <div id="app">
    <animated-background />
    <app-navbar />
    <vue-page-transition name="fade-in-down">
      <router-view class="page" />
    </vue-page-transition>
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar'
import AnimatedBackground from '@/components/layout/AnimatedBackground'

export default {
  components: { AnimatedBackground, AppNavbar },
}
</script>

<style lang="scss">
.page {
  padding-top: $navbar-height;
  min-height: 100vh;
  height: 1px;
}
</style>
