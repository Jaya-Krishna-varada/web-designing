import React from 'react';
import Account_Details from '../user-account-component/Account';
import NavigateToComponent from '../NavigateToComponent';
import logo from '../../icons/person.svg';

import './NavigationMenu.scss';
import icon_home from '../../icons/house.svg';
import icon_bell from '../../icons/bell.svg';
import icon_search from '../../icons/search.svg';
import icon_account from '../../icons/person.svg';
import icon_home_fill from '../../icons/house-fill.svg';
import icon_bell_fill from '../../icons/bell-fill.svg';
import icon_account_fill from '../../icons/person-fill.svg';
import HomeScreen from '../home-screen-component/HomeScreen';


class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status : [true,false,false,false]
        }
    }

    activeElement = (id) => {
        let x = [];
        for(let i=0;i<this.state.status.length;i++) {
            if(i === id) x.push(true);
            else x.push(false);
        }
        this.setState({status : x});
    }
    render() {
        return (
            <div class = "global-nav">
                <div class = "navbar bg-dark navbar-expand sticky-top d=flex justify-content-between">
                    <ul class = "navbar-nav">
                        <li className = {this.state.status["0"] ? "nav-item font-weight-bold bg-dark" : "nav-item"} onClick = {() => this.activeElement(0)}>
                            <a href = "#" class = "nav-link text-white d-flex flex-row align-items-center">
                                <img src = {this.state.status["0"] ? icon_home_fill : icon_home} alt = "icon-home"/>
                                <p class = "pl-2 m-0 d-none d-xl-block">Home</p>
                            </a>
                        </li>
                        <li className = {this.state.status["1"] ? "nav-item font-weight-bold" : "nav-item"} onClick = {() => this.activeElement(1)}>
                            <a href = "#" class = "nav-link text-white d-flex flex-row align-items-center">
                                <img src = {this.state.status["1"] ? icon_bell_fill : icon_bell} alt = "icon-notification"/>
                                <p class = "pl-2 m-0 d-none d-xl-block">Notifications</p>
                            </a>
                        </li>
                        <li className = {this.state.status["2"] ? "nav-item font-weight-bold" : "nav-item"} onClick = {() => this.activeElement(2)}>
                            <a href = "#" class = "nav-link text-white d-flex flex-row align-items-center">
                                <img src = {icon_search} alt = "icon-search"/>
                                <p class = "pl-2 m-0 d-none d-xl-block">Search</p>
                            </a>
                        </li>
                    </ul>
                    <ul class = "navbar-nav">
                        <li className = {this.state.status["3"] ? "nav-item font-weight-bold" : "nav-item"} onClick = {() => this.activeElement(3)}>
                            <a href = "#" class = "m-0 navbar-brand nav-link text-white d-flex flex-row align-items-center">
                                <img src = {this.state.status["3"] ? icon_account_fill : icon_account} alt = "icon-account" class = "d-none d-xl-block"/>
                                <p class = "pl-0 pl-xl-2 m-0">Jaya Krishna</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <NavigateToComponent currentIndex = {this.state.status.indexOf(true)} />
            </div>
        );
    }
}

export default NavigationMenu;