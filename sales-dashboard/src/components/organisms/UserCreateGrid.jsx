import AtomGrid from "../atoms/AtomGrid";
import AtomButton from "../atoms/AtomButton";
import FormTextFieldWithLabel from "../molecules/FormTextFieldWithLabel";
import GenderRadioGroup from "../organisms/GenderRadioGroup";
import FormSelectWithLabel from "../molecules/FormSelectWithLabel";

export default function UserCreateGrid(){
    return (
        <AtomGrid container spacing={4}> 
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="username"
                    labelText="Username"
                    classNameForLabel="newuser-form-label"
                    id="username"
                    name="username"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="fullname"
                    labelText="Full Name"
                    classNameForLabel="newuser-form-label"
                    id="fullname"
                    name="fullname"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="email"
                    labelText="Email"
                    classNameForLabel="newuser-form-label"
                    id="email"
                    name="email"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="password"
                    labelText="Password"
                    classNameForLabel="newuser-form-label"
                    id="password"
                    name="password"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="phone"
                    labelText="Phone"
                    classNameForLabel="newuser-form-label"
                    id="phone"
                    name="phone"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormTextFieldWithLabel
                    className="newuser-form-element"
                    labelFor="address"
                    labelText="Address"
                    classNameForLabel="newuser-form-label"
                    id="address"
                    name="address"
                    size="small"
                    classNameForInput="newuser-form-input" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <GenderRadioGroup
                    className="newuser-form-element" />
            </AtomGrid>
            <AtomGrid item xs={6}>
                <FormSelectWithLabel
                    className="newuser-form-element"
                    labelText="Status"
                    classNameForLabel="newuser-form-label"
                    id="status"
                    size="small" />
            </AtomGrid>
            <AtomGrid container
                direction="row" 
                sx={{ marginTop: "20px" ,marginLeft: "100px"}} 
                alignItems="flex-start" 
                justifyContent="flex-start" >
                <AtomButton text="Create" 
                    sx={{ borderRadius: "10px", bgcolor: "#380AD0", padding: "10px 100px", textTransform: 'none' }} />
            </AtomGrid>
        </AtomGrid>

           
    )
}