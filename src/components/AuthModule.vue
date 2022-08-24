<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            {{ type }}!
                
            <div class="btn-close" @click="close">
              x
            </div>
          </slot>
        </header>
        <!-- <div v-if="type === 'signup'"         class="modal-body"
          id="modalDescription"
        >
          <input  placeholder="email" name="body">
            I'm the default body!
        </div>
        <div>
          <input  placeholder="username">
          <input placeholder="password" type="password">
        </div> -->
        <AuthForm />
        <footer class="modal-footer">
          <slot name="footer">
            <!-- I'm the default footer! -->

            <!-- <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="ok"
            >
              Close me!
            </button> -->
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
import AuthForm from './AuthForm.vue'

export default {
  name: 'AuthModule',
  // props:{
  // isModalVisible: Boolean
  // },
  
  props: {
    type: String,
  },
  components: {
    AuthForm
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
      'userAuth',
      'toggleModal'
    ]),
      close() {
      console.log("aaaa")
    this.toggleModal(false)
    }
    
  },
  
  // mounted() {
  //   this.userAuth()
  // }
}
</script>

<style>
.modal-backdrop {
  margin-top: 10px;
  position: fixed;
  background-color: rgba(2, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  /* padding: 20px 10px; */
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

/* .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  } */
</style> 