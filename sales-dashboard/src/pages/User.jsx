import "../styles/css/user.css"
import "../styles/css/widget.css"
import "../styles/css/shared/shadowbox.css"
import AtomButton from "../components/atoms/AtomButton";
import { Link } from "react-router-dom"
import AtomSpan from "../components/atoms/AtomSpan";
import { PermIdentity, CalendarMonthOutlined, LocalPhoneOutlined, EmailOutlined, LocationOnOutlined } from '@mui/icons-material';
import { Tooltip } from "@mui/material";
import UserEditForm from "../components/organisms/UserEditForm";

export default function User(){
    return (
        <div className="user-container">
            <div className="user-header-section">
                <h2 className="user-header">Edit User</h2>
                <Link to="/newUser" style={{ textDecoration: 'none' }}>
                    <AtomButton  
                        color="success"
                        text="Create"
                        size="small" />
                </Link>
            </div> 
            <div className="editUser-container">
                <div className="editUser-info-container shadow-box">
                    <div className="editUser-info-upside-container">
                        <img
                            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="editUser-info-image" />
                        <div className="editUser-info-username-job-container">
                            <AtomSpan
                                text="Maria Sharron" 
                                className="editUser-info-username"/>
                            <AtomSpan
                                text="Doctor" 
                                className="editUser-info-job"/>
                        </div>
                    </div>
                    <div className="editUser-info-downside-container">
                        <h4 className="editUser-info-title">Account Details</h4>
                        <div className="editUser-info-personal-item">
                            <Tooltip title="Nickname">
                                <PermIdentity sx={{ marginRight: "15px" }} />
                            </Tooltip> 
                            mariabeck96
                        </div>
                        <div className="editUser-info-personal-item">
                            <Tooltip title="Birthday">
                                <CalendarMonthOutlined sx={{ marginRight: "15px" }} />
                            </Tooltip>
                            12.08.1996
                        </div>

                        <h4 className="editUser-info-title">Contact Details</h4>
                        <div className="editUser-info-personal-item">
                            <Tooltip title="Phone">
                                <LocalPhoneOutlined sx={{ marginRight: "15px" }} />
                            </Tooltip>
                            +3 564 789 12 34
                        </div>
                        <div className="editUser-info-personal-item">
                            <Tooltip title="Email">
                                <EmailOutlined sx={{ marginRight: "15px" }} />
                            </Tooltip>
                            mariabeck@gmail.com
                        </div>
                        <div className="editUser-info-personal-item">
                            <Tooltip title="Location">
                                <LocationOnOutlined sx={{ marginRight: "15px" }} />
                            </Tooltip>
                            Edinburg, Scotland
                        </div>
                    </div>
                            
                </div>
                
                <div className="editUser-edit-container shadow-box">
                    <h2 className="editUser-edit-header">Edit</h2>
                    <div className="editUser-edit-inner-container">
                        <div className="editUser-edit-form-container">
                            <UserEditForm />
                        </div>
                        <div className="editUser-edit-upload-container">
editUser-edit-upload-container
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}