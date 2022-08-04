<template>
  <div class="columns is-mobile is-multiline">
    <div
      v-if="exercise.question.image"
      class="column is-12"
    >
      <figure class="image mx-auto question-image">
        <img
          :src="exercise.question.image"
          :alt="exercise.question.text"
        >
      </figure>
    </div>
    <div
      v-for="(choice, i) in choices"
      :key="i"
      class="column"
    >
      <div
        class="card"
        :class="choice === selected ? 'selected' : ''"
        @click="selectChoice(choice)"
      >
        <div class="card-text is-flex is-justify-content-center is-align-items-center fill-height">
          <figure
            v-if="choice.image"
            class="image choice-image"
          >
            <img
              :src="choice.image"
              :alt="choice.text"
            >
          </figure>
          <div
            v-else
            v-text="choice.text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultipleChoice',

  props: {
    exercise: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    selected: {},
  }),

  computed: {
    choices () {
      return this.exercise.attributes.choices
    },
  },

  methods: {
    selectChoice (choice) {
      if (choice.voice) { (new Audio(choice.voice)).play() }
      this.selected = choice
      this.$emit('finished', choice.text)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid $grey-light;
  height: 1px;
  min-height: 200px;
  border-radius: 1rem;
  box-shadow: none;
  transition: all .3s;
  cursor: pointer;

  .card-text {
    font-size: 3rem;
  }

  &.selected {
    border: 2px solid $primary;
    box-shadow: $card-shadow;
  }

  .choice-image {
    width: 80%;
    max-width: 130px;
  }
}

.question-image img {
  max-height: 200px;
  width: auto;
  margin: 0 auto;
}
</style>
