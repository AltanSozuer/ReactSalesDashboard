import AtomButton from "../atoms/AtomButton";
import FormTextFieldWithLabel from "../molecules/FormTextFieldWithLabel";
import FormSelectWithLabel from "../molecules/FormSelectWithLabel";
import AtomIconButton from "../atoms/AtomIconButton";
import { FileUpload } from "@mui/icons-material";

export default function ProductCreateForm(){
    return (
        <>
            <div className="newproduct-form-input-container">
                <FormTextFieldWithLabel
                    className="newproduct-form-element-container"
                    labelFor="name"
                    labelText="Name"
                    classNameForLabel="newproduct-form-label"
                    id="name"
                    name="name"
                    size="small"
                    classNameForInput="newproduct-form-input-element" />
                <FormTextFieldWithLabel
                    className="newproduct-form-element-container"
                    labelFor="price"
                    labelText="Price"
                    classNameForLabel="newproduct-form-label"
                    id="price"
                    name="price"
                    size="small"
                    classNameForInput="newproduct-form-input-element" />
                <FormTextFieldWithLabel
                    className="newproduct-form-element-container"
                    labelFor="stock"
                    labelText="Stock"
                    classNameForLabel="newproduct-form-label"
                    id="stock"
                    name="stock"
                    size="small"
                    classNameForInput="newproduct-form-input-element" />
                <FormSelectWithLabel
                    className="newproduct-form-element-container"
                    labelText="Active"
                    classNameForLabel="newproduct-form-label"
                    id="isActive"
                    size="small"
                    value="Yes"
                    options={["Yes", "No"]} />
                <FormSelectWithLabel
                    className="newproduct-form-element-container"
                    labelText="Status"
                    classNameForLabel="newproduct-form-label"
                    id="status"
                    size="small"
                    value="In Stock"
                    options={["In Stock", "Out of Stock"]} />

                <div className="newproduct-form-button">
                    <AtomButton 
                        text="Create"
                        sx={{ padding: "10px 50px" , bgcolor: "green", mx: "10%"}}/>
                    <AtomButton 
                        text="Cancel"
                        sx={{ padding: "10px 50px" , bgcolor: "red" , mx: "10%"}}/>
                </div>
            </div>
            <div className="newproduct-form-upload-container">
                <span className="newproduct-form-label" >Image</span>
                <AtomIconButton
                    text=""
                    size="small"
                    sx={{ bgcolor: "gray" , width: 100, height: 100, borderRadius: 2 }}
                    component="label"
                    children={ 
                        <div>
                            <FileUpload />
                            <input hidden accept="image/*" type="file" />
                        </div>
                    } />                
            </div>
        </>
    )
}