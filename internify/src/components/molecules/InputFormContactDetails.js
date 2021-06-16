import React from 'react';
import TextFieldInput from "../atoms/TextFieldInput";
import "./styles/InputFormContactDetails.css";


function InputFormContactDetails(props){
    return (
        <div className="input_contact_form">

            <div className="input_contact_row">
                <TextFieldInput 
                    id={"header-form-name"}
                    className={"i-form-outer"}
                    label={"Recruiter Name"}
                    defaultValue={"Mahesh Swarani"}
                    type={"text"}
                />
            </div>

            <div className="input_contact_row">
                <TextFieldInput 
                    id={"header-form-email"}
                    className={"i-form-outer"}
                    label={"Recruiter Email"}
                    defaultValue={"mahesh@astragtech.ca"}
                    type={"text"}
                />
            </div>

            <div className="input_contact_row">
                <TextFieldInput 
                    id={"header-form-linkedin"}
                    className={"i-form-outer"}
                    label={"LinkedIn"}
                    defaultValue={"linkedin.com/maheshswaran"}
                    type={"text"}
                />
            </div>

            <div className="input_contact_row">
                <TextFieldInput 
                    id={"header-form-other"}
                    className={"i-form-outer"}
                    label={"Other contact"}
                    defaultValue={"+1 (601) 123 4356"}
                    type={"text"}
                />
            </div>

            <div className="input_contact_row">
                <TextFieldInput 
                    id={"header-form-other"}
                    className={"i-form-alt"}
                    label={"Application steps"}
                    defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                    type={"text"}
                />
            </div>
            
        </div>
    )
}

export default InputFormContactDetails
