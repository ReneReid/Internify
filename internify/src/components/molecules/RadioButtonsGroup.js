import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import RadioButton from '../atoms/RadioButton';
import FormControl from '@material-ui/core/FormControl';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateRegKeys } from "../../store/actions/jobPostActions";

function RadioButtonsGroup(props) {
  const data = props.data;
  const jobData = props.jobData;
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    jobData[props.property] = event.target.value;
    updateKeys(props.property, event.target.value);
  };

  function updateKeys(v, l){
    if(props.keysList.includes(v)){
      if(props.jobs.registeredKeys.hasOwnProperty(v)){
        props.actions.updateRegKeys(v, [...props.jobs.registeredKeys[v], l]);
      } else {
        props.actions.updateRegKeys(v, [l]);
      }
    }
  }

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position-length" name="pos1" value={value} onChange={handleChange}>
        <div>
          {data.map((x) => {
            return <RadioButton key={x} value={x} label={x}/>;
          })}
        </div>
      </RadioGroup>
    </FormControl>
  );
}

function mapStateToProps(state) {
  return {
    jobs: state.jobs,
  };
}

function matchDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        updateRegKeys: updateRegKeys
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(RadioButtonsGroup);

