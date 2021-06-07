import TextField from '@material-ui/core/TextField';

function TextFieldTemp(props) {
    return(
        <TextField required id={props.id} label={props.label} defaultValue={props.defaultValue} variant="outlined" />
    )
}

export default TextFieldTemp;