import React from "react";
import PropTypes from "prop-types";
import LoginForm from "./LoginForm";
import { useDispatch } from "react-redux";
import { actLoginUser } from "redux/slice/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";

Login.propTypes = {
  handleIsDialog: PropTypes.func,
  onCloseDialog: PropTypes.func,
};

Login.defaultProps = {
  handleIsDialog: null,
  onCloseDialog: null,
};

function Login(props) {
  const { handleIsDialog, onCloseDialog } = props;
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const handleOnSubmit = async (user) => {
    console.log(user);
    try {
      const resultAction = await dispatch(actLoginUser(user));
      unwrapResult(resultAction);
      await enqueueSnackbar("Đăng nhập thành công", { variant: "success" });
      if (onCloseDialog) {
        await onCloseDialog();
      }
    } catch (error) {
      enqueueSnackbar("Đăng nhập thất bại", { variant: "error" });
    }
  };

  return (
    <React.Fragment>
      <LoginForm onSubmit={handleOnSubmit} handleIsDialog={handleIsDialog} />
    </React.Fragment>
  );
}

export default Login;
