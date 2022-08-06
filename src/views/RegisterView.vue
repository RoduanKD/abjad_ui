<template>
  <div class="register p-0">
    <vue-page-transition
      name="fade-in-right"
      class="fill-height"
    >
      <component
        :is="currentStage"
        v-model="form"
        @finished="nextStage"
      />
    </vue-page-transition>
  </div>
</template>

<script>
import ChooseGender from '@/components/register/ChooseGender'

export default {
  components: {
    ChooseGender,
  },

  data: () => ({
    form: {
      child_name: '',
      gender: '',
      birthdate: '',
      image: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
    stages: ['ChooseGender', 'ChildInfo', 'AccountCredentials', 'AccountCreated'],
    current_stage_index: 0,
  }),

  computed: {
    currentStage () {
      return this.stages[this.current_stage_index]
    },
  },

  methods: {
    nextStage () {

    },
  },
}
</script>
