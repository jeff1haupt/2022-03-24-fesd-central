import React from 'react';

function Student(props) {
    return(
        <li>{props.firstName} {props.lastName}</li>
    )
}

export default Student;