import React from 'react';

import { Box, Button, Grid, Paper, TextField } from '@mui/material';

export const DataUser = () => {
  return (
    <Box style={{ margin: 20 }} component="form" noValidate autoComplete="off">
      <Paper>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <TextField
            style={{ margin: 10 }}
            required
            id="outlined-required"
            label="NAME"
            defaultValue="NAME"
          />
          <TextField
            style={{ margin: 10 }}
            required
            id="outlined-required"
            label="SURNAME"
            defaultValue="SURNAME"
          />
          <TextField
            style={{ margin: 10 }}
            required
            id="outlined-required"
            label="ADDRESS"
            defaultValue="ADDRESS"
          />
          <TextField
            style={{ margin: 10 }}
            id="outlined-number"
            label="PHONE"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button size="large">
            <b>ORDER</b>
          </Button>
        </Grid>
      </Paper>
    </Box>
  );
};
