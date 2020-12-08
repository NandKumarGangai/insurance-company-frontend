import axios from 'axios';

const HOST = 'https://insurance-company-xx.herokuapp.com/api/v1';

export const getAllPeopleInfo = () => {
    return axios.get(HOST + '/getInfo').then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}

export const getRegisteredPerson = (query) => {
    return axios.get(`${HOST}/getPersonInfo/${query}`).then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}

export const getRegisteredCar = ({ carModel, carMakeYear }) => {
    return axios.post(HOST + '/isCarRegistered', {
        car_model: carModel,
        car_make_year: carMakeYear
    }).then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}