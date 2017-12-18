import React, { Component } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import NewMessageContainer from './NewMessageContainer';

export default class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['one', 'Two', 'Three']
        };
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter Message';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            };
        });
        console.log(option);
    }

    render() {
        return (
            <div className="App-chat-container">
                <ChatHeader />
                <ChatBody options={this.state.options}
                    handleDeleteOptions={this.props.handleDeleteOptions} />
                <NewMessageContainer handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}