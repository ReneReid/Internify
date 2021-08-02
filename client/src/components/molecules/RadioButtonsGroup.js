import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButton from '../atoms/RadioButton';
import FormControl from '@material-ui/core/FormControl';

function RadioButtonsGroup(props) {
  const data = props.data;
  const jobData = props.jobData;
  const [value, setValue] = React.useState(jobData[props.property]);
  
  const handleChange = (event) => {
    jobData[props.property] = event.target.value;
    setValue(event.target.value);
    props.updateKeysText(props.property, jobData);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position-length" name="pos1" value={value} onChange={handleChange}>
        <div>
          {data.map((x) => {
            return <RadioButton key={x} value={x} label={x} />;
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonsGroup;

