// 请求拦截器

import axios from "axios";
import { MessageBox } from "mint-ui";
import store from "@/store/index";

// create an axios instance
const service = axios.create({
  // baseURL: "http://192.168.1.17:8026/",
  timeout: 50 * 1000
  // headers: {
  //   "x-superzone-req-platform": "Dingding"
  // }
});

// 请求前拦截器
service.interceptors.request.use(
  config => {
    // 如果身份 token 存在的话，那就直接加入 token 到 headers 中

    if (sessionStorage.getItem("token")) {
      config.headers.Authorization = sessionStorage.getItem("token");
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

// 请求返回后拦截器
service.interceptors.response.use(
  // response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  res => {
    const _DATA_ = res.data;
    if (_DATA_.errcode != null && _DATA_.errmsg) {
      if (_DATA_.errcode !== 0) {
        MessageBox({
          message: `[${_DATA_.errcode}]${_DATA_.errmsg.join(",")}`,
          type: "error",
          duration: 10 * 1000
        });
        return Promise.reject("error");
      }
    }
    return _DATA_;
  },
  error => {
    MessageBox(`错误原因`, `${error}`);
    return Promise.reject(error);
  }
);

export default service;
