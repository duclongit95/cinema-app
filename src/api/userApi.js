import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/QuanLyNguoiDung/DangKy";
    return axiosClient.post(url, data);
  },

  login(data) {
    const url = "/QuanLyNguoiDung/DangNhap";
    return axiosClient.post(url, data);
  },
};

export default userApi;
