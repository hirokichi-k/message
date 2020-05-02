import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FloatWindow_recieve from './FloatWindow_receive.js'
import request from 'superagent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
}));

export default function RecieveBox() {

    const [is_pushed, setPush] = React.useState(false);
    const [text, setText] = React.useState("hoge");
    const [id, setid] = React.useState("0");
    const classes = useStyles();
    const onclick_send = () => {
        setPush(true);
    };
    const URL = "http://34.83.242.238";
    const [open, setOpen] = React.useState(true);
    const [do_request, setRequest] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        setPush(false);
    };
    const handleId = (event) => {
        setid(event.target.value);
    };

    var excessbox = null
    const callbackget = (err, res) => {
        if (err) {
            console.log(err);
            return
        }
        else {
            setText(res.body.message);
            console.log(res.body.message);
            return
        }
    }
    const loaddata = (is_pushed) => {
        if (is_pushed) {
            if (do_request) {
                request.get("http://34.83.242.238/?id="+id).end(callbackget)
                setRequest(false);
                return
            }
        
            else {
                return (
                    <div>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"テキストを受け付けました."}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    送信されたメッセージ
                        </DialogContentText>
                                <h3>{text}</h3>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary" autoFocus>
                                    OK
                        </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                );
            }
        }
        
    }
    const return_c = () => {
        return excessbox
    }
    const popup_floatwindow = (is_pushed) => {
        if (is_pushed) {
            request.post(URL).send(text.value);
            return 
        }
    };
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField onChange={handleId} id="standard-basic" label="6桁の数字を入力してください" />
            </form>
            <Button variant="outlined" onClick={onclick_send}>Verification</Button>
            {loaddata(is_pushed)}
        </div>

    );
}
