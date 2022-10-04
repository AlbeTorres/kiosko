import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: import.meta.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;