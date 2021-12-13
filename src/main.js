import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import { FastClick } from 'fastclick'
import './utils/vconsole.js'
import { 
  Button,
  Toast,
  Popup,
  Image as VanImage
 } from 'vant'

FastClick.attach(document.body)

const app = createApp(App)
app
.use(router)
.use(Button)
.use(Toast)
.use(Popup)
.use(VanImage)
.mount('#app')

