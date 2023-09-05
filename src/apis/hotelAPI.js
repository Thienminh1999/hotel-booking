import api from "./configs/axiosConfig";
import { defineCancelApiObject } from "./configs/axiosUtils";

export const HotelAPI = {
  amountByCity: async function (cancel = false) {
    const response = await api.request({
      url: `/hotels/amount-hotel-by-city`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },

  amountOfType: async function (cancel = false) {
    const response = await api.request({
      url: `/hotels/amount-by-type`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },

  top3Rating: async function (cancel = false) {
    const response = await api.request({
      url: `/hotels/top-3-rating`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  searchHotels: async function (filter, cancel = false) {
    const response = await api.request({
      url: `/hotels/search-by-filter`,
      method: "POST",
      data: filter,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getDetails: async function (hotelId, cancel = false) {
    const response = await api.request({
      url: `/hotels/${hotelId}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getRoomAvailableByTime: async function (params, cancel = false) {
    const response = await api.request({
      url: `/hotels/search-room-by-time`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  bookingRoom: async function (params, cancel = false) {
    const response = await api.request({
      url: `/hotels/booking`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  getAllHotels: async function (cancel = false) {
    const response = await api.request({
      url: `/hotels`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
  updateHotel: async function (params, cancel = false) {
    const response = await api.request({
      url: `/admin/hotel`,
      method: "POST",
      data: params,
      signal: cancel
        ? cancelApiObject[this.get.name].handleRequestCancellation().signal
        : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(HotelAPI);
