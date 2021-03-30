import axiosClient from "./axiosClient";

const cinemaApi = {
  // API (2)
  getCategoryGroupCinemaListApi() {
    const url = "/QuanLyRap/LayThongTinHeThongRap";
    return axiosClient.get(url);
  },

  getGroupCinemaListApi(params) {
    const url = "QuanLyRap/LayThongTinLichChieuHeThongRap";
    return axiosClient.get(url, { params });
  },
};

export default cinemaApi;
