import React from 'react';
import Sorting from '../utils/Sorting';

export default function Table (props) {
    let SortedList = Sorting (props.Listed);
    return (
        <>
            <table className = 'Table__conntry'>
                {
                    SortedList.map (
                        (place,index) => 
                            (
                                <tr key = {index}>
                                    <td>{place.name}</td>
                                    <td>{place.CasesTotal}</td>
                                </tr>
                            )
                    )
                }
            </table>
        </>
    )
}