import TextFieldTemp from "../atoms/TextFieldTemp";

function InputFormJobHeader(props) {

    return (
        <div id="header-form-input" className="header-row">
            <TextFieldTemp id={"header-form-title"} label={"Job Title"} defaultValue={"Front-End Developer"} type={"text"}/>
            <TextFieldTemp id={"header-form-company"} label={"Company"} defaultValue={"Astra Galatica Technologies"} type={"text"}/>
            <div>
                <div className="col">
                <TextFieldTemp id={"header-form-location"} label={"Location"} defaultValue={"Vancouver, BC"} type={"text"}/>
                </div>
                <div className="col">
                <TextFieldTemp id={"header-form-date"} label={"Start Date"} type={"date"} defaultValue={"2021-05-24"}/>
                </div>
            </div>
        </div>
    )

}

export default InputFormJobHeader;