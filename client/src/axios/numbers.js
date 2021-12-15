import axios from 'axios';

export const getMyNumbersAxios = () => axios.get('/mynumbers');

export const createNumberAxios = (data) => axios.post('/number', data);

export const updateNumberAxios = (id, data) => axios.put('/number/' + id, data);

export const deleteNumberAxios = (id) => axios.delete('/number/' + id);

export const callNumberAxios = (id) => axios.post('/numbercall/' + id);
