import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButton from '../atoms/RadioButton';
import FormControl from '@material-ui/core/FormControl';

function RadioButtonsGroup(props) {
  const data = props.data;
  const [value, setValue] = React.useState('');
  let index = 0;

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position-length" name="pos1" value={value} onChange={handleChange}>
        <div>
          {data.map((x) => {
            return <RadioButton key={index++} value={x} label={x}/>;
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;
