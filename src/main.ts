import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import Vuetify from "./plugins/vuetify.ts";

createApp(App).use(Vuetify).mount('#app').$nextTick(() => {
  // Remove Preload scripts loading
  postMessage({ payload: 'removeLoading' }, '*')

  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
