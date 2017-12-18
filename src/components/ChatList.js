import React, { Component } from 'react';
import Contact from './Contact';

export default class ChatList extends Component {

    constructor(props) {
        super(props);
        this.handleAddContactOption = this.handleAddContactOption.bind(this);
        this.state = {
            options: ['Deepak', 'Deepak1', 'Deepak2']
        };
    }

    handleAddContactOption(option) {

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        console.log(option);
    }

    render() {
        return (
            <div>
                {
                    this.state.options.map((option) => <Contact key={option} contactName={option} />)
                }
            </div>
        );
    }
}

