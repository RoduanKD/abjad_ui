<template>
  <div class="columns is-multiline">
    <div class="column is-12">
      <ul class="steps is-horizontal">
        <li
          v-for="(letter, i) in exercise.attributes.recordings"
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
      <div class="file mt-4 is-loading">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            accept="audio/wav"
            @change="upload"
          >
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">
              اختر ملفاً صوتياً
            </span>
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
  }),

  methods: {
    callback (data) {
      const payload = new FormData()
      payload.append('file', data.blob, 'test.wav')

      this.axios.post('detect-character', payload).then(res => {
        this.character = res.data
      })
    },
    upload (e) {
      this.recording = e.target.files[0]
      const payload = new FormData()

      payload.append('file', this.recording, 'test.wav')

      this.axios.post('detect-character', payload).then(res => {
        this.character = res.data
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
