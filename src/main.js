import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { instance } from './utils/request'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = instance
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach(function (to, from, next) {
  // console.log(to,"to")
  // console.log(from,"from")
  var manager = JSON.parse(sessionStorage.getItem("manager"))
  if (manager && manager.token) {
    //to 要去的地址   from  来的地址  next
    if (to.name == "Login" && to.path == "/") {
      next("/member")
    }else{
      next()
    }
  } else {
    if (to.name == "Login" && to.path == "/") {
      next()
    } else {
      next("/")
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
