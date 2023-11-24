import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class SelectAdventurer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (<div className='flex-grid'>
            <div className="col"><button onClick={() => this.props.selectAdventurer("Prinna")}>Prinna</button></div>
            <div className="col"><button onClick={() => this.props.selectAdventurer("Rain")}>Rain</button></div>
            <div className="col"><button onClick={() => this.props.selectAdventurer("Nimbus")}>Nimbus</button></div>
            
        </div>);
    }
}

export default SelectAdventurer;