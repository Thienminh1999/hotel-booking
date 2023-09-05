import api from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const AdminAPI = {
  getDashboardInfo: async function (cancel = false) {
    const response = await api.request({
      url: `/admin/dashboard-common-info`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getLatestTransactions: async function (cancel = false) {
    const response = await api.request({
      url: `/admin/transactions/latest/8`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  createHotels: async function (params, cancel = false) {
    const response = await api.request({
      url: `/admin/hotels/create`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  deleteHotel: async function (hotelId, cancel = false) {
    const response = await api.request({
      url: `/admin/hotel/${hotelId}`,
      method: "DELETE",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getAllRooms: async function (cancel = false) {
    const response = await api.request({
      url: `/admin/rooms`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  deleteRoom: async function (roomId, cancel = false) {
    try {
      const response = await api.request({
        url: `/admin/rooms/${roomId}`,
        method: "DELETE",
        signal: cancel
          ? cancelApiObject[this.get.name].handleRequestCancellation().signal
          : undefined,
      });
      return response.data;
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  },
  createRooms: async function (params, cancel = false) {
    const response = await api.request({
      url: `/admin/rooms/create`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  updateRoom: async function (params, cancel = false) {
    const response = await api.request({
      url: `/admin/room`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getRoomDetails: async function (roomId, cancel = false) {
    const response = await api.request({
      url: `/admin/rooms/${roomId}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getAllTransactions: async function (cancel = false) {
    const response = await api.request({
      url: `/admin/transactions`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(AdminAPI);
