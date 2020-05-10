import update from 'immutability-helper';
import _ from 'lodash';

const Controls = (state = [], action) => {
    var parsedData;

    switch (action.type) {
        case 'GET_CONTROLS':
            parsedData = action.payload.data ? action.payload.data : {};
            return update(state, { $set: parsedData });
        case 'SET_SELECTED':
            const currItem = action.payload ? action.payload : '';
            let currStateData = _.cloneDeep(state.data);
            //Remove previous selection
            const prevSelIndex = _.findIndex(currStateData, { 'Selected': true });
            if (prevSelIndex > -1) {
                currStateData = update(currStateData, {
                    [prevSelIndex]: {
                        Selected: { $set: false }
                    }
                });
            }
            //Set new selection
            const newSelIndex = _.findIndex(currStateData, { 'id': currItem });
            if (newSelIndex > -1) {
                currStateData = update(currStateData, {
                    [newSelIndex]: {
                        Selected: { $set: true }
                    }
                });
            }

            return update(state, { data: { $set: currStateData } });
        default: return state;
    }
}

export default Controls;