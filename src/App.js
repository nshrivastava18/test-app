import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedItem } from './actions/index';
import { bindActionCreators } from 'redux';
import './App.css';
import Controls from './component/control'
import Results from './component/results'

class App extends Component {
  constructor() {
    super();
    this.onClickItem = this.onClickItem.bind(this);
  }

  onClickItem(selectedItem, e) {
    this.props.setSelectedItem(selectedItem);
  }

  render() {
    return (
      <div className="App">
        <Controls controlsData={this.props.controlsData} onClickItem={this.onClickItem} />
        <hr className="separator"></hr>
        <Results resultsData={this.props.resultsData} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  controlsData: state.controlsData,
  resultsData: state.resultsData
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedItem }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
