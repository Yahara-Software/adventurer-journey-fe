import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class ShowPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adventurer: "",
            path: ""
        };

        this.getPath = this.getPath.bind(this);
    }

    componentDidMount() {
        this.getPath(this.props.adventurerName);
    }

    componentDidUpdate(prevProps) {
        if (this.props.adventurerName !== prevProps.adventurerName) {
            this.getPath(props.adventurerName);
        }
    }

    render() {
        return (<div>
            Selected {this.state.adventurer}
        </div>);
    }

    getPath(adventurerName) {
        var path = "";
        if (adventurerName === "Prinna") {
            path = "15F6B6B5L16R8B16F20L6F13F11R";
        } else if (adventurerName === "Rain") {
            path = "5F2L9F19B4L7B14L";
        } else if (adventurerName === "Nimbus") {
            path = "17B20R2L2B6R16L14F1R10L";
        } else {
            return;
        }

        this.setState({
            adventurer: adventurerName,
            path
        });

        console.log(adventurerName);
        console.log(path);
    }
}

export default ShowPath;