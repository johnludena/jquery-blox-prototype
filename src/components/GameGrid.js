import React from 'react';

class GameGrid extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="GameGrid">
                <div className="row">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>

                <div className="row">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>

                <div className="row">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block pink"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>

                <div className="row">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>

                <div className="row">
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                    <div className="block"></div>
                </div>
            </div>
        )
    }
}

export default GameGrid;