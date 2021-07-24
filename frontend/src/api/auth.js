import { axiosClient } from './axiosClient';
import axios from 'axios';

const authAPI = {
    signup(user) {
        const url = '/signup';
        return axiosClient.post(url, user);
    },
    signin(user) {
        const url = '/signin';
        return axiosClient.post(url, user);
    },
    signout(){
        const url ='/signout';
        return axiosClient.get(url);
    },
    list() {
        const url = `/users`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/users/${id}`;
        return axiosClient.delete(url);
    },
    update(id, data) {
        const url = `/users/${id}`;
        return axiosClient.put(url, data);
    },
    read(id) {
        const url = `/users/${id}`;
        return axiosClient.get(url);
    },
}
export default authAPI;