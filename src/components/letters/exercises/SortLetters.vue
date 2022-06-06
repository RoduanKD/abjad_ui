<template>
  <div
    class="columns is-multiline"
    dir="ltr"
  >
    <div class="column is-12 is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      <img
        :src="exercise.attributes.media"
        :alt="exercise.attributes.word"
      >
      <div
        class="subtitle is-4 mt-3"
        v-text="exercise.attributes.word"
      />
    </div>
    <div class="column is-12">
      <draggable
        v-model="letters"
        class="is-flex is-justify-content-center"
      >
        <div
          v-for="(letter, i) in letters"
          :key="i"
          class="card sortable-letter"
        >
          {{ letter }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: { draggable },
  props: {
    exercise: {
      type: Object,
      default: () => ({}),
    },
  },

  data () {
    return {
      letters: this.exercise.attributes.word.split(''),
    }
  },
}
</script>

<style lang="scss">
.sortable-letter {
  width: 100px;
  height: 100px;
  line-height: 100px;

  text-align: center;
}
</style>
