import React, { FC } from 'react';

import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';

import { PATH } from 'App';
import { useAppDispatch } from 'hooks/redux-hooks';
import { registerUser } from 'store/reducers/authReducer';

export const RegisterPages: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: values => {
      if (!values.email) {
        return {
          email: 'Email is required',
        };
      }
      if (!values.password) {
        return {
          password: 'Password is required',
        };
      }
      if (!values.confirmPassword) {
        return {
          confirmPassword: 'Confirm password is required',
        };
      }
    },
    onSubmit: async values => {
      await dispatch(registerUser(values));
      navigate('/');
    },
  });

  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel>
              <p>
                Already have an account
                <NavLink to={PATH.LOGIN}> Sign in</NavLink>
              </p>
            </FormLabel>
            <FormGroup>
              <TextField
                label="Email"
                margin="normal"
                {...formik.getFieldProps('email')}
              />
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
              <TextField
                type="password"
                label="Password"
                margin="normal"
                {...formik.getFieldProps('password')}
              />
              {formik.errors.password ? <div>{formik.errors.password}</div> : null}
              <TextField
                type="password"
                label="Confirm Password"
                margin="normal"
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.errors.confirmPassword ? (
                <div>{formik.errors.confirmPassword}</div>
              ) : null}

              <Button type="submit" variant="contained" color="primary">
                Register
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
