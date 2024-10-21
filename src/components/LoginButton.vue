<template>
    <button class="btn btn-primary mx-3" @click.prevent="showModal">
      Log in
    </button>
    <login-view v-show="isModalVisible" :onClose="closeModal"/>
</template>
<script setup lang="ts">
import LoginView from '@/views/LoginView.vue';
import { ref } from 'vue'


let isModalVisible = ref(false)
const showModal = () => {
  console.log('SHOW MODAL')
  isModalVisible.value = true
}

const closeModal = () => {
  console.log('SHOW MODAL')
  isModalVisible.value = false
}
</script>
<style lang="css">
    
</style>