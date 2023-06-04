import apiClient from "./services";

export default {
  getOrders() {
    return apiClient.get("orders");
  },
  addOrder(order) {
    return apiClient.post("orders", order);
  },
};
