
import CheckboxTemp from '../atoms/CheckboxTemp';

function PositionSubHeader() {
    return(
        <div>
            <div>
            <h3>Position</h3>
            <CheckboxTemp name={"Internship"} label={"Internship"}/>
            <CheckboxTemp name={"Co-op"} label={"Co-op"}/>
            <CheckboxTemp name={"New Grad"} label={"New Grad"}/>
            <CheckboxTemp name={"Part-time"} label={"Part-time"}/>
            </div>
        </div>
    )
}

export default PositionSubHeader;