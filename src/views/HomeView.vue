<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6 is-md-6">
              <animated-letters class="mb-4" />
              <h1 class="title is-3">
                المتعة والمرح في تعلم العربية
              </h1>
              <div class="columns">
                <div class="column is-4">
                  <router-link
                    class="button is-primary is-block is-rounded"
                    to="#"
                  >
                    هَيَّا نَتَعَلَّم
                  </router-link>
                </div><div class="column is-4">
                  <router-link
                    class="button is-primary is-block is-rounded is-outlined"
                    to="#"
                  >
                    تسجيل الدخول
                  </router-link>
                </div>
              </div>
            </div>
            <div class="column is-md-6">
              <img
                src="@/assets/penguin.svg"
                alt=""
                class="image mx-auto"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AnimatedLetters from '@/components/home/AnimatedLetters'
export default {
  name: 'HomeView',
  components: { AnimatedLetters },
}
</script>
