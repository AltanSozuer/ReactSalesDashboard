import "../../styles/css/widget.css"
import "../../styles/css/shared/shadowbox.css"
import AtomIconButton from "../atoms/AtomIconButton"
import AtomSpan from "../atoms/AtomSpan"
import { Visibility } from "@mui/icons-material"
export default function UserWidget( props ) {
    return (
        <div className="small-outer-container shadow-box">
            <div className="widget-title">
                New Join Members
            </div>
            <div className="list-container">
                <ul className="widget-list">
                    <li className="widget-list-item">
                        <img
                            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="widget-image"
                        />
                        <div className="widget-user-info">
                            <AtomSpan
                                text="Maria Sharron" 
                                className="widget-username"/>
                            <AtomSpan
                                text="Doctor" 
                                className="widget-user-title"/>
                        </div>
                        <button className="widget-button">
                                <Visibility className="widget-icon" />
                                Display
                        </button>
                    </li>
                    <li className="widget-list-item">
                        <img
                            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="widget-image"
                        />
                        <div className="widget-user-info">
                            <AtomSpan
                                text="Maria Sharron" 
                                className="widget-username"/>
                            <AtomSpan
                                text="Doctor" 
                                className="widget-user-title"/>
                        </div>
                        <button className="widget-button">
                                <Visibility className="widget-icon" />
                                Display
                        </button>
                    </li>
                    <li className="widget-list-item">
                        <img
                            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="widget-image"
                        />
                        <div className="widget-user-info">
                            <AtomSpan
                                text="Maria Sharron" 
                                className="widget-username"/>
                            <AtomSpan
                                text="Doctor" 
                                className="widget-user-title"/>
                        </div>
                        <button className="widget-button">
                                <Visibility className="widget-icon" />
                                Display
                        </button>
                    </li>
                    <li className="widget-list-item">
                        <img
                            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="widget-image"
                        />
                        <div className="widget-user-info">
                            <AtomSpan
                                text="Maria Sharron" 
                                className="widget-username"/>
                            <AtomSpan
                                text="Doctor" 
                                className="widget-user-title"/>
                        </div>
                        <button className="widget-button">
                                <Visibility className="widget-icon" />
                                Display
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}