import React from "react";
import { InputLabel, MenuItem, Select } from "@mui/material"
export default function FormSelectWithLabel({
    id,
    className,
    classNameForLabel,
    labelText,
    size,
    value,
    options
}) {
    const [status, setStatus] = React.useState(value);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    return (
        <div className={className}>
            <InputLabel id={id} className={classNameForLabel}>{labelText}</InputLabel>
            <Select
                labelId={id}
                id={ id }
                size={ size }
                value={status}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                label={labelText}
                onChange={handleChange} >
                    {
                        options.map( option => <MenuItem value={option}>{option}</MenuItem> )
                    }
            </Select>
        </div>
    )
}



FormSelectWithLabel.defaultProps = {
    value: "Select"
}