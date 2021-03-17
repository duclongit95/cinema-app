import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

PasswordField.defaultProps = {
  label: "",
};

function PasswordField(props) {
  const { form, name, label } = props;
  const { errors } = form;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <FormControl variant="outlined" fullWidth margin="normal">
      <InputLabel
        htmlFor="outlined-adornment-password"
        style={{ color: `${errors[name] ? "#f44336" : ""}` }}
      >
        {label}
      </InputLabel>
      <Controller
        control={form.control}
        as={OutlinedInput}
        form={form}
        name={name}
        label={label}
        id={name}
        error={!!errors[name]}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText style={{ color: "#f44336" }}>
        {errors[name]?.message}
      </FormHelperText>
    </FormControl>
  );
}

export default PasswordField;
