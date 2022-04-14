import React from 'react';

export default function Table (props) {
    console.log(props.Listed);
    return (
        <>
            <table className = 'Table__conntry'>
                {
                    props.Listed.map (
                        place => 
                            (
                                <tr>
                                    <td>{place.name}</td>
                                    <td>{place.totalCases}</td>
                                </tr>
                            )
                    )
                }
            </table>
        </>
    )
}