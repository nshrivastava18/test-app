import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';
import sequenceAction from 'redux-sequence-action';
import thunk from 'redux-thunk';
import { getControls, getResults } from '../actions/index';
import allReducers from './reducers';

const persistedState = {
    controlsData: {},
    resultsData: {},
    filterData: { selectedItem: '', controlName: '' }
}

const logger = createLogger({
    // ...options
});

const configureStore = () => {
    //var applyMiddlewareObj = applyMiddleware(thunk, promise, sequenceAction);
    var applyMiddlewareObj = applyMiddleware(thunk, promise, logger, sequenceAction);
    const store =
        createStore(
            allReducers,
            persistedState,
            applyMiddlewareObj
        );

    //Load data
    store.dispatch(getControls());
    store.dispatch(getResults());
    return store;
};

export default configureStore;
