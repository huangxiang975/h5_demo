import Vue from "vue";
import Router from "vue-router";
// import home from "./views/home/index.vue";

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: "/",
    //   name: "home",
    //   component: home
    // }
    // {
    //   path: "/login", //
    //   name: "login",
    //   component: () => import("@/views/login/index.vue")
    // }
  ]
});
