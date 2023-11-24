import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

class ShowPath extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            adventurer: "",
            path: "",
            splitPath: [],
            showPath: false,
            tableData: []
        };

        this.getPath = this.getPath.bind(this);
        this.showPath = this.showPath.bind(this);
        this.buildTable = this.buildTable.bind(this);
    }

    componentDidMount() {
        this.getPath(this.props.adventurerName);
        this.buildTable();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.adventurerName !== prevProps.adventurerName) {
            this.getPath(props.adventurerName);
        }

        if (this.state.showPath !== prevState.showPath) {
            this.buildTable();
        }
    }

    render() {
        return (<div className='flex-grid'>
            <div className="col">
                <div>
                    <button onClick={() => this.props.selectAdventurer("")}>New Adventurer</button>
                </div>
                <div>
                    <button onClick={() => this.showPath()}>Load Adventurer</button>
                </div>
            </div>
            <div className="col">
                <div>
                    <table>
                        <tbody id='table-core'>
                            {this.state.tableData.map((item, i) => (
                                <tr key={i} style={{minHeight: "5px", maxHeight: "5px", height: "5px"}}>
                                    {this.state.tableData[i].map((item) => (
                                        <td style={{backgroundColor: item ? "black" : "white", minWidth: "5px", minHeight: "5px", maxWidth: "5px", maxHeight: "5px"}}></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <button onClick={() => this.hidePath()}>Clear Path</button>
                </div>
            </div>
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
            path,
            splitPath: path.split(/(?<=[FBLR])/)
        });
    }

    showPath() {
        this.setState({
            showPath: true
        });
    }

    hidePath() {
        this.setState({
            showPath: false
        });
    }

    buildTable() {
        var gridVals = [];
        const tableSize = 61;

        for(var i = 0; i < tableSize; i++) {
            gridVals.push(Array.apply(null, Array(tableSize).map(function () {return false;})));
        }

        if (this.state.showPath) {
            var coords = {x: 31, y: 31};
            gridVals[coords.x][coords.y] = true;

            for(var j = 0; j < this.state.splitPath.length; j++) {
                var str = this.state.splitPath[j];
                var direction = str.slice(-1);
                var length = parseInt(str.slice(0, str.length - 1));

                for (var k = 0; k < length; k++) {
                    if (direction === "F") {
                        coords.x -= 1;
                    } else if (direction === "B") {
                        coords.x += 1;
                    } else if (direction === "L") {
                        coords.y -= 1;
                    } else if (direction === "R") {
                        coords.y += 1;
                    }

                    gridVals[coords.x][coords.y] = true;
                    
                }
            }
        }

        this.setState({
            tableData: gridVals
        });
    }
}

export default ShowPath;