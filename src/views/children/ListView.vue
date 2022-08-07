<template>
  <div class="children">
    <div class="container">
      <h1 class="title is-2 has-text-primary has-text-centered mb-6">
        أطفالي
      </h1>
      <div class="columns is-multiline is-centered">
        <div
          v-for="child in children"
          :key="child.id"
          class="column is-6-desktop"
        >
          <div
            class="card has-top-cloud"
            :class="child.is_male ? 'is-secondary' : 'is-pink'"
          >
            <div class="card-content">
              <div class="columns is-mobile">
                <div class="column is-9">
                  <div v-text="child.name" />
                  <div>
                    المستوى {{ child.level }}
                  </div>
                  <div>
                    عدد النقاط {{ child.points_count }}
                  </div>
                  <div>
                    أيام الحماس {{ child.streak_days_count }}
                  </div>
                </div>
                <div class="column is-3">
                  <figure class="image is-rounded">
                    <img
                      :src="child.image"
                      :alt="child.name"
                    >
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="!children.length"
          class="subtitle is-4 has-text-centered"
        >
          لم يتم إضافة أي طفل حتى الآن
        </div>
        <div class="column is-12 has-text-centered">
          <button
            class="button is-primary is-rounded"
            @click="$router.push({ name: 'children.create' })"
          >
            إضافة طفل
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChildrenList',

  data: () => ({
    children: [],
  }),

  async created () {
    const res = await this.axios.get('/children')
    this.children = res.data.data
    this.$store.dispatch('hideSpinner')
  },
}
</script>
