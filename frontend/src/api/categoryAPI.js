import { axiosClient } from './axiosClient';

export const categoryAPI = {
    list() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    read(id) {
        console.log(id);
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    listRelated(id) {
        const url = `/categories/related/${id}`;
        return axiosClient.get(url);
    },
    add(category, userId) {
        const url = `/categories/${userId}`;
        return axiosClient.post(url, category);
    },
    update(id, data, userId) {
        const url = `/categories/${id}/${userId}`;
        return axiosClient.put(url, data);
    },
    remove(id, userId) {
        const url = `/categories/${id}/${userId}`;
        return axiosClient.delete(url);
    }
}
export default categoryAPI;