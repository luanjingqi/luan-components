import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import './reset.css';
import VueGnComponents from '../packages'
import luanButton from '../packages/buttons/src/buttons.vue'
Vue.use(VueGnComponents)

Vue.config.productionTip = false
Vue.component(luanButton.name, luanButton)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
