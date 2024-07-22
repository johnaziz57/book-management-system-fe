<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create</router-link>
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #333;
  padding: 1rem;
	display: flex;
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
