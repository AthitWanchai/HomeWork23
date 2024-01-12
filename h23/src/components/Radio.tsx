import * as React from 'react';
import Radio from '@mui/material/Radio';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function RadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className='pt-10'>
            <TableContainer component={Paper}>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            fdff
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
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value="c"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'C' }}
                            />
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'd'}
                                onChange={handleChange}
                                value="d"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'D' }}
                            />
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'e'}
                                onChange={handleChange}
                                value="e"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'E' }}
                            />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </div>
    );
}
