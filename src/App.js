import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedItem } from './actions/index';
import { bindActionCreators } from 'redux';
import './App.css';
import Controls from './component/control'
import Results from './component/results'
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(selectedItem, controlName, e) {
    this.props.setSelectedItem(selectedItem, controlName);
  }

  getFilteredResult() {
    const resultsData = this.props.resultsData;
    const selControlName = this.props.filterData?.controlName;
    if (_.isEmpty(resultsData)) return [];

    return  _.filter(resultsData.data, function (data) {
      const listItems = data?.attributes?.subspecialties;
      return listItems.join('').toLowerCase().indexOf(selControlName.toLowerCase()) > -1;
    });
  }
  

  render() {
    const filteredResult = this.getFilteredResult();
    debugger
    return (
      <div className="App">
        <Controls controlsData={this.props.controlsData} onClickItem={this.onClickItem} />
        <hr className="separator"></hr>
        <Results resultsData={filteredResult} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  controlsData: state.controlsData,
  resultsData: state.resultsData,
  filterData: state.filterData
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
