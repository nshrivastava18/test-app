import React, { Component } from 'react';
import _ from 'lodash';
import '../App.css';
import Profile from './profile';

class Results extends Component {

    renderItems(items) {
        if (_.isEmpty(items) || _.isEmpty(items.data) || items.data.length <= 0) { return '' }
        return (items.data).map((item => {
            return (
                <li key={item.id} className="results-items">
                    <Profile profileData={item} />
                </li>
            );
            }
        ))
    }

    render() {
        return (
            <div style={{ marginTop: '10px', width: '100%', height: '100%' }}>
                <h3>Results</h3>
                <Profile />
                <ul className="container">
                    {this.renderItems(this.props.resultsData)}
                </ul>
            </div>
        );
    }
}

export default Results;