import React from 'react'

const DisplayRecord = ({
    name,
    age,
    contact_number,
    car_model,
    car_make_year
}) => {
    return (
        <tr>
            <td data-label=">Name">{name}</td>
            <td data-label=">Age">{age}</td>
            <td data-label=">Contact No">{contact_number}</td>
            <td data-label=">Car Model Owned">{car_model}</td>
            <td data-label=">Car Make Year">{car_make_year}</td>
        </tr>
    )
}

export default DisplayRecord
