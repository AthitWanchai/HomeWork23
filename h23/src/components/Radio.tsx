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
        <div className='pt-5'>
            <TableContainer component={Paper}>
                <TableBody>
                    <TableRow>
                        <TableCell >
                            <Radio
                                checked={selectedValue === 'a'}
                                onChange={handleChange}
                                value="a"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'A' }}
                            />
                            <span>1</span>
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'b'}
                                onChange={handleChange}
                                value="b"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'B' }}
                            />
                            <span>2</span>
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'c'}
                                onChange={handleChange}
                                value="c"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'C' }}
                            />
                            <span>3</span>
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'd'}
                                onChange={handleChange}
                                value="d"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'D' }}
                            />
                            <span>4</span>
                        </TableCell>
                        <TableCell>
                            <Radio
                                checked={selectedValue === 'e'}
                                onChange={handleChange}
                                value="e"
                                name="radio-buttons"
                                inputProps={{ 'aria-label': 'E' }}
                            />
                            <span>5</span>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </TableContainer>
        </div>
    );
}
