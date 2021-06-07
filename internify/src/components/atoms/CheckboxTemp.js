import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function CheckboxTemp(props) {
    return (
        <FormControlLabel
        control={
          <Checkbox
            name={props.name}
            color={props.color}
          />
        }
        label={props.label}
      />
    )
}

export default CheckboxTemp;