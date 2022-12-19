import { TextField  } from "@mui/material"
export default function FormElement({
    labelFor,
    labelText,
    id,
    name,
    className,
    classNameForLabel,
    classNameForInput,
    size,
    value
}){
    return (
        <div className={ className }> 
            <label for={ labelFor } className={classNameForLabel} > { labelText } </label>
            <TextField 
                id={id} 
                name={name} 
                size={size} 
                value={value}
                className={classNameForInput} />
        </div>
    )
}