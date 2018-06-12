import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Email from '@material-ui/icons/Email';
import LockOutline from '@material-ui/icons/LockOutline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Card from '../components/Card/Card';
import CardBody from '../components/Card/Cardbody';
import CardHeader from '../components/Card/CardHeader';
import CardFooter from '../components/Card/CardFooter';
import CustomInput from '../components/CustomInput/CustomInput';

import loginPageStyle from '../Assets/jss/container/loginPageStyle';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            cardAnimation : "cardHidden"
        }
    }
    // componentDidMount(){
    //     setTimeout(
    //         function(){
    //             this.setState({ cardAnimtion : "" });
    //         }.bind(this),
    //         700
    //     );
    // }
    handleUserEmailChange = e =>{
        this.setState({ email : e.target.value });
    }
    handlePasswordChange = e => {
        this.setState({ password : e.target.value });
    }
    render(){
        const { classes } = this.props;
        return (
            <div className = { classes.container }>
                <Grid container justify = "center">
                    <Grid item xs = {12} sm =  {12} md = {4}>
                        <Card >
                            <form className = { classes.form }>
                                <CardHeader color = "primary" className = { classes.cardHeader }>
                                    <h4>Login</h4>
                                    <Button variant ="raised" color ="primary">With Fyle</Button>
                                </CardHeader>
                                <p className = {classes.divider }>Or already logged in ? Sign with fyle credentials</p>
                                <CardBody>
                                    <CustomInput 
                                        labelText = "Email"
                                        id = "email"
                                        formControlProps = {{
                                            fullWidth : true
                                        }}
                                        inputProps = {{
                                            type : "email",
                                            endAdornment : (
                                                <InputAdornment position = "end">
                                                    <Email className = { classes.inputIconsColor}/>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <CustomInput 
                                        labelText = "Password"
                                        id = "pass"
                                        formControlProps = {{
                                            fullWidth : true
                                        }}
                                        inputProps = {{
                                            type : "password",
                                            endAdornment : (
                                                <InputAdornment position = "end">
                                                    <LockOutline className = { classes.inputIconsColor }/>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </CardBody>
                                <CardFooter className = { classes.cardFooter }>
                                        <Button simple color = "primary" size = "lg">
                                            Login
                                        </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes : PropTypes.object.isRequied,
};

export default withStyles(loginPageStyle)(SignIn);