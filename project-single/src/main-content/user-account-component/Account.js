import React from 'react';
import './Account.scss';

import pk1 from '../../profile-pics/pk1.jpg';
import pk2 from '../../profile-pics/pk2.jpg';
import pk3 from '../../profile-pics/pk3.jpg';
import pk4 from '../../profile-pics/pk4.jpg';
import pk5 from '../../profile-pics/pk5.jpg';
import pk6 from '../../profile-pics/pk6.jpg';
import pk7 from '../../profile-pics/pk7.jpg';
import pk8 from '../../profile-pics/pk8.jpg';
import pk9 from '../../profile-pics/pk9.jpg';
import pk10 from '../../profile-pics/pk10.jpg';

import icon_whatsapp from '../../icons/whatsapp.svg';
import icon_instagram from '../../icons/instagram.svg';
import icon_facebook from '../../icons/facebook.svg';
import icon_twitter from '../../icons/twitter.svg';
import icon_youtube from '../../icons/youtube.svg';
import icon_copied from '../../icons/clipboard-check.svg';
import icon_copy from '../../icons/clipboard.svg';

class Account extends React.Component {

    constructor() {
        super();
        this.state = {
            navigation: true,
            jk : "true",
            images : [pk1, pk2, pk3, pk4, pk5, pk6, pk7, pk8, pk9, pk10]
    
        };
    }

    modify = (event) => {
        this.setState({jk : event.target.value});
    }

    signout = () => {
        this.setState({navigation: false})
    }

    render() {
        return (
            <div class = "account-details container p-3 p-xl-0">
                <h2 class = "text-left mb-3 font-italic">DETAILS</h2>
                <div class = "d-flex flex-column mb-3">
                    <div class = "card d-flex flex-row mb-2 p-3">
                        <p class = "font-weight-bold col-4 p-0">Name</p>
                        <p class = "col-8 p-0">Jaya Krishna</p>
                    </div>
                    <div class = "card d-flex flex-row  p-3 mb-2">
                        <p class = "font-weight-bold col-4 p-0">Age</p>
                        <p class = "font-weight-bold col-8 p-0">23</p>
                    </div>
                    <div class = "card d-flex flex-row align-items-center justify-content-between p-3">
                        <img src = {icon_whatsapp} alt = "icon-whatsapp" class = "col-4 p-0"/>
                        <p class = "col-8 p-0">9999999999</p>
                    </div>
                    <div class = "card d-flex flex-row align-items-center justify-content-between p-3">
                        <img src = {icon_facebook} alt = "icon-whatsapp" class = "col-4 p-0"/>
                        <p class = "col-8 p-0">facebook id</p>
                    </div>
                    <div class = "card d-flex flex-row align-items-center justify-content-between p-3">
                        <img src = {icon_instagram} alt = "icon-instagram" class = "col-4 p-0"/>
                        <p class = "col-8 p-0">instagram id</p>
                    </div>
                    <div class = "card d-flex flex-row align-items-center justify-content-between p-3">
                        <img src = {icon_twitter} alt = "icon-twitter" class = "col-4 p-0"/>
                        <p class = "col-8 p-0">twitter id</p>
                    </div>
                    <div class = "card d-flex flex-row align-items-center justify-content-between p-3">
                        <img src = {icon_youtube} alt = "icon-youtube" class = "col-4 p-0"/>
                        <p class = "col-8 p-0">youtube channel id</p>
                    </div>
                    
                </div>
                <h2 class = "text-center mb-3  font-italic">IMAGES</h2>
                <div class = "d-flex flex-row flex-wrap mb-4">
                    <div class = "row mx-auto p-0">
                        <img src = {this.state.images["0"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["1"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["2"]} class = "col-4 px-0"></img>
                    </div>
                    <div class = "row mx-auto p-0">
                        <img src = {this.state.images["3"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["4"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["5"]} class = "col-4 px-0"></img>
                    </div>
                    <div class = "row mx-auto p-0">
                        <img src = {this.state.images["6"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["7"]} class = "col-4 px-0"></img>
                        <img src = {this.state.images["8"]} class = "col-4 px-0"></img>
                    </div>
                </div>
                <div class = "logout" onClick = {this.signout}>
                    <p class = "m-0 text-left">LOGOUT</p>
                </div>
            </div>
        );
    }
}

export default Account;