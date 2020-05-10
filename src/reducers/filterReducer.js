import update from 'immutability-helper';
import _ from 'lodash';

const Filter = (state = [], action) => {
    var parsedData;

    switch (action.type) {
        case 'SET_SELECTED':
            parsedData = action.payload ? action.payload : { selectedItem: '', controlName: '' };
            return update(state, { $set: parsedData });
        default: return state;
    }
}

export default Filter;