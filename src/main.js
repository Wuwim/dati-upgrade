import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'mint-ui/lib/style.css'
import 'amfe-flexible';

import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
