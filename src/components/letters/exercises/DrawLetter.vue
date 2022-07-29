<template>
  <div class="columns is-multiline">
    <div
      v-if="exercise.question.image"
      class="column is-flex is-align-items-center is-6-desktop"
    >
      <figure class="image mx-auto question-image">
        <img
          :src="exercise.question.image"
          :alt="exercise.question.text"
        >
      </figure>
    </div>
    <div class="column is-6-desktop">
      <drawing-canvas
        v-model="letter"
        class="mx-auto"
      />
      <button
        class="button is-danger is-small mt-2 mx-auto is-block"
        @click="letter = ''"
      >
        <span class="icon"><i class="fa fa-trash" /></span>
      </button>
    </div>
  </div>
</template>

<script>
import DrawingCanvas from '@/components/DrawingCanvas'

export default {
  components: { DrawingCanvas },

  props: {
    exercise: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    letter: '',
  }),
}
</script>
