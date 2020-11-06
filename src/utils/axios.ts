import axios from 'axios';

axios.defaults.baseURL = 'http://172.16.1.101:8080'
axios.defaults.timeout = 1000 * 180;
// 统一设置请求头格式
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
    config => {
        config.headers.post['cacahe-control'] = 'no-cache';
        config.headers.post['Pragma'] = 'no-cache';
        return config;
    },
    error => {

    }
)
