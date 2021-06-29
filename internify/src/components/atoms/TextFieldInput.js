import TextField from '@material-ui/core/TextField';

function TextFieldInput(props) {
    return(
        <TextField 
        className={props.className}
        required id={props.id} 
        label={props.label} 
        defaultValue={props.defaultValue} 
        placeholder={props.placeholder}
        variant="outlined" 
        type={props.type}
        InputLabelProps={{
            shrink: true,
          }}
        onChange={props.onChange}
        />
    )
}

export default TextFieldInput;
