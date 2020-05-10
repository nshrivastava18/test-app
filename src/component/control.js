import React, { Component } from 'react';
import _ from 'lodash';
import '../App.css';

class Control extends Component {
    onSelectItem(controlId, e) {
        this.props.onClickItem(controlId);
    }

    renderItems(items) {
        if (_.isEmpty(items) || _.isEmpty(items.data) || items.data.length <= 0) { return '' }
        const _this = this;
        return (items.data).map((item => {
            const controlName = item?.attributes?.name;
            return (
                <li key={item.id} className={"controls-items" + (item.Selected ? " active" : "")} onClick={_this.onSelectItem.bind(this, item.id)}>
                    {controlName}
                </li>
            );
        }
        ))
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <h3>Controls</h3>
                <ul className="container">
                    {this.renderItems(this.props.controlsData)}
                </ul>
            </div>
        );
    }
}

export default Control;