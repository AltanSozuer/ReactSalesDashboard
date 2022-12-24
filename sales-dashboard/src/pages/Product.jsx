import "../styles/css/shared/shadowbox.css"
import "../styles/css/product.css"
import { Link } from "react-router-dom"
import AtomButton from "../components/atoms/AtomButton"
import LineCharts from "../components/organisms/LineChart"
import { MonthlySpecificProductSale } from "../DummyData/MonthlySpecificProductSale"
import FormSelectWithLabel from "../components/molecules/FormSelectWithLabel"
import { Avatar, TextField, Tooltip } from "@mui/material"
import AtomIconButton from "../components/atoms/AtomIconButton"
import { FileUpload } from "@mui/icons-material"


export default function Product(){
    return (
        <div className="product-outer-container">
            <div className="product-header-container">
                <span className="product-header">Product</span>
                <Link to="/newProduct" style={{ textDecoration: 'none' }}>
                    <AtomButton  
                        color="success"
                        text="Create"
                        size="small" />
                </Link>
            </div>
            <div className="product-inner-container">
                <div className="product-info-container">
                    <div className="product-info-chart">
                        <LineCharts
                             title="Sales Performance"
                             width={500}
                             height={150}
                             data={MonthlySpecificProductSale}
                             xAxisDataKey="month"
                             lineDataKey="Rate of Sale" />

                    </div>
                    <div className="product-info-details shadow-box">
                        <div className="product-info-details-image-container">
                            <img src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" 
                                alt="" className="product-info-details-image"/>
                        </div>
                        <div className="product-info-details-expl-cont">
                            <span className="product-info-details-expl-title">Women Jacket</span>
                            <div className="product-info-details-expl-rows">
                                <span>ID:</span>
                                <span>1234</span>
                            </div>
                            <div className="product-info-details-expl-rows">
                                <span>Total Sales:</span>
                                <span>4268</span>
                            </div>
                            <div className="product-info-details-expl-rows">
                                <span>Stock:</span>
                                <span>265</span>
                            </div>
                            <div className="product-info-details-expl-rows">
                                <span>Active</span>
                                <span>Yes</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-edit-container shadow-box">
                    <div className="product-edit-details-container">
                        <span className="product-edit-details-label">Product Name</span>
                        <TextField
                            id="product-name"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="standard"
                            defaultValue="Women Jacket"
                            sx={{ marginBottom: "20px"}}
                            />
                        <FormSelectWithLabel
                            className="product-edit-details-elements"
                            labelText="In Stock"
                            classNameForLabel="product-edit-details-label"
                            id="stock"
                            size="small"
                            value="Yes" />
                        <FormSelectWithLabel
                            className="product-edit-details-elements"
                            labelText="Active"
                            classNameForLabel="product-edit-details-label"
                            id="isActive"
                            size="small"
                            value="Yes" />
                    </div>
                    <div className="product-edit-upload-container">
                        <div className="product-edit-upload-image-container">
                        <Avatar 
                            alt=""
                            sx={{ width: 100, height: 100, borderRadius: 2, marginRight: "10px" }} 
                            src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                            <Tooltip title="Update Profile Image">
                                <span>
                                    <AtomIconButton
                                        text=""
                                        size="small"
                                        sx={{ bgcolor: "white"}}
                                        component="label"
                                        children={ 
                                            <div>
                                                <FileUpload />
                                                <input hidden accept="image/*" type="file" />
                                            </div>
                                        } />

                                </span>
                                
                            </Tooltip>
                        </div>
                        <AtomButton
                            text="Update"
                            size="small"
                            variant="contained"
                            sx={{ bgcolor: "success", padding: "5px 25px" ,marginBottom: "30px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}