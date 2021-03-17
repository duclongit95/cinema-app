import { yupResolver } from "@hookform/resolvers/yup";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import InputField from "components/InputField";
import PasswordField from "components/PasswordField";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import PropTypes from "prop-types";

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  handleIsDialog: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
  handleIsDialog: null,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const schema = yup.object().shape({
  taiKhoan: yup.string().required("Vui lòng nhập Tài khoản"),
  matKhau: yup
    .string()
    .required("Vui lòng nhập Mật khẩu")
    .min(6, "Cần ít nhất 6 ký tự"),
  retypePassword: yup
    .mixed()
    .oneOf([yup.ref("matKhau")], "Mật khẩu không hợp lệ"),
  hoTen: yup.string().required("Vui lòng nhập họ tên"),
  soDt: yup.string().required("Vui lòng nhập số điện thoại"),
  email: yup.string().required("Vui lòng nhập email").email("Sai email"),
});

export default function RegisterForm({ onSubmit, handleIsDialog }) {
  const form = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      retypePassword: "",
      hoTen: "",
      soDt: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={form.handleSubmit(onSubmit)}>
          <InputField form={form} name="hoTen" label="Họ tên" />
          <InputField form={form} name="taiKhoan" label="Tài khoản" />
          <InputField form={form} name="soDt" label="Số điện thoại" />
          <InputField form={form} name="email" label="Email" />
          <PasswordField form={form} name="matKhau" label="Mật khẩu" />
          <PasswordField
            form={form}
            name="retypePassword"
            label="Xác nhận Mật khẩu"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={() => handleIsDialog(true)}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
