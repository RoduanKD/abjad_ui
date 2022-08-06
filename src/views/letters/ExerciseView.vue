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
              @showCorrectModal="showCorrectAnswerModal"
              @showWrongModal="showWrongAnswerModal"
            />
          </vue-page-transition>
        </div>
        <div class="column is-12">
          <letter-exercise-footer
            :can-proceed="canProceed"
            @next-clicked="submitAnswer"
          />
        </div>
      </div>
    </div>
    <correct-answer-modal
      :is-opened="answerIsCorrect"
      @ok="nextQuestion"
    />
    <wrong-answer-modal
      :is-opened="answerIsWrong"
      @ok="answerIsWrong = false"
    />
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
import DrawLetter from '@/components/letters/exercises/DrawLetter'
import CorrectAnswerModal from '@/components/letters/exercises/CorrectAnswerModal'
import WrongAnswerModal from '@/components/letters/exercises/WrongAnswerModal'

export default {
  name: 'ExerciseView',

  components: { WrongAnswerModal, CorrectAnswerModal, DrawLetter, ListenAndRepeat, LetterExerciseHeader, SortLetters, MultipleChoice, VideoTutorial, LetterExerciseProgressBar, LetterExerciseFooter },

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
    answer: null,
    answerIsCorrect: false,
    answerIsWrong: false,
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
    canProceed () {
      return !!this.exercise_finished
    },
  },

  async created () {
    const res = await this.axios.get(`/letters/${this.letter}/exercises`)
    this.resource = res.data.data
    await this.$store.dispatch('hideSpinner')
  },

  mounted () {
    this.$store.state.hideNavbar = true
  },

  destroyed () {
    this.$store.state.hideNavbar = false
  },

  methods: {
    async submitAnswer () {
      if (this.currentExercise.type === 'video_tutorial' || (!this.answer && this.exercise_finished)) return this.nextQuestion()

      // send answer to server
      let payload = {
        answer: this.answer,
      }

      if (this.answer instanceof Blob || this.answer instanceof File) {
        payload = new FormData()
        payload.append('answer', this.answer)
      }
      const res = await this.axios.post(`/exercises/${this.currentExercise.id}/submissions`, payload)
      // if answer is correct: show congrats & proceed
      if (res.data.correct) {
        this.showCorrectAnswerModal()
      } else {
        // if not: show try again
        this.showWrongAnswerModal()
      }
    },
    exerciseFinished (answer) {
      this.answer = answer
      this.exercise_finished = true
    },

    nextQuestion () {
      this.answerIsCorrect = false
      this.answerIsWrong = false
      if (!this.exercise_finished) { return }
      if (this.currentProgress === this.maxProgress) {
        this.$router.push({ name: 'letters.index' })
      } else {
        this.current_exercise_index++
        this.exercise_finished = this.currentExercise.type === 'video_tutorial'
      }
    },

    showCorrectAnswerModal () {
      this.answerIsCorrect = true
    },

    showWrongAnswerModal () {
      this.answerIsWrong = true
    },
  },
}
</script>

<style>
.page {
  padding-top: 3rem;
}
</style>
