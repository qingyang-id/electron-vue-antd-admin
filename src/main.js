import Vue from 'vue';
import { Button, Slider } from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import App from './App';

Vue.component(Button.name, Button);

Vue.component(Slider.name, Slider);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
