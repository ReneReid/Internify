import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioTemp from '../atoms/RadioTemp';
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
        <RadioTemp value={"4 months"} color={"primary"} label={"4 months"}/>
        <RadioTemp value={"8 months"} color={"primary"} label={"8 months"}/>
        <RadioTemp value={"12 months"} color={"primary"} label={"12 months"}/>
        <RadioTemp value={"24 months"} color={"primary"} label={"24 months"}/>
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
