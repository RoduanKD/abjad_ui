<template>
  <div class="container fill-height is-flex is-flex-direction-column is-justify-content-center">
    <div class="columns is-centered is-vcentered">
      <div class="column is-12 is-5-desktop">
        <div class="card is-secondary">
          <div class="card-content">
            <form
              class="form"
              @submit.prevent="submit"
            >
              <div class="field">
                <label class="label">اسم الطفل</label>
                <p class="control">
                  <input
                    v-model="name"
                    class="input"
                    placeholder="رامز"
                    required
                  >
                </p>
              </div>
              <div class="field">
                <label class="label">تاريخ الميلاد</label>
                <p class="control">
                  <input
                    v-model="birthdate"
                    class="input"
                    type="date"
                    required
                  >
                </p>
              </div>
              <div class="field">
                <div class="file">
                  <label class="file-label">
                    <input
                      class="file-input"
                      type="file"
                      accept="image/*"
                      @change="selectImage"
                    >
                    <span class="file-cta">
                      <span class="file-icon">
                        <i class="fas fa-upload" />
                      </span>
                      <span class="file-label">اختر صورة لطفلك</span>
                    </span>
                  </label>
                </div>
              </div>

              <div class="field">
                <p class="control">
                  <button
                    class="button is-primary"
                    type="submit"
                    :disabled="!canProceed"
                  >
                    التالي
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildInfo',

  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    name: '',
    birthdate: '',
    image: '',
  }),

  computed: {
    canProceed () {
      return this.name && this.birthdate
    },
  },

  watch: {
    name (value) {
      const newValue = Object.assign(this.value)
      newValue.child.name = value
      this.$emit('input', newValue)
    },

    birthdate (value) {
      const newValue = Object.assign(this.value)
      newValue.child.birthdate = value
      this.$emit('input', newValue)
    },
  },

  methods: {
    async submit () {
      if (this.$route.name === 'children.create') {
        const payload = new FormData()
        for (const key in this.value.child) { payload.append(key, this.value.child[key]) }

        const res = await this.axios.post('/children', payload)
        if (res.status === 201) { this.$router.push({ name: 'children.index' }) }
      } else {
        this.$emit('finished')
      }
    },

    selectImage (e) {
      const value = this.image = e.target.files[0]
      const newValue = Object.assign(this.value)
      newValue.child.image = value
      this.$emit('input', newValue)
    },
  },
}
</script>
