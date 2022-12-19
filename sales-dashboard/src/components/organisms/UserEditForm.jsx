import AtomForm from "../atoms/AtomForm";
import FormElement from "../molecules/FormElement";

export default function UserEditForm(){
    return (
        <div>
            <AtomForm>
                <FormElement 
                    labelFor="username" 
                    labelText="Username" 
                    classNameForLabel="editUser-form-label"
                    inputType="text"
                    id="username"
                    name="username"
                    classNameForInput="editUser-form-input" />
                <FormElement 
                    labelFor="fullname" 
                    labelText="Fullname" 
                    classNameForLabel="editUser-form-label"
                    inputType="text"
                    id="fullname"
                    name="fullname"
                    classNameForInput="editUser-form-input" />
                <FormElement 
                    labelFor="email" 
                    labelText="Email" 
                    classNameForLabel="editUser-form-label"
                    inputType="text"
                    id="email"
                    name="email"
                    classNameForInput="editUser-form-input" />
                <FormElement 
                    labelFor="phone" 
                    labelText="Phone" 
                    classNameForLabel="editUser-form-label"
                    inputType="text"
                    id="phone"
                    name="phone"
                    classNameForInput="editUser-form-input" />
                <FormElement 
                    labelFor="location" 
                    labelText="Location" 
                    classNameForLabel="editUser-form-label"
                    inputType="text"
                    id="location"
                    name="location"
                    classNameForInput="editUser-form-input" />
            </AtomForm>
        </div>
    )
}