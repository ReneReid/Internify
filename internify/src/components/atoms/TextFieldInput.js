import TextField from "@material-ui/core/TextField";
import { useState } from 'react';

function TextFieldInput(props) {

  const [validInput, setValidInput] = useState(false);

  function validateForm(e){
    const text = e.target.value;
    if(text === ''){
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }

  function blurForm(e){
    const text = e.target.value;
    if(text === ''){
      setValidInput(true);
    } else {
      props.onBlur();
      setValidInput(false);
    }
  }

  return (
    <TextField
      fullWidth
      id={props.id}
      className={props.className}
      label={props.label}
      type={props.type}
      onChange={props.onChange}
      defaultValue={props.defaultValue}
      onBlur={props.onBlur ? blurForm : validateForm}
      error={validInput}
      helperText={validInput ? 'This section is required' : 'Required'}
      variant="outlined"
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}

export default TextFieldInput;
