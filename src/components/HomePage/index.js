import React, { useEffect, useState } from 'react';
import DisplayRecord from '../DisplayRecord';
import { getAllPeopleInfo } from '../../ServiceCalls';
import './style.css';

const HomePage = () => {
    const [allRecords, setAllRecords] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const records = await getAllPeopleInfo();

            if (records.success) {
                setSuccess(records.success);
                setAllRecords(records.data);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
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
                        success && allRecords.map(record => <DisplayRecord key={record.name} {...record} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HomePage;
