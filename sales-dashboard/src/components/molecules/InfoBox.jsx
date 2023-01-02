import "../../styles/css/infobox.css"
import "../../styles/css/shared/shadowbox.css"
import AtomSpan from "../atoms/AtomSpan";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function InfoBox({
    BoxTitle,
    data,
    SubTitle
}) {
        return (
            <div className="infoItem shadow-box">
                    <AtomSpan 
                        text={ BoxTitle }
                        className="title" />
                    <div className="amountLine">
                        <AtomSpan 
                            text={ data.amount }
                            className="amount" />
                        <AtomSpan 
                            text={ `${data.amountRate} %` }
                            className="amountRate">
                            { (data.amountRate > 0) ?
                                <ArrowUpward className="arrowUp"/> :
                                <ArrowDownward className="arrowDown"/>  
                            }
                        </AtomSpan>
                    </div>
                    <AtomSpan 
                        text={ SubTitle }
                        className="subTitle"/>
                
            </div>
        )  
    
} 