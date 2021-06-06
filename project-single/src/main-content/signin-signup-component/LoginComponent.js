import React from 'react';
import './LoginComponent.scss';
import NavigationMenu from '../nav-bar-component/NavigationMenu';

class LoginComponent extends React.Component {
    constructor() {
        super();
        this.state = {login:true,
            otp:false};
    }

    singin = () => {
        this.setState({login: false});
    }
    sendOTP = (event) => {
        if(event.target.value.length === 10) {
            let x = parseInt(event.target.value);
            if (x !== NaN && x > 999999999) {
                this.setState({otp: true});
            }else {
                alert("please enter a valid phone number");
            }
        }else {
            this.setState({otp:false});
        }
    } 

    render() {
        return (
            <div class = "main-content">
            {this.state.login ? 
                <div class = "login-screen container px-3">
                    <div class = "card w-100 p-4">
                        <input type = "tel" maxLength = "10" class = " my-2" name = "username" placeholder = "Enter mobile number" onChange = {this.sendOTP}></input>
                        {
                            this.state.otp ?
                            <input autoFocus type = "tel" maxLength = "6" class = " my-2" name = "username" placeholder = "Enter OTP"></input>
                            : <br></br>
                        }
                        <button class = "btn btn-primary my-2" onClick = {this.singin}>Sign in</button>
                    </div>
                </div>
                
                : <NavigationMenu />
            }
            </div>
        );
    }
}

export default LoginComponent;