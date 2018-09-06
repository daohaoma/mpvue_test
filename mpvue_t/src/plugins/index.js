import Vue from "vue";
import request from "./request";
import token from '@/utils/token'

// 请求
const header = () => {
  const qfFinToken = token.get();
  return {
    qfFinToken
  };
};

Vue.use(request, {
  baseUrl: "https://devq.qiaofin.com/personnel/weixinApi",
  header
});

// 其他插件
