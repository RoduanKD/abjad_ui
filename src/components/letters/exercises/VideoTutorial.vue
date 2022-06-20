<template>
  <figure class="image">
    <iframe
      v-if="isYoutube"
      width="100%"
      height="415"
      :src="`https://www.youtube-nocookie.com/embed/${videoId}`"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <video
      v-else
      ref="video"
      controls
      width="100%"
    >
      <source
        :src="url"
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

  computed: {
    url () {
      return this.exercise.attributes?.video_url
    },
    videoId () {
      return this.getId(this.exercise.attributes?.video_url)
    },
    isYoutube () {
      return !!this.videoId
    },
  },

  mounted () {
    const self = this
    self.$emit('finished')
  },

  methods: {
    getId (url = '') {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      return (match && match[2].length === 11)
        ? match[2]
        : null
    },
  },
}
</script>
