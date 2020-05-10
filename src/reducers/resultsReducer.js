import update from 'immutability-helper';
import _ from 'lodash';

const Results = (state = [], action) => {
    var parsedData;

    switch (action.type) {
        case 'GET_RESULTS':
            parsedData = action.payload?.data;
            return update(state, { $set: parsedData });
        default: return state;
    }
}

export default Results;