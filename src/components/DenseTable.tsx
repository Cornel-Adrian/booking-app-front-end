import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function createData(
  name: string,
  description: string,
  price: number,
) {
  return { name, description, price };
}

const rows = [
  createData('Frozen yoghurt', "description", 6.0),
  createData('Ice cream sandwich', "description", 9.0),
  createData('Eclair', "description", 16.0),
  createData('Cupcake', "description", 3.7),
  createData('Gingerbread', "description", 16.0),
];

export default function DenseTable() {
  return (
    <Container maxWidth="xl">
      <TableContainer component={Paper} sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Service description</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell align='center'>{row.price}</TableCell>
                <TableCell align='right'><Button sx={{background:'#2c5d4f'}} variant="contained">Buy Now</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
    </Container>
  );
}