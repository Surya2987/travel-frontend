import apiClient from "./services";

export default {
  getOrders(id) {
    return apiClient.get("orders/users/"+id);
  },
  addOrder(order) {
    return apiClient.post("orders", order);
  },
};
