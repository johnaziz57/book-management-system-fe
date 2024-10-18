<template>
  <div class="navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <button class="btn btn-primary mx-3" @click.prevent="showModal">
      Log in
    </button>
  </div>
  <login-view v-show="isModalVisible" :onClose="closeModal"/>
  <router-view />
</template>

<script setup>
import { ref } from 'vue'
import LoginView from '@/views/LoginView.vue'


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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  background-color: #333;
}

nav {
  padding: 30px;

  padding: 1rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  margin-inline: 8px;
  flex-shrink: 1;
}

nav a:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
