import { axiosClient } from './axiosClient';

export const orderAPI = {
    list() {
        const url = `/orders`;
        return axiosClient.get(url);
    },
    orderByUser(id) {
        const url = `/orders/users/${id}`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/orders/${id}`;
        return axiosClient.get(url);
    },
    add(order, userId) {
        const url = `/orders/${userId}`;
        return axiosClient.post(url, order);
    },
    update(id, data, userId) {
        const url = `/orders/${id}/${userId}`;
        return axiosClient.put(url, data);
    },
    remove(id, userId) {
        const url = `/orders/${id}/${userId}`;
        return axiosClient.delete(url);
    }
}
export default orderAPI;