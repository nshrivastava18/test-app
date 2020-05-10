import React, { Component } from 'react';
import _ from 'lodash';
import '../App.css';

class Profile extends Component {
    render() {
        const profileData = this.props.profileData;
        const imageUrl = profileData?.attributes['card-image'];
        if (_.isEmpty(imageUrl)) return '' ;

        const subspecialties = profileData?.attributes?.subspecialties.join(', ')
        return (
            <div style={{ padding: '10px', marginTop: '10px', width: '500px', height: '120px' }}>
                <div style={{ float: 'left' }}>
                    <img className="profile-image" src={imageUrl} alt={profileData?.attributes?.name}></img>
                </div>
                <div style={{ float: 'right' }}>
                    <span className="profile-name">{profileData?.attributes?.name}</span>
                    <br/>
                    <span className="profile-subspcl">{subspecialties}</span>
                </div>
            </div>
        );
    }
}

export default Profile;