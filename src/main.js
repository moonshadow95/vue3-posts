import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap'
import router from '@/router'

// console.log('MODE', import.meta.env.MODE)
// console.log('BASE_URL', import.meta.env.BASE_URL)
// console.log('PROD', import.meta.env.PROD)
// console.log('DEV', import.meta.env.DEV)
// console.log('API_URL', import.meta.env.VITE_API_URL)
