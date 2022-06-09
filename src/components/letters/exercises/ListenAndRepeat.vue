<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <ul class="steps is-horizontal">
        <li
          v-for="(letter, i) in exercise.letters"
          :key="i"
          class="steps-segment"
          :class="{ 'is-active': i === active_index }"
        >
          <span class="steps-marker">{{ letter.text }}</span>
        </li>
      </ul>
    </div>
    <div class="column is-12">
      <audio-recorder
        format="wav"
        class="mx-auto"
        :attempts="1"
        :time="0.05"
        :after-recording="callback"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListenAndRepeat',

  props: {
    exercise: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    active_index: 0,
  }),
  methods: {
    callback (data) {
      const payload = new FormData()
      payload.append('file', data.blob, 'test.wav')

      this.axios.post('http://abjad.test/api/detect-character', payload).then(res => {
        console.log(res.data)
      })
    },
  },
}
</script>

<style lang="scss">
.steps:not(.is-vertical) .steps-segment:not(:last-child):after {
  right: 0;
  left: 0;
}
</style>
