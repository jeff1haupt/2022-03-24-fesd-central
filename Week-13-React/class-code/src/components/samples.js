import React from 'react';
import Roster from './roster';

function Sample(props) {
    return (
        <div>
            <h1>Coming from the Sample Component</h1>
            <p>Welcome to tonight's class on {props.class}</p>
            <p>My name is {props.name}, and I will be your instructor</p>
            <p>This is our {props.week} week on {props.class}</p>
            <hr></hr>
            <Roster />
        </div>
    )
}

export default Sample;
