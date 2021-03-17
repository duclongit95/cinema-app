import React from "react";
import PropTypes from "prop-types";
import RegisterForm from "./RegisterForm";
import userApi from "api/userApi";
import { useSnackbar } from "notistack";

Register.propTypes = {
  handleIsDialog: PropTypes.func,
};

Register.defaultProps = {
  handleIsDialog: null,
};

function Register(props) {
  const { handleIsDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const handleOnSubmit = async (newUser) => {
    try {
      newUser.maNhom = "GP10";
      newUser.maLoaiNguoiDung = "KhachHang";
      await userApi.register(newUser);
      await enqueueSnackbar("Đăng ký thành công", { variant: "success" });
      await handleIsDialog(true);
    } catch (error) {
      console.log("Error", error);
      enqueueSnackbar("Đăng ký thất bại", { variant: "error" });
    }
  };

  return (
    <React.Fragment>
      <RegisterForm onSubmit={handleOnSubmit} handleIsDialog={handleIsDialog} />
    </React.Fragment>
  );
}

export default Register;
