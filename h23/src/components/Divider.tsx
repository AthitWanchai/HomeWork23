import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Divider(
    name: string
) {
    return { name };
}

const rows = [
    Divider('Specifications'),
    Divider('Display: 6.1 inches'),
    Divider('Resolution: 1080 x 2400 pixels'),
    Divider('Processor: Snapdragon 888'),
    Divider('RAM: 8GB'),
    Divider('Storage: 128GB'),
    Divider('Battery: 4500mAh'),
];

export default function BasicTable() {
    return (
        <section >
            <TableContainer component={Paper} >
                <Table >
                    <TableBody >
                        {rows.map((row) => (
                            <TableRow key={row.name} >
                                <TableCell component="th" scope="row" sx={{ margin: '10px', padding: '10px' }}>
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </section>

    );
}