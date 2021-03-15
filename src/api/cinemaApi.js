import axiosClient from "./axiosClient";

const cinemaApi = {
  getCategoryGroupCinemaList() {
    const url = "/QuanLyRap/LayThongTinHeThongRap";
    return axiosClient.get(url);
  },

  getGroupCinemaList(params) {
    const url = "QuanLyRap/LayThongTinLichChieuHeThongRap?";
    return axiosClient.get(url, { params });
  },
};

export default cinemaApi;
