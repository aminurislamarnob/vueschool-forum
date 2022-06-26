import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import AppDate from '@/components/AppDate.vue'

const app = createApp(App)
app.component('FormatedDate', AppDate)
app.use(router)
app.use(store)
app.mount('#app')
