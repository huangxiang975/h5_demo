// 路由拦截器

import router from "@/router/index";
import store from "@/store/index";

const whiteList = [""]; // 白名单

function isWhitePage({ path }) {
  return whiteList.indexOf(path) !== -1;
}

router.beforeEach((to, from, next) => {
  if (isWhitePage(to)) {
    // 判断进入的是否白名单页面，若白名单页面，则直接进入
    next();
  } else if (sessionStorage.getItem("token")) {
    // 判断token是否存在  不存在则进入登录验证
    next();
  } else {
    next({
      path: "/login",
      query: {
        callback: encodeURI(to.fullPath)
      }
    });
  }
});