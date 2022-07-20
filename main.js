import App from './App'
import { myRequest } from './util/api.js'
import store from './store/index.js'



// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$axios = myRequest;
  app.use(store)
  return {
    app
  }
}
// #endif