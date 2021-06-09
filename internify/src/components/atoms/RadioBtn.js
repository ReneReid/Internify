import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    checkedBtn: {
        color: '#043A74'
    }
  }));

function RadioBtn(props) {
    const classes = useStyles();

    return (
        <FormControlLabel
        value={props.value}
        control={<Radio className={classes.checkedBtn} color="default"/>} 
        label={props.label} />
    )
}

export default RadioBtn;