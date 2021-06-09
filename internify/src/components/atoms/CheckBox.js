import { Checkbox } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  checkedBtn: {
      color: '#043A74',
  }
}));

function CheckBox(props) {
  const classes = useStyles();

    return (
        <FormControlLabel
        control={
          <Checkbox
            className={classes.checkedBtn}
            name={props.name}
            color="default"
          />
        }
        label={props.label}
      />
    )
}

export default CheckBox;
