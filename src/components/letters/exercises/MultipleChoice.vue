<template>
  <div class="columns is-mobile">
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
            class="image is-128x128"
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
      this.selected = choice
      this.$emit('finished')
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

  &.selected {
    border: 2px solid $primary;
    box-shadow: $card-shadow;
  }
}
</style>
