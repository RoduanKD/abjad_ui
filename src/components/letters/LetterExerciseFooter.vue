<template>
  <div class="columns is-centered is-relative">
    <figure class="image penguin">
      <img
        src="@/assets/penguin/let-us-solve.svg"
        alt=""
      >
    </figure>
    <div class="column is-3-desktop">
      <button
        class="button is-primary is-rounded is-fullwidth mx-auto"
        :disabled="!canProgress"
        @click="$emit('next-clicked')"
      >
        تحقق
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LetterExerciseFooter',
  props: {
    canProgress: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.penguin {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 150px;
}
</style>
