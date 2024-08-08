import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { languages } from '@/i18n/index'
import { createI18n } from 'vue-i18n'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import '@/assets/css/main.css'

const messages = Object.assign(languages)

const i18n = createI18n({
    locale: 'ru',
    messages
})


createApp(App).use(store).use(router).use(Toast).use(i18n).mount('#app')
