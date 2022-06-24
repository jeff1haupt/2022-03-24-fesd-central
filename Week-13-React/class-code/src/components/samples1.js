import React from 'react';
import Roster from './roster';
import Student from './student';

export default class Sample1 extends React.Component {
    render() {
        return (
            // This is JSX
            <div> 
                <h1>This is coming from Sample1 Component</h1> 
                <p>Welcome to tonight's class on {this.props.class}</p>
                <p>My name is {this.props.name}, and I will be your instructor</p>
                <p>This is our {this.props.week} week on {this.props.class}</p>
                <hr></hr>
                <Roster />
            </div>
        )
    }
}
