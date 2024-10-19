import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $books from './store/data'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from './plugins/axios'


const app = createApp(App)

app.use(store)
app.use(router)
app.use(axios, {
    baseUrl:"http://localhost:8080"
})
app.provide('$books', $books)

app.mount('#app')
