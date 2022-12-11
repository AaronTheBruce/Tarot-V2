import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { UserInfo } from '../../../models/login'
import { makeStyles } from "@material-ui/core";
import { FormikErrors, useFormik } from "formik";
import * as yup from "yup";
import { LoadingButton } from "@mui/lab";
import {
  TextField,
  Box,
  Button,
  Card,
  Grid,
  FormGroup,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles({
  layout: {
    display: "flex",
    alignItems: "center",
    height: "90vh",
  },
});

const validate = (values: UserInfo) => {
  const errors: FormikErrors<UserInfo> = {};
  if(!values.email) errors.email = 'Required';
  if(!values.password) errors.password = 'Required';
  else if(values.password.length < 8) errors.password = "Password should be of minimum 8 characters length";
  return errors;
}

export const Login = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => validate(values),
    onSubmit: (values) => console.log("values", values),
  });

  return (
    <Box
      style={{
        margin: "0 5rem",
      }}
    >
      <form className={classes.layout} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Login</h1>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="email"
              label="Email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              loading={false}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
