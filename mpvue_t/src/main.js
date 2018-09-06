import Vue from 'vue'
import App from './App'
import '@/plugins'
import store from '@/store'

Vue.config.productionTip = false
App.mpType = 'app'
App.store = store

const app = new Vue(App)
app.$mount()

// app的配置
export default {
  config: {
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '巧房',
      navigationBarTextStyle: 'black'
    }
  }
}
