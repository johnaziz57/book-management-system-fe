import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from './plugins/axios'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"



const app = createApp(App)

app.use(store)
app.use(router)
app.use(axios, {
    baseUrl:"http://localhost:8080"
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedState)
app.use(pinia)

app.mount('#app')
