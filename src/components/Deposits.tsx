import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits() {

  const acum = new Date().toJSON().slice(0,10);

  return (
    <React.Fragment>
      <Title>Vanzari azi</Title>
      <Typography component="p" variant="h4">
        3,024.00 lei
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        In data de {acum}
      </Typography>
    </React.Fragment>
  );
}
