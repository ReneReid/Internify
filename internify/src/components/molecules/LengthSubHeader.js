import RadioTemp from '../atoms/RadioTemp';

function LengthSubHeader() {
    return(
        <div>
            <div>
            <h3>Length</h3>
            <RadioTemp value={"4 months"} color={"primary"} label={"4 months"}/>
            <RadioTemp value={"8 months"} color={"primary"} label={"8 months"}/>
            <RadioTemp value={"12 months"} color={"primary"} label={"12 months"}/>
            <RadioTemp value={"24 months"} color={"primary"} label={"24 months"}/>
            </div>
        </div>
    )
}

export default LengthSubHeader;