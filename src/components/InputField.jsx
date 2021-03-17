import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { Controller } from "react-hook-form";

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
};

InputField.defaultProps = {
  lable: "",
};

function InputField(props) {
  const { form, name, label } = props;
  const { errors } = form;

  return (
    <Controller
      control={form.control}
      as={TextField}
      form={form}
      name={name}
      label={label}
      fullWidth
      margin="normal"
      variant="outlined"
      error={!!errors[name]}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
