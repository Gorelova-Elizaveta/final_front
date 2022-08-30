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
        <AuthForm :type="type" />
        <footer class="modal-footer">
          <slot name="footer">

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


</style> 