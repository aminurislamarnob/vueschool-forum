import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import AppDate from '@/components/AppDate.vue'

const app = createApp(App)
app.component('FormatedDate', AppDate)
app.use(router)
app.mount('#app')
