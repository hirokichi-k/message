import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FloatWindow from './FloatWindow.js'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
}));
Change_Buttonstate = () => {
    this.setState
}
export default class SendBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushed_button: false
            
        }
    }
    render() {
        const classes = useStyles();
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="send text" />
                </form>
                <Button variant="outlined" onClick={}>Default</Button>
            </div>

        )
    }
}