import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/global.css'
import './index.css'

const app = createApp(App)

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  app.use(router)
  app.mount('#app')
})
