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
import ChildInfo from '@/components/register/ChildInfo'
import AccountCredentials from '@/components/register/AccountCredentials'
import AccountCreated from '@/components/register/AccountCreated'

export default {
  name: 'RegisterView',

  components: {
    ChooseGender,
    ChildInfo,
    AccountCredentials,
    AccountCreated,
  },

  data: () => ({
    form: {
      email: '',
      password: '',
      password_confirmation: '',
      child: {
        name: '',
        is_male: '',
        birthdate: '',
        image: '',
      },
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
      this.current_stage_index++
    },
  },
}
</script>
