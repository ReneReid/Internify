import TextFieldInput from "../atoms/TextFieldInput";
import React from 'react';
import Container from '@material-ui/core/Container';
import './styles/InputFormJobHeader.css';

function InputFormJobHeader(props) {
    return (
        <form className="input_title_form">
            <div className="input_title_row">
                <TextFieldInput id={"header-form-title"} className={"i-form-outer"}label={"Job Title"} defaultValue={"Front-End Developer"} type={"text"}/>
            </div>
            <div className="input_title_row">
                <TextFieldInput id={"header-form-company"} className={"i-form-outer"} label={"Company"} defaultValue={"Astra Galatica Technologies"} type={"text"}/>
            </div>
            <div className="input_title_row">
                <div className="input_title_col">
                    <TextFieldInput id={"header-form-location"} className={"i-form-inner"} label={"Location"} defaultValue={"Vancouver, BC"} type={"text"}/>
                </div>
                <div className="input_title_col">
                    <TextFieldInput id={"header-form-date"} className={"i-form-inner"} label={"Start Date"} type={"date"} defaultValue={"2021-05-24"}/>
                </div>
            </div>
        </form>
    );
};

export default InputFormJobHeader;
