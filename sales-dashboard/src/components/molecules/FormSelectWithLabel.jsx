import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material"
export default function FormSelectWithLabel({
    id,
    className,
    classNameForLabel,
    labelText,
    size
}) {
    const [status, setStatus] = React.useState('Select');

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <div className={className}>
            <InputLabel id="status-select-label" className={classNameForLabel}>{labelText}</InputLabel>
            <Select
                labelId="status-select-label"
                id={ id }
                size={ size }
                value={status}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                label={labelText}
                onChange={handleChange} >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
            </Select>
        </div>
    )
}