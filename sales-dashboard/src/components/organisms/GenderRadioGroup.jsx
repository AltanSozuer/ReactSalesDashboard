import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

export default function GenderRadioGroup({ className }) {
    return (
        <div className={ className }>
            <FormControl>
                <FormLabel sx={{ color: "black", fontWeight: 500 }} >Gender</FormLabel>
                <RadioGroup row >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>
        </div>
    )
}