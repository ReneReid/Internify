import RadioTemp from '../atoms/RadioTemp';

function LengthSubHeader() {
    return(
        <div>
            <div>
            <h2>Length</h2>
            <RadioTemp value={"4 months"} label={"4 months"}/>
            <RadioTemp value={"8 months"} label={"8 months"}/>
            <RadioTemp value={"12 months"} label={"12 months"}/>
            <RadioTemp value={"24 months"} label={"24 months"}/>
            </div>
        </div>
    )
}

export default LengthSubHeader;