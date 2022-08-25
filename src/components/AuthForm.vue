<template>
  <v-form
  id="app"
  @submit="submitHandler"
>

  <p>
    <label  for="email"></label>
    <input
      placeholder="email"
      id="email"
      v-model="email"
      type="email"
      name="email"
    >
  </p>

  <p>
    <label for="password"></label>
    <input
      placeholder="password"
      id="password"
      v-model="password"
      type="password"
      name="password"
    >
  </p>
  <p>
    <input
      type="submit"
      value="Отправить"
      @click="submitHandler"
    >
  </p>

</v-form>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AuthForm',
  computed: {
    ...mapGetters([
      'getNewUser',
      'setNewUserRequest',
      'setUsersErrorRequest',
    ])
  },
  methods: {
    ...mapActions([
      'getUserAuth',
    
    ]),
    // handleSubmit: function (e) {
    //   e.preventDefault();
    //   this.getUserAuth()
    // },  },
    submitHandler() {
      console.log('yes')
      // this.$router.push('/')
    }
  
}
}
</script>

<style>

  </style>