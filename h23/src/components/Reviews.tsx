
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';

function Reviews() {
    return (
        <div className='pt-5'>
            <TableContainer component={Paper} >
                <Table>
                    <TableBody>
                        <TableRow component="th" scope="row" >
                            <TableCell  >
                                <h1>Rate this Product</h1>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <h1>John Doe</h1>
                                <p>Great product! i love the design and the features. Highly recommended!</p>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <h1>Jane Smith</h1>
                                <p>Amazing value for the price. lt has exceeded my expectations. will buy agin!</p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Reviews