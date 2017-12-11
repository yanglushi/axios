import axios from 'axios';
import qs from 'qs';
import router from '../router/index'
import {Message} from 'element-ui'
//最基本的axios,没有加入登录和组册


// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: fetchTimeout             // 请求超时时间
});


// http request 拦截器
service.interceptors.request.use(
    config => {
        if(config.token === undefined) {
      setTimeout(() => {
          //替换
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          });
        }, 3000);
        return Promise.reject({message: '用户登录信息已过期，请重新登录'});
      }

    }
    err => {
        return Promise.reject(err);
});

// http response 拦截器
service.interceptors.response.use(
    response => {
    switch (response.status) {
    /*请求成功*/
    case 200:
        return response.data;
    /*返回的数据为空*/
    case 201:
        return response.data;
    default:
        return Promise.reject(response.data);
    }
})