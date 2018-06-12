import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    paper : {
        marginTop : '32px',
        padding : theme.spacing.unit * 2,
        textAlign : 'center',
        color : theme.palette.text.secondary,
    },
});


class SignIn extends React.Component{
    state = {
        email : '',
        password : ''
    }
    handleUserEmailChange = e =>{
        this.setState({ email : e.target.value })
    }

    render(){
        const { classes } = this.props;
        return (
            <div >
                <Grid container justify = {'center'} alignItems = {'center'}>
                    <Grid item xs = {8}>
                        <Paper className = { classes.paper }>Signin from</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes : PropTypes.object.isRequied,
};

export default withStyles(styles)(SignIn);