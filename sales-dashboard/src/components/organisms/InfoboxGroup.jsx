import InfoBox from "../molecules/InfoBox"
import "../../styles/css/infobox.css"


export default function InfoxboxGroup() {
    return (
        <div className="container">

                <InfoBox 
                    BoxTitle="Revenue"
                    Amount="$896"
                    amountRate="+2.7"
                    SubTitle="Compared to last month"/>
                <InfoBox 
                    BoxTitle="Sales"
                    Amount="$2,342"
                    amountRate="+3.8"
                    SubTitle="Compared to last month"/>
                <InfoBox 
                    BoxTitle="Cost"
                    Amount="$1,097"
                    amountRate="-1.2"
                    SubTitle="Compared to last month"/>
           
            </div>
    )
}