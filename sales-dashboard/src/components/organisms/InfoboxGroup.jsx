import InfoBox from "../molecules/InfoBox"
import "../../styles/css/infobox.css"
import { 
    INFOBOX_REVENUE,
    INFOBOX_SALE,
    INFOBOX_COST
} from "../../DummyData/InfoboxData";

export default function InfoxboxGroup() {
    return (
        <div className="container">

                <InfoBox 
                    BoxTitle="Revenue"
                    data={INFOBOX_REVENUE}
                    SubTitle="Compared to last month"/>
                <InfoBox 
                    BoxTitle="Sales"
                    data={INFOBOX_SALE}
                    SubTitle="Compared to last month"/>
                <InfoBox 
                    BoxTitle="Cost"
                    data={INFOBOX_COST}
                    SubTitle="Compared to last month"/>
           
            </div>
    )
}