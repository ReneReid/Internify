import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioBtn from '../atoms/RadioBtn';
import FormControl from '@material-ui/core/FormControl';

function RadioButtonsGroup() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position-length" name="pos1" value={value} onChange={handleChange}>
        <div>
        <RadioBtn value={"4 months"} label={"4 months"}/>
        <RadioBtn value={"8 months"}  label={"8 months"}/>
        <RadioBtn value={"12 months"}  label={"12 months"}/>
        <RadioBtn value={"24 months"} label={"24 months"}/>
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
