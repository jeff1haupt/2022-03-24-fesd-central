import React from "react";
import Student from "./student";

export default class Roster extends React.Component {
    render() {
        return (
            <ul>
                <Student firstName="Liv" lastName="Geiger" />
                <Student firstName="Jesse" lastName="Roberts" />
                <Student firstName="Derek" lastName="Manning" />
            </ul>
        )
    }
}