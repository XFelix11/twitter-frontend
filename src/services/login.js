import { get, post } from '../utils/request';

export const login = (username, password) => get(`/api/login/${username}/${password}`);

export const register = (username, password) => post(`/register/${username}/${password}`);

/* get user information  */
export const getUser = (id) => get(`/api/users/${id}`);

