import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const getItems = () => axios.get(BASE_URL);
export const createItem = (data) => axios.post(BASE_URL, data);
export const updateItem = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteItem = (id) => axios.delete(`${BASE_URL}/${id}`);

// Add the following new methods

export const signup = (data) => axios.post('localhost:5000/signup', data);
export const login = (data) => axios.post('localhost:5000/login', data);
