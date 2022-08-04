import React from 'react';

import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Grid,
  Paper,
  TextField,
} from '@mui/material';
import { useFormik } from 'formik';

import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { sendOrderData } from 'store/reducers/catalogReducer';
import { selectOrder } from 'store/selectors/selectors';

export const DataUser = () => {
  const dispatch = useAppDispatch();

  const order = useAppSelector(selectOrder);

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      address: '',
      phone: '',
    },
    validate: values => {
      if (!values.name) {
        return {
          name: 'Name is required',
        };
      }
      if (!values.surname) {
        return {
          surname: 'Surname is required',
        };
      }
      if (!values.address) {
        return {
          address: 'Address is required',
        };
      }
    },
    onSubmit: values => {
      if (order.length !== 0) {
        dispatch(sendOrderData(values));
      } else {
        console.error('Сart is empty');
      }
    },
  });

  return (
    <Box style={{ margin: 20 }}>
      <Paper>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormGroup>
                <TextField
                  style={{ margin: 10 }}
                  required
                  id="outlined-required"
                  label="NAME"
                  {...formik.getFieldProps('name')}
                />
                {formik.errors.name ? (
                  <div style={{ marginLeft: 10 }}>{formik.errors.name}</div>
                ) : null}

                <TextField
                  style={{ margin: 10 }}
                  required
                  id="outlined-required"
                  label="SURNAME"
                  {...formik.getFieldProps('surname')}
                />
                {formik.errors.surname ? (
                  <div style={{ marginLeft: 10 }}>{formik.errors.surname}</div>
                ) : null}

                <TextField
                  style={{ margin: 10 }}
                  required
                  id="outlined-required"
                  label="ADDRESS"
                  {...formik.getFieldProps('address')}
                />
                {formik.errors.address ? (
                  <div style={{ marginLeft: 10 }}>{formik.errors.address}</div>
                ) : null}

                <TextField
                  style={{ margin: 10 }}
                  id="outlined-number"
                  label="PHONE"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <Button type="submit" size="large" color="primary">
                  <b>ORDER</b>
                </Button>
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
      </Paper>
    </Box>
  );
};
