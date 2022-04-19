<template>
  <div id="app">
    <app-navbar />
    <router-view />
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'

export default {
  components: { AppNavbar }
}
</script>
