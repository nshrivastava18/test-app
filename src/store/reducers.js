import combineSectionReducers from 'combine-section-reducers';
import controlsData from '../reducers/controlsReducer';
import resultsData from '../reducers/resultsReducer';

const allReducer =
    combineSectionReducers({
        controlsData: controlsData,
        resultsData: resultsData
    })


export default allReducer;
