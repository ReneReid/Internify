import TextFieldTemp from "../atoms/TextFieldTemp";
import React from 'react';
import Container from '@material-ui/core/Container';

function InputFormJobHeader(props) {
    return (
        <div className="InputFormJobHeader">
        <Container maxWidth="sm">
        <form className="input-title-form">
            <div className="row">
                <TextFieldTemp id={"header-form-title"} className={"i-form-outer"}label={"Job Title"} defaultValue={"Front-End Developer"} type={"text"}/>
            </div>
            <div className="row">
                <TextFieldTemp id={"header-form-company"} className={"i-form-outer"} label={"Company"} defaultValue={"Astra Galatica Technologies"} type={"text"}/>
            </div>
            <div className="row">
                <div className="col">
                    <TextFieldTemp id={"header-form-location"} className={"i-form-inner"} label={"Location"} defaultValue={"Vancouver, BC"} type={"text"}/>
                </div>
                <div className="col">
                    <TextFieldTemp id={"header-form-date"} className={"i-form-inner"} label={"Start Date"} type={"date"} defaultValue={"2021-05-24"}/>
                </div>
            </div>
        </form>
        </Container>


        </div>
    )

}

export default InputFormJobHeader;