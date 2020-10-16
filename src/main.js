import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueChatScroll from 'vue-chat-scroll';

Vue.use(Buefy);
Vue.use(VueChatScroll);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
