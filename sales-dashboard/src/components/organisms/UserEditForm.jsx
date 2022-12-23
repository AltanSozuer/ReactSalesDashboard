import AtomForm from "../atoms/AtomForm";
import FormTextFieldWithLabel from "../molecules/FormTextFieldWithLabel";

export default function UserEditForm() {
    // TODO: add "value" props to each component
    return (
        <div>
            <AtomForm>
                <FormTextFieldWithLabel
                    className="editUser-edit-form-element"
                    labelFor="username"
                    labelText="Username"
                    classNameForLabel="editUser-form-label"
                    id="username"
                    name="username"
                    size="small"
                    classNameForInput="editUser-form-input" />
                <FormTextFieldWithLabel
                    className="editUser-edit-form-element"
                    labelFor="fullname"
                    labelText="Fullname"
                    classNameForLabel="editUser-form-label"
                    id="fullname"
                    name="fullname"
                    size="small"
                    classNameForInput="editUser-form-input" />
                <FormTextFieldWithLabel
                    className="editUser-edit-form-element"
                    labelFor="email"
                    labelText="Email"
                    classNameForLabel="editUser-form-label"
                    id="email"
                    name="email"
                    size="small"
                    classNameForInput="editUser-form-input" />
                <FormTextFieldWithLabel
                    className="editUser-edit-form-element"
                    labelFor="phone"
                    labelText="Phone"
                    classNameForLabel="editUser-form-label"
                    id="phone"
                    name="phone"
                    size="small"
                    classNameForInput="editUser-form-input" />
                <FormTextFieldWithLabel
                    className="editUser-edit-form-element"
                    labelFor="location"
                    labelText="Location"
                    classNameForLabel="editUser-form-label"
                    id="location"
                    name="location"
                    size="small"
                    classNameForInput="editUser-form-input" />
            </AtomForm>
        </div>
    )
}