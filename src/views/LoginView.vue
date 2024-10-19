<template>
  <!-- <div class="modal-backdrop"> -->
  <div
    class="modal"
    id="loginModal"
    style="display: flex; background-color: #2125297b"
    tabindex="-1"
    aria-labelledby="modalLabel"
    @click.self.prevent="closeModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Simple Modal</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click.prevent="closeModal"
          ></button>
        </div>
        <div class="modal-body">
          <h3>Login</h3>
          <div class="inputWithLabel">
            <label for="" class="label">Username </label>
            <input type="text" class="form-control" v-model="title" />
          </div>
          <div class="inputWithLabel">
            <label for="" class="label">Password</label>
            <input type="password" class="form-control" v-model="title" />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click.prevent="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click.prevent="login">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script setup>
import { defineProps, inject } from 'vue'

const axios = inject('$axios')

const { onClose } = defineProps({ onClose: Function })

const closeModal = () => {
  console.log('closeModal')

  onClose()
}

const login = () => {
  axios
    .post('/auth/login', {
      username: 'admin',
      password: 'password',
    })
    .then((response) => {
      console.log('Success')
      console.log(JSON.stringfy(response))
    })
    .catch((e) => {
      console.log('Error')
      console.log(e)
    })
}
</script>
<style>
.modal-content {
  border-radius: 8px;
}
</style>
