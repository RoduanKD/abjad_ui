<template>
  <div class="is-flex is-align-items-center is-fullwidth">
    <img
      src="@/assets/penguin/listen-button.svg"
      alt="زر الاستماع"
      style="cursor: pointer"
      @click="play"
    >
    <h1
      class="subtitle is-4 px-3"
      v-text="question.text"
    />
  </div>
</template>

<script>
export default {
  name: 'LetterExerciseHeader',

  props: {
    question: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    play () {
      (new Audio(this.question.voice)).play()
    },
  },
}
</script>

<style scoped>

</style>
