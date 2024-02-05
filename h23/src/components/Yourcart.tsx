import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import { Paper, Input, Button, } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
function Yourcart() {

    return (
        <>
            <div className="container ">
                <div className='flex flex-row justify-between'>
                    <div>
                        <h1>You Cart</h1>
                    </div>
                    <div>
                        <label className="bg-slate-600  text-white font-bold py-2 px-4 rounded-full">3</label>
                    </div>
                </div>
                <div className='py-5 max-w-5'>
                    <TableContainer component={Paper} >
                        <Table>
                            <TableBody>
                                <TableRow component="th" scope="row">
                                    <TableCell className='flex items-center justify-between'>
                                        <h1><strong>Product name</strong></h1>
                                        <p>Brief description</p>
                                    </TableCell>
                                    <TableCell align="right">
                                        <strong>$12</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <h1>Second product</h1>
                                        <p>Brief description</p>
                                    </TableCell>
                                    <TableCell align="right">
                                        <strong>$8</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <h1>Third item</h1>
                                        <p>Brief description</p>
                                    </TableCell>
                                    <TableCell align="right">
                                        <strong>$5</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <h1>Promo code</h1>
                                        <p>EXAMPLECODE</p>
                                    </TableCell>
                                    <TableCell align="right">
                                        <strong>-$5</strong>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <h1>Total(USD)</h1>
                                    </TableCell>
                                    <TableCell align="right">
                                        <strong>$20</strong>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div>
                    <Paper elevation={5} className="p-2 flex items-center">
                        <Input
                            fullWidth
                            sx={{ '--Input-decoratorChildHeight': '45px' }}
                            className='m-2 rounded-md ring-2 py-1.5 pl-3  ring-inset ring-gray-300 placeholder:text-gray-400'
                            placeholder="Redeem code"
                            endAdornment={
                                <InputAdornment position="end">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}
                                >
                                    Subscribe
                                </Button>
                                </InputAdornment>
                            }
                        />
                    </Paper>
                </div>
            </div>

        </>
    )
}

export default Yourcart