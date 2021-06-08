
import CheckboxTemp from '../atoms/CheckboxTemp';

function PositionSubHeader(props) {
    return(
        <div>
            <div>
            <h3>Position</h3>
            <CheckboxTemp name={"Internship"} color={"primary"} label={"Internship"}/>
            <CheckboxTemp name={"Co-op"} color={"primary"} label={"Co-op"}/>
            <CheckboxTemp name={"New Grad"} color={"primary"} label={"New Grad"}/>
            <CheckboxTemp name={"Part-time"} color={"primary"} label={"Part-time"}/>
            </div>
        </div>
    )
}

export default PositionSubHeader;