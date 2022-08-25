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
      v-model.trim="email"
      type="email"
      name="email"
    >
  </p>
      <!-- :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}" -->
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
      @click="submitHandler(type)"
    >
  </p>

</v-form>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {email, required, minLength} from 'vuelidate/lib/validators';

export default {
  name: 'AuthForm',
      data: () => ({
      email: '',
      password:''
  }),
  props: {
    type: String,
  },
  // validations:{
  //   email: {email, required},
  //   password:{required, minLength: minLength(6)}
  // },
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
      'toggleModal'
    
    ]),
 
    submitHandler: function (type) {
       console.log('yes', type)
        const user = {
          email: this.email,
          password: this.password
      }
      // e.preventDefault();
      this.toggleModal(false);
      this.getUserAuth({ user, type})
    },  },
  
  
}

</script>

<style>

  </style>