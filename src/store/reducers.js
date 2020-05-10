import combineSectionReducers from 'combine-section-reducers';
import controlsData from '../reducers/controlsReducer';
import resultsData from '../reducers/resultsReducer';
import filterData from '../reducers/filterReducer';

const allReducer =
    combineSectionReducers({
        controlsData: controlsData,
        resultsData: resultsData,
        filterData: filterData
    })


export default allReducer;
