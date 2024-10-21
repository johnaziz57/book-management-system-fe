<template>
  <button v-if="userStore.isLoggedIn()" class="btn mx-3">
    User
  </button>
  <button v-else class="btn btn-primary mx-3" @click.prevent="showModal">
    Log in
  </button>
  <login-view v-show="isModalVisible" :onClose="closeModal" />
</template>
<script setup lang="ts">
import { useUserStore } from '@/store/data'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'

const userStore = useUserStore()

console.log(`what we have: ${userStore.isLoggedIn()}`)

let isModalVisible = ref(false)
const showModal = () => {
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
}
</script>
<style lang="css"></style>
