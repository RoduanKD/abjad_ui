<template>
  <div class="container fill-height is-flex is-flex-direction-column is-justify-content-center">
    <h1 class="title is-3 has-text-centered">
      طفلك هو؟
    </h1>
    <div class="columns is-centered">
      <div class="column is-6-desktop">
        <div class="columns is-justify-content-space-between">
          <div
            class="column is-4-desktop"
            @click="select('male')"
          >
            <figure class="image mx-auto">
              <img
                src="@/assets/kids/boy.svg"
                alt="فتى"
              >
              <img
                v-if="value.gender === 'male'"
                src="@/assets/images/check.svg"
                alt="selected"
              >
            </figure>
          </div>
          <div
            class="column is-4-desktop"
            @click="select('female')"
          >
            <figure class="image">
              <img
                src="@/assets/kids/girl.svg"
                alt="فتاة"
              >
              <img
                v-if="value.gender === 'female'"
                src="@/assets/images/check.svg"
                alt="selected"
              >
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="columns is-centered">
      <div
        class="column is-2-desktop"
        style="max-width: 200px"
      >
        <button class="button is-primary is-rounded is-fullwidth">
          التالي
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    select (value) {
      const newValue = Object.assign(this.value)
      newValue.gender = value
      this.$emit('input', newValue)
    },
  },
}
</script>

<style scoped>
.image img:nth-child(2) {
  position: absolute;
  top: 0;
  left: 90%;
  width: auto;
  transform: translateX(-50%);
}
</style>
