<template>
  <div class="letters">
    <div class="container">
      <div class="letters-grid">
        <router-link
          v-for="letter in letters"
          :key="letter.text"
          class="letter"
          :to="{ name: 'letters.show', params: { letter: letter.value } }"
        >
          {{ letter.value }}
        </router-link>
        <div class="penguin">
          <img
            src="@/assets/penguin/choose-letter.svg"
            alt=""
            class="image"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    letters: [],
  }),

  async created () {
    const res = await this.axios.get('/letters')
    this.letters = res.data.data
  },
}
</script>

<style lang="scss">
$letter-size: 100px;

.letters {
  padding-top: $navbar-height + 1rem;
  min-height: 100vh;
}
.letters-grid {
  display: grid;
  justify-content: center;
  justify-items: center;
  row-gap: 3em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "p p p"
    "p p p"
  ;

  .penguin {
    grid-area: p;
    justify-self: start;
    align-self: end;
  }

  @media screen and (min-width: $tablet) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      ". . . p p"
      ". . . p p"
    ;
  }

  .letter {
    @media screen and (max-width: $tablet) {
      &:nth-of-type(3N + 2) {
        margin-top: 6rem;
      }
    }

    @media screen and (min-width: $tablet) {
      &:nth-of-type(5N + 3):not(:nth-of-type(-N + 6)),
      &:nth-of-type(5N + 5):not(:nth-of-type(-N + 6)),
      &:nth-of-type(2),
      &:nth-of-type(5) {
        margin-top: 6rem;
      }
    }
  }
}
</style>
