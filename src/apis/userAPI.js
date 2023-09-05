import api from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const UserAPI = {
  signup: async function (data, cancel = false) {
    try {
      const response = await api.request({
        url: `/users/signup`,
        method: "POST",
        data: data,
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  login: async function (username, password, cancel = false) {
    try {
      const response = await api.request({
        url: `/users/login`,
        method: "POST",
        data: {
          username: username,
          password: password,
        },
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });
      localStorage.setItem("CURRENT_USER", JSON.stringify(response.data));
      return response;
    } catch (error) {
      return error.response;
    }
  },
  getTransactions: async function (cancel = false) {
    const user = JSON.parse(localStorage.getItem("CURRENT_USER"));
    const response = await api.request({
      url: `/users/transactions/${user._id}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(UserAPI);
