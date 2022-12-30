import "../styles/css/newProduct.css"
import ProductCreateForm from "../components/organisms/ProductCreateForm";

export default function NewProduct(){
    return (
        <div className="newproduct-outer-container">
            <span className="newproduct-header">New Product</span>
            <div className="newproduct-inner-container">
                <ProductCreateForm />
            </div>
        </div>
    )
}