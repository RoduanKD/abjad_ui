<template>
  <div class="container fill-height is-flex is-flex-direction-column is-justify-content-center">
    <div class="columns is-centered is-vcentered has-text-centered is-multiline">
      <div class="column is-12">
        <div class="title is-4">
          لقد تم إنشاء حسابك بنجاح
        </div>
      </div>
      <div class="column is-12">
        <router-link
          :to="{ name: 'letters.index' }"
          class="button is-primary is-rounded"
        >
          ابدأ اللعب
        </router-link>
      </div>
      <div class="column is-4">
        <figure class="image">
          <img
            src="@/assets/penguin/let-us-learn.svg"
            alt="هيا نتعلم"
          >
        </figure>
      </div>
    </div>
  </div>
</template>
