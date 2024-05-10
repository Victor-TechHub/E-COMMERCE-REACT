import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CustomSelect() {
    const [qty, setQty] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setQty(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }} margin="10px 0">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Qty</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={qty}
                    label="Qty"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                </Select>
            </FormControl>
        </Box >
    );
}
