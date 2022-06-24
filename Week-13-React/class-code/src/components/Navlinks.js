import React from "react";

export default class Navlinks extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link" href={this.props.hrefName}>{this.props.linkName}</a>
            </li>
        )
    }
}