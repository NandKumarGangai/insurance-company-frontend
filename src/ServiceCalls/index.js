import axios from 'axios';


export const getAllPeopleInfo = () => {
    return axios.get('/getInfo').then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}

export const getRegisteredPerson = (query) => {
    return axios.get(`/getPersonInfo/${query}`).then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}

export const getRegisteredCar = ({ carModel, carMakeYear }) => {
    return axios.post('/isCarRegistered', {
        car_model: carModel,
        car_make_year: carMakeYear
    }).then(response => {
        return response.data;
    }).catch(err => {
        console.error('Error: ', err);
        return err;
    })
}