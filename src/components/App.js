import React, { Component } from 'react';
import MainContainer from './MainContainer';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer!';
        const secondUser = "GLynk"

        return (
            <div>
            <div className="App1">
                <header className="App-header"> </header>
                <MainContainer title={title} subtitle={subtitle} options={this.state.options}
                />
            </div>
            </div>
        );
    }
}