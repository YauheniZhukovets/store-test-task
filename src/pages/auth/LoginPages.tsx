import React from 'react';

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
import { loginUser } from 'store/reducers/authReducer';

export const LoginPages = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'stewart-8@mail.ru',
      password: '123456789',
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
    },
    onSubmit: async values => {
      await dispatch(loginUser(values));
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
                Not have account?
                <NavLink to={PATH.REGISTRATION}> Register it</NavLink>
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

              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
