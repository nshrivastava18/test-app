
import axios from 'axios';
// import _ from 'lodash';

export const getControls = () => {
    let params = { callTime: new Date() };

    const url = 'http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/services';

    const request = getAxios(url, { params: { params } });
    return {
        type: 'GET_CONTROLS',
        payload: request
    }
};

export const getResults = () => {
    let params = { callTime: new Date() };

    const url = 'http://api.inquickerstaging.com/v3/winter.inquickerstaging.com/providers?include=locations%2Cschedules.location&page%5Bnumber%5D=1&page%5Bsize%5D=10';

    const request = getAxios(url, { params: { params } });
    return {
        type: 'GET_RESULTS',
        payload: request
    }
};

export const setSelectedItem = (selectedItem, controlName) => {
    return {
        type: 'SET_SELECTED',
        payload: { selectedItem, controlName }
    }
};

axios.interceptors.request.use(request => {
    //Use code for logger
    return request;
});

axios.interceptors.response.use(response => {
    //Use code for logger
    return response;
});

function getAxios(url, axiosRequestConfig) {
    var resp = axios({
        method: 'get',
        url: url,
        //headers: axiosRequestConfig.headers,
        callTime: axiosRequestConfig.params.callTime
    })
        .then(function (response) {
            return response;
        })
        .catch(function (response) {
            console.log(response);
        });
    return resp;
};

