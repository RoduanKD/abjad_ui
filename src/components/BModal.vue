<template>
  <div
    class="modal"
    :class="{'is-active': isOpened}"
  >
    <div class="modal-background" />
    <div class="modal-card">
      <header
        v-if="headerEnabled"
        class="modal-card-head"
      >
        <p class="modal-card-title">
          Modal title
        </p>
        <button
          class="delete"
          aria-label="close"
        />
      </header>
      <section class="modal-card-body">
        <slot />
      </section>
      <footer
        v-if="footerEnabled"
        class="modal-card-foot"
      >
        <slot name="footer">
          <button class="button is-success">
            Save changes
          </button>
          <button class="button">
            Cancel
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
    headerEnabled: {
      type: Boolean,
      default: true,
    },
    footerEnabled: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
