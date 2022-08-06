<template>
  <div class="login">
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <div class="column is-12 is-4-desktop">
          <div class="card is-secondary">
            <div class="card-content">
              <form
                class="form"
                @submit.prevent="login"
              >
                <h1 class="title is-3">
                  تسجيل الدخول
                </h1>
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
                    v-text="error"
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
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button
                      class="button is-primary"
                      type="submit"
                    >
                      تسجيل الدخول
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data: () => ({
    email: 'fathi@abjad.test',
    password: 'password',
    loading: false,
    error: '',
  }),

  methods: {
    login () {
      const self = this
      self.loading = true

      const payload = {
        email: this.email,
        password: this.password,
      }

      this.axios.post('/login', payload).then(res => {
        if (res.status === 200) {
          self.$store.dispatch('login', res.data.data.token).then(() => {
            self.$router.push({ name: 'letters.index' })
          })
        }
      })
        .catch(e => {
          self.error = e.response.data.message
        })
        .finally(() => {
          self.loading = false
        })
    },
  },
}
</script>

<style>
.login {
  display: flex;
  align-items: center;
}
</style>
