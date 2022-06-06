<template>
  <figure class="image">
    <video
      ref="video"
      controls
      width="100%"
    >
      <source
        :src="exercise.source"
        type="video/mp4"
      >
    </video>
  </figure>
</template>

<script>
export default {
  props: {
    exercise: {
      type: Object,
      default: () => ({}),
      required: true,
    },
  },

  mounted () {
    const self = this
    this.$refs.video.addEventListener('ended', () => {
      self.$emit('finished')
    })
  },
}
</script>
