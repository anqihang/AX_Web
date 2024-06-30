/*
 * @Author: 安琦航 anqihang0106@outlook.com
 * @Date: 2024-06-16 17:07:48
 *
 * @Description 请求实例
 */
export const requestInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

// 请求拦截器
requestInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
requestInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);
