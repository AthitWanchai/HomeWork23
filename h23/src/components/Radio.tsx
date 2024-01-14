import * as React from 'react';
import Radio from '@mui/material/Radio';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='pt-5'>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow component="th" scope="row" >
                            <TableCell  >
                                <h1>Rate this Product</h1>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Radio
                                    checked={selectedValue === 'a'}
                                    onChange={handleChange}
                                    value="a"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'A' }}
                                />
                                <span>1</span>
                                <Radio
                                    checked={selectedValue === 'b'}
                                    onChange={handleChange}
                                    value="b"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'B' }}
                                />
                                <span>2</span>
                                <Radio
                                    checked={selectedValue === 'c'}
                                    onChange={handleChange}
                                    value="c"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'C' }}
                                />
                                <span>3</span>
                                <Radio
                                    checked={selectedValue === 'd'}
                                    onChange={handleChange}
                                    value="d"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'D' }}
                                />
                                <span>4</span>
                                <Radio
                                    checked={selectedValue === 'e'}
                                    onChange={handleChange}
                                    value="e"
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': 'E' }}
                                />
                                <span>5</span>
                                <span className='pl-3'
                                ><Button variant="contained" >Submit Rating</Button>
                                </span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
