export default function FormElement({
    labelFor,
    labelText,
    inputType,
    id,
    name,
    classNameForLabel,
    classNameForInput
}){
    return (
        <div>
            <label for={ labelFor } className={classNameForLabel} > { labelText } </label>
            <input type={inputType} id={id} name={name} className={classNameForInput} /> 
        </div>
    )
}