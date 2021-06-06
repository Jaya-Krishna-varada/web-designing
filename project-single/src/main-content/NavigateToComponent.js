import React from 'react';
import HomeScreen from './home-screen-component/HomeScreen';
import Account from './user-account-component/Account';
 
function NavigateToComponent(props) {
    switch (props.currentIndex) {
        case 0 : return <HomeScreen />;break;
        case 3 : return <Account />;break;
        default : return <div></div>;
    }
}

export default NavigateToComponent;