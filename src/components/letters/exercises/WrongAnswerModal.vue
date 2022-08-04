<template>
  <b-modal
    v-bind="$attrs"
    :header-enabled="false"
  >
    <div class="columns is-centered is-multiline">
      <div class="column is-12">
        <div class="columns is-centered">
          <div class="column is-3-desktop">
            <figure class="image">
              <img
                src="@/assets/penguin/sorry.svg"
                alt=""
              >
            </figure>
          </div>
        </div>
      </div>
      <div class="column has-text-centered is-size-4">
        الإجابة خاطئة، أعد المحاولة!
      </div>
    </div>
    <template #footer>
      <button
        class="button is-primary mx-auto"
        @click="$emit('ok')"
      >
        حسناً
      </button>
    </template>
  </b-modal>
</template>

<script>
import BModal from '@/components/BModal'

export default {
  components: { BModal },

  watch: {
    $attrs: {
      deep: true,
      handler (val) {
        if (val['is-opened']) {
          (new Audio(require('@/assets/audio/try-again.wav'))).play()
        }
      },
    },
  },

}
</script>
