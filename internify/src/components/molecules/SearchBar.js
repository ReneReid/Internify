import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import './styles/SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


const SearchBar = () => {

    return (
        <Grid conatiner xs = {4} sm = {4} md = {4} className="searchbar_container">
            <form className="searchbar_form">
                <TextField className="searchbar_field" 
                placeholder="Search for tags..." 
                variant="outlined" 
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon/>
                        </InputAdornment>
                    ),
                }}
                style={{width: '100%'}}/>
            </form>
        </Grid>
    )
}

export default SearchBar;
