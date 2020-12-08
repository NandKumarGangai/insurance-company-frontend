import React, { useState } from 'react';
import { getRegisteredCar } from '../../ServiceCalls';
import './style.css';

const initialState = {
    carMakeYear: '',
    carModel: ''
};

const initialErrorState = {
    carMakeYear: false,
    carModel: false
}

const CarRegistration = () => {
    const [record, setAllRecord] = useState([]);
    const [success, setSuccess] = useState(false);
    const [query, setQuery] = useState(initialState);
    const [errors, setErrors] = useState(initialErrorState);

    const handleChange = evt => {
        evt.preventDefault();
        setQuery({
            ...query,
            [evt.target.name]: evt.target.value
        });
        setErrors({
            ...errors,
            [evt.target.name]: false
        });
    }

    const handleClick = evt => {
        evt.preventDefault();
        if (!query['carMakeYear'] || !query['carModel']) {
            const errs = [];
            if (!query['carMakeYear']) {
                errs.push({ carMakeYear: true });
            }
            if (!query['carModel']) {
                errs.push({ carModel: true });
            }
            setErrors({
                carMakeYear: !!errs[0].carMakeYear,
                carModel: !!errs[1].carModel
            });
            return;
        }

        async function fetchData() {
            setErrors(initialErrorState);
            setSuccess(false);
            setAllRecord([]);

            const records = await getRegisteredCar(query);
            if (records.success) {
                setSuccess(records.success);
                setAllRecord(records.data);
                setQuery(initialState);
            }
        }
        fetchData();
    }
    console.log('err: ', errors);
    return (
        <>
            <div className='input-form-container'>
                <div className='input-field-wrapper'>
                    <input
                        type='text'
                        value={query['carModel']}
                        name='carModel'
                        className={errors['carModel'] ? 'has-error' : ''}
                        onChange={handleChange}
                        placeholder='Enter name....'
                    />
                </div>
                <div className='input-field-wrapper'>
                    <input
                        type='text'
                        value={query['carMakeYear']}
                        name='carMakeYear'
                        className={errors['carMakeYear'] ? 'has-error' : ''}
                        onChange={handleChange}
                        placeholder='Enter name....'
                    />
                </div>
                <div className='input-field-wrapper'>
                    <button
                        type='text'
                        onClick={handleClick}
                        placeholder='Enter name....'
                    >
                        {'CHECK'}
                    </button>
                </div>
            </div>
            {
                record.length > 0 && success === true &&
                (
                    <div className='registered'>
                        {'Car is registered with the company.'}
                    </div>
                )
            }
            {
                record.length === 0 && success === true &&
                (
                    <div className='no-records'>
                        {'Car is not registered with the company.'}
                    </div>
                )
            }
        </>
    )
}

export default CarRegistration;
