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
            <div className="col">
                <div className="selection-image">
                    <img src="https://placehold.co/400" />
                </div>
                <div>
                    <button onClick={() => this.props.selectAdventurer("Prinna")}>Prinna</button>
                </div>
            </div>
            <div className="col">
                <div className="selection-image">
                    <img src="https://placehold.co/400" />
                </div>
                <div>
                    <button onClick={() => this.props.selectAdventurer("Rain")}>Rain</button>
                </div>
            </div>
            <div className="col">
                <div className="selection-image">
                    <img src="https://placehold.co/400" />
                </div>
                <div>
                    <button onClick={() => this.props.selectAdventurer("Nimbus")}>Nimbus</button>
                </div>
            </div>
            
        </div>);
    }
}

export default SelectAdventurer;