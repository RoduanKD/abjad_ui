<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8-desktop is-relative">
        <span
          class="delete"
          @click="$router.push({ name: 'letters.index' })"
        />
        <progress
          value="1"
          class="progress is-primary is-fullwidth"
          :max="max"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LetterExerciseProgressBar',

  props: {
    current: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },

  watch: {
    current (v) {
      this.$anime({
        targets: 'progress',
        value: v,
        easing: 'linear',
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.delete {
  position: absolute;
  left: -2rem;
}
</style>
