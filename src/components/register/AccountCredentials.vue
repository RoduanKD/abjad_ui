<template>
  <div class="container fill-height is-flex is-flex-direction-column is-justify-content-center">
    <div class="columns is-centered is-vcentered">
      <div class="column is-12 is-4-desktop">
        <div class="card is-secondary">
          <div class="card-content">
            <form
              class="form"
              @submit.prevent="submit"
            >
              <div class="field">
                <label class="label">البريد الإلكتروني</label>
                <p class="control has-icons-left">
                  <input
                    v-model="email"
                    class="input"
                    type="email"
                    placeholder="example@gmail.com"
                    dir="ltr"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope" />
                  </span>
                </p>
                <p
                  class="help is-danger"
                  v-text="errors.email ? errors.email[0] : ''"
                />
              </div>
              <div class="field">
                <label class="label">كلمة المرور</label>
                <p class="control has-icons-left">
                  <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="******"
                    dir="ltr"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock" />
                  </span>
                </p><p
                  class="help is-danger"
                  v-text="errors.password ? errors.password[0] : ''"
                />
              </div>
              <div class="field">
                <label class="label">تأكيد كلمة المرور</label>
                <p class="control has-icons-left">
                  <input
                    v-model="password_confirmation"
                    class="input"
                    type="password"
                    placeholder="******"
                    dir="ltr"
                    required
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <button
                    class="button is-primary"
                    type="submit"
                  >
                    إنشاء حساب
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
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    email: 'fathi@abjad.test',
    password: 'password',
    password_confirmation: 'password',
    errors: {
      email: [],
      password: [],
    },
    loading: false,
  }),

  computed: {
    canProceed () {
      return this.email && this.password && this.password_confirmation
    },
  },

  watch: {
    email (value) {
      const newValue = Object.assign(this.value)
      newValue.email = value
      this.$emit('input', newValue)
    },

    password (value) {
      const newValue = Object.assign(this.value)
      newValue.password = value
      this.$emit('input', newValue)
    },

    password_confirmation (value) {
      const newValue = Object.assign(this.value)
      newValue.password_confirmation = value
      this.$emit('input', newValue)
    },

  },

  methods: {
    async submit () {
      let payload = Object.assign(this.value)
      if (this.value.child.image) {
        payload = new FormData()
        for (const key in this.value) {
          if (typeof this.value[key] !== 'object') { payload.append(key, this.value[key]) } else {
            for (const j in this.value[key]) { payload.append(key + `[${j}]`, this.value[key][j]) }
          }
        }
      }
      this.loading = true

      try {
        const res = await this.axios.post('/register', payload)
        if (res && res.status === 201) {
          this.$emit('finished')
        }
      } catch (e) {
        if (e.response.status === 422) {
          this.errors = e.response.data.errors
        }
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
