import React from 'react';
import NavigationMenu from './main-content/nav-bar-component/NavigationMenu';
import LoginComponent from './main-content/signin-signup-component/LoginComponent';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginComponent />
        );
    }
}

export default Main;