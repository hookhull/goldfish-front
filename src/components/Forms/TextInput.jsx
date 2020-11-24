import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { RvHookupSharp } from '@material-ui/icons';

const TextInput = (props) => {
    return(
        <TextField 
            margin={"dense"}
            label={props.label}
            fullWidth={true}
            multiline={props.multiline}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput