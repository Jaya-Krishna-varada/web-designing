import React from 'react';
import './HomeScreen.scss';
import pk from '../../profile-pics/pk-profile.jpg';


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


class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [pk,pk1,pk2,pk3,pk4,pk5,pk6,pk7,pk8,pk9,pk10]
        }
    }

    render() {
        return (
            <div class = "users p-3">
                <ListOfUsers LIST = {this.state.userData} />
            </div>
        );
    }
}

function ListOfUsers(props) {
    const LIST = props.LIST;
    const result = LIST.map( (item) => {
        return (
            <div class = "card d-flex flex-row col-12 p-0 mx-auto overflow-hidden mb-3">
                    <div class = "col-6 p-0">
                        <img src = {item} alt = "pk image" class ="cover-photo"></img>
                    </div>
                    <div class = "col-6 px-3 py-2 d-flex flex-column align-items-start">
                        <p class = "title font-weight-bold font-italic">Pawan Kalyan</p>
                        <p class = "sub-title font-italic">January 2 1998</p>
                        <button class = "btn btn-sm btn-dark view align-self-center">View More</button>
                    </div>
            </div>
        )
    });
    return result;
}

export default HomeScreen;