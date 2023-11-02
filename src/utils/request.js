import axios from 'axios';

const domain = 'http://localhost:3333';

// 对于接口请求前的参数做转换， 主要添加统一的 domain
// Implemented parameter transformation before API requests to append a consistent domain to each endpoint
axios.interceptors.request.use((config) => ({
  ...config,
  url: domain + config.url,
}));

// 对返回的结果， 做拦截， 主要有两部分： 数据转换 和 错误的处理
// For intercepting the responses, the process typically involves two main parts: data transformation and error handling. 
axios.interceptors.response.use((response) => response.data, (err) => Promise.reject(err)); 

// get get server resouces
export const get = (url) => axios.get(url);
// post add one new resource
export const post = (url, params) => axios.post(url, params);
// put update one resource
export const put = (url, params) => axios.put(url, params);
// delete delete one resource
export const del = (url, params) => axios.del(url, params);
