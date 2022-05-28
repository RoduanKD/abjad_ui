<template>
  <section class="section is-flex is-align-items-center">
    <div class="container">
      <div class="columns is-multiline is-centered is-vcentered">
        <div class="column is-desktop-6 is-flex is-justify-content-center is-align-items-center">
          <div class="letter">
            {{ letter }}
          </div>
        </div>
        <div class="column is-desktop-6">
          <img
            src="@/assets/penguin/let-us-learn.svg"
            alt=""
            class="image mx-auto"
          >
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-3">
          <button
            class="button is-primary is-medium is-fullwidth is-rounded"
            @click="$store.state.hideNavbar = !$store.state.hideNavbar"
          >
            بدء التمرين
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ShowView',
  props: {
    letter: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.letter {
  transform: scale(2);
}
</style>
