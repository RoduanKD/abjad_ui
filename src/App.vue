<template>
  <div id="app">
    <animated-background />
    <app-navbar />
    <vue-page-transition name="fade-in-down">
      <router-view class="page" />
    </vue-page-transition>
    <page-loader />
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar'
import AnimatedBackground from '@/components/layout/AnimatedBackground'
import PageLoader from '@/components/layout/PageLoader'

export default {
  components: { PageLoader, AnimatedBackground, AppNavbar },
}
</script>

<style lang="scss">
.page {
  padding-top: $navbar-height;
  min-height: 100vh;
  height: 1px;
}
</style>
