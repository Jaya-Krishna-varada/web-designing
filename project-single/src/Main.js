import React from 'react';
import NavigationMenu from './main-content/nav-bar-component/NavigationMenu';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavigationMenu />
            </div>
        );
    }
}

export default Main;