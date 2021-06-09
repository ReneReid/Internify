
import CheckBox from '../atoms/CheckBox';

function PositionSubHeader() {
    return(
        <div>
            <div>
            <h3>Position</h3>
            <CheckBox name={"Internship"} label={"Internship"}/>
            <CheckBox name={"Co-op"} label={"Co-op"}/>
            <CheckBox name={"New Grad"} label={"New Grad"}/>
            <CheckBox name={"Part-time"} label={"Part-time"}/>
            </div>
        </div>
    )
}

export default PositionSubHeader;