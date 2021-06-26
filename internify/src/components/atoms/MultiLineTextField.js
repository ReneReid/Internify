import React from 'react';
import TextField from '@material-ui/core/TextField';

function MultiLineTextField(props) {
    return(
        <TextField 
        className={props.className}
        required id={props.id} 
        label={props.label} 
        defaultValue={props.defaultValue} 
        variant="outlined" 
        type={props.type}
        multiline
        rowsMax={props.rowsMax}
        onChange={(e) => props.jobData.details.description = e.target.value}
        />
    )
}

export default MultiLineTextField;
