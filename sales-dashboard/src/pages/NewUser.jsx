import UserCreateGrid from "../components/organisms/UserCreateGrid"
import "../styles/css/newUser.css"


export default function NewUser(){
    return (
        <div className="newuser-outer-container">
            <span className="newuser-header">New User</span>
            <div className="newuser-inner-container"> 
                <UserCreateGrid />

            </div>
            
        </div>
    )
}