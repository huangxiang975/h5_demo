import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import MintUI from "mint-ui";
import moment from "moment"; // 解决对时间的处理
import "reset-css";
Vue.use(MintUI);

import "mint-ui/lib/style.css"; // mint-ui样式
import "./utils/rem"; // rem自动计算代码  设计比例 vw > 750px ? 1rem = 75px : 1rem = vw/750*100 px;
import "./utils/permission"; // 路由拦截器

Vue.config.productionTip = false;

Vue.prototype.$moment = moment;

// axios.defaults.baseURL = "http://101.228.87.56:2091";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
