import React, { useState } from 'react';
import DisplayRecord from '../DisplayRecord';
import { getRegisteredPerson } from '../../ServiceCalls';
import './style.css';

const RegisteredPerson = () => {
    const [record, setAllRecord] = useState([]);
    const [success, setSuccess] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(false);

    const handleChange = evt => {
        evt.preventDefault();
        setQuery(evt.target.value);
        setError(false);
    }

    const handleClick = evt => {
        evt.preventDefault();
        if (!query) {
            setError(true);
            return;
        }

        async function fetchData() {
            setError(false);
            setSuccess(false);
            setAllRecord([]);

            const records = await getRegisteredPerson(query);
            if (records.success) {
                setSuccess(records.success);
                setAllRecord(records.data);
                setQuery('');
            }
        }
        fetchData();
    }

    return (
        <>
            <div className='input-form-container'>
                <div className='input-field-wrapper'>
                    <input
                        type='text'
                        value={query}
                        className={error ? 'has-error' : ''}
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
                    <table className='record-table'>
                        <caption>All records</caption>
                        <thead className='table-header'>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Contact No</th>
                                <th scope="col">Car Model Owned</th>
                                <th scope="col">Car Make Year</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            {
                                record.map(record => <DisplayRecord key={record.name} {...record} />)
                            }
                        </tbody>
                    </table>
                )
            }
            {
                record.length === 0 && success === true &&
                (
                    <div className='no-records'>
                        {'No records found....'}
                    </div>
                )
            }
        </>
    )
}

export default RegisteredPerson;
