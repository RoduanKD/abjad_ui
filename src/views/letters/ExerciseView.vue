<template>
  <section class="section">
    <letter-exercise-progress-bar
      :max="maxProgress"
      :current="currentProgress"
    />
    <div class="container fill-height">
      <div class="columns is-centered is-align-items-end fill-height is-multiline">
        <div
          v-if="currentExercise.question"
          class="column is-9-desktop is-align-self-center"
        >
          <letter-exercise-header :question="currentExercise.question" />
        </div>
        <div class="column is-8-desktop is-align-self-center">
          <vue-page-transition name="fade-in-right">
            <component
              :is="currentExerciseComponent"
              :exercise="currentExercise"
              @finished="exerciseFinished"
            />
          </vue-page-transition>
        </div>
        <div class="column is-12">
          <letter-exercise-footer
            :can-progress="canProgress"
            @next-clicked="nextQuestion"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import letterExampleResource from '@/data/LetterExampleResource'
import LetterExerciseFooter from '@/components/letters/LetterExerciseFooter'
import LetterExerciseProgressBar from '@/components/letters/LetterExerciseProgressBar'
import VideoTutorial from '@/components/letters/exercises/VideoTutorial'
import MultipleChoice from '@/components/letters/exercises/MultipleChoice'
import SortLetters from '@/components/letters/exercises/SortLetters'
import LetterExerciseHeader from '@/components/letters/LetterExerciseHeader'
import ListenAndRepeat from '@/components/letters/exercises/ListenAndRepeat'

export default {
  name: 'ExerciseView',

  components: { ListenAndRepeat, LetterExerciseHeader, SortLetters, MultipleChoice, VideoTutorial, LetterExerciseProgressBar, LetterExerciseFooter },
  props: {
    letter: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    resource: letterExampleResource,
    current_exercise_index: 0,
    exercise_finished: true,
  }),

  computed: {
    currentExercise () {
      return this.resource.exercises[this.current_exercise_index]
    },
    currentExerciseComponent () {
      return this.currentExercise.type.replaceAll('_', '-')
    },

    maxProgress () {
      return this.resource.exercises.length
    },
    currentProgress () {
      return this.current_exercise_index + 1
    },
    canProgress () {
      return !!this.exercise_finished
    },
  },

  mounted () {
    this.$store.state.hideNavbar = !this.$store.state.hideNavbar
  },

  destroyed () {
    this.$store.state.hideNavbar = !this.$store.state.hideNavbar
  },

  methods: {
    exerciseFinished () {
      // send answer to server
      // if answer is correct: show congrats & proceed
      // if not: show try again

      this.exercise_finished = true
    },

    nextQuestion () {
      this.current_exercise_index++
    },
  },
}
</script>

<style>
.page {
  padding-top: 3rem;
}
</style>
