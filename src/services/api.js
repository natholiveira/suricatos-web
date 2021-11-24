import axios from 'axios';

const api = () => {
    const defaultOptions = {
      baseURL: 'https://suricatos-fiap.herokuapp.com/',
    };

    let instance = axios.create(defaultOptions);
  
    instance.interceptors.request.use(function (config) {
      const token = localStorage.getItem('token');
      if (token) config.headers.Authorization =  `Bearer ${token}`;
      return config;
    });
  
    return instance;
  };
  
  export default api();