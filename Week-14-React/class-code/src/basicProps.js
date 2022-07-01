import React from "react";

export default class FuncClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            day: props.day
        }
        // this.handleClick = this.handleClick.bind(this);
    } 

    // handleClick(e) {
    //     console.log(e);
    //     this.setState({time: new Date()})
    // }
    newSecond() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        setInterval( () => this.newSecond(), 1000)
    }

    render() {
        return (
            <div>
                <br />Hello class! Today is {this.state.day}. The date is {this.state.time.toLocaleTimeString()}<br />
            {/* <button onClick={(evt) => this.handleClick(evt)}>Get new time</button> */}
            </div>
        )
    }
}