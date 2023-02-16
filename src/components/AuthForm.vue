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
<div class="err" v-if="!this.setNewUserRequest || !this.getNewUser && this.setUsersErrorRequest" :errorMessage="this.setUsersErrorRequest">
  <p  v-if="type === 'login'" class="err-mess">
 Неправильный логин или пароль...
  </p>
  <p  v-if="type === 'signup'" class="err-mess">
 Что-то пошло не так...
  </p>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import {email, required, minLength} from 'vuelidate/lib/validators';

export default {
  name: 'AuthForm',
      data: () => ({
      email: '',
      password:'',
  }),
  props: {
    type: String,
  },
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
        const user = {
          email: this.email,
          password: this.password
      }
      this.getUserAuth({ user, type})
      this.email = [];
      this.password = [];
    },  },
  
  
}

</script>

<style>
    .err-mess {
      background-color: white;
  border: solid 2px red;
    width: 150px;
    height: 35px;
    text-align: center;
    margin-left: 17px;
  }

  </style>