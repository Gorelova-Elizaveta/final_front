<template>
  <div class="header">
    <div class="header_link-home">
      <span class="link-to-main">На главную</span>
      <h1 class="title-news">Lenta</h1>
    </div>
    <div>
      <button @click="showModal('login')" class="entry">Вход</button>
      <button @click="showModal('signup')">Регистрация</button>
        <AuthModule
          v-show="getToggleModal"
          :type="modalType"
    />
    </div>
  

  </div>
</template>

<script>
    import AuthModule from './AuthModule.vue'
    import { mapActions, mapGetters } from 'vuex';
 
    export default {
        name: 'AppBar',
        components: {
            AuthModule
        },
        data () {
      return {
  
        modalType: '',
      };
    },
    computed:{
      ...mapGetters([
        'getToggleModal',
        'setUsersErrorRequest'
      ])
      },
    methods: {
    ...mapActions([
      'toggleModal'
    ]),
      showModal(type) {
        console.log(type);
        this.toggleModal(true);
        this.modalType = type;
      }
    },
  };
  
</script>

<style scoped>
.header {
  background-color: #3ee53344;
  display: flex;
  justify-content: space-around;
}

.link-to-main {
  padding-right: 145px;
}

.entry {
  padding-right: 45px;
}

   body {
        font-family: 'Source Sans Pro', sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
    }
 
    .page {
        position: relative;
        width: 100%;
        min-height: 100%;
    }
    
</style>
