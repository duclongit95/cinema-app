import axiosClient from "./axiosClient";

const movieApi = {
  getAll(params) {
    const url = "/QuanLyPhim/LayDanhSachPhim";
    return axiosClient.get(url, { params });
  },

  getDetailMovieAPI(params) {
    const url = "/QuanLyRap/LayThongTinLichChieuPhim";
    return axiosClient.get(url, { params });
  },
};

export default movieApi;
