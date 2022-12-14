import "../../styles/css/infobox.css"
import AtomSpan from "../atoms/AtomSpan";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

export default function InfoBox({
    BoxTitle,
    Amount,
    amountRate,
    SubTitle
}) {
    
        return (
            <div className="infoItem">
                    <AtomSpan 
                        text={ BoxTitle }
                        className="title" />
                    <div className="amountLine">
                        <AtomSpan 
                            text={ Amount }
                            className="amount" />
                        <AtomSpan 
                            text={ amountRate }
                            className="amountRate">
                            <ArrowUpward className="arrowUp"/>
                        </AtomSpan>
                    </div>
                    <AtomSpan 
                        text={ SubTitle }
                        className="subTitle"/>
                
            </div>
        )  
    
} 