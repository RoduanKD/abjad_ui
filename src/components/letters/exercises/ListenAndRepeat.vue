<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <ul class="steps is-horizontal">
        <li
          v-for="(letter, i) in exercise.attributes.recordings"
          :key="i"
          class="steps-segment"
          :class="{ 'is-active': i === active_index }"
          @click="play(letter)"
        >
          <span class="steps-marker">{{ letter.text }}</span>
        </li>
      </ul>
    </div>
    <div class="column is-12">
      <audio-recorder
        :key="refresh_recorder"
        format="wav"
        class="mx-auto"
        :attempts="1"
        :time="0.05"
        :after-recording="callback"
      />
      <div class="file mt-4 is-justify-content-center is-loading">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            accept="audio/wav"
            @change="upload"
          >
          <span class="file-icon">
            <i class="fas fa-upload" />
          </span>
        </label>
      </div>
      <div
        v-if="character"
        class="subtitle is-4"
      >
        الحرف المكتشف: {{ character }}
      </div>
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
    recording: null,
    character: '',
    refresh_recorder: 0,
  }),

  methods: {
    async callback (data) {
      const payload = new FormData()
      payload.append('answer', data.blob, 'test.wav')
      payload.append('letter', this.exercise.attributes.recordings[this.active_index].text)

      const res = await this.axios.post(`/exercises/${this.exercise.id}/submissions`, payload)
      if (res.data.correct) {
        this.$emit('showCorrectModal')
        if (this.active_index < this.exercise.attributes.recordings.length - 1) { this.active_index++ } else { this.$emit('finished') }
      } else {
        this.$emit('showWrongModal')
      }
      this.recording = null
      this.refresh_recorder++
    },
    async upload (e) {
      this.recording = e.target.files[0]
      const payload = new FormData()

      payload.append('answer', this.recording, 'test.wav')
      payload.append('letter', this.exercise.attributes.recordings[this.active_index].text)

      const res = await this.axios.post(`/exercises/${this.exercise.id}/submissions`, payload)
      if (res.data.correct) {
        this.$emit('showCorrectModal')
        if (this.active_index < this.exercise.attributes.recordings.length - 1) { this.active_index++ } else { this.$emit('finished') }
      } else {
        this.$emit('showWrongModal')
      }
      this.recording = null
      this.refresh_recorder++
    },

    play (letter) {
      if (letter.recording) {
        (new Audio(letter.recording)).play()
      }
    },
  },
}
</script>

<style lang="scss">
.steps:not(.is-vertical) .steps-segment:not(:last-child):after {
  right: 0;
  left: 0;
}

.steps-segment {
  transform: scale(1.4);
  font-size: 1.2em;
  font-family: 'Courier New', Courier, monospace;
  cursor: pointer;
}

.ar {
  box-shadow: none !important;
}
</style>
