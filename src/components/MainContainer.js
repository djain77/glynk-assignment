import React, { Component } from 'react';
import ChatListContainer from './ChatListContainer';
import ChatContainer from './ChatContainer';

export default class MainContainer extends Component {
    render() {
        return (
            <div className="Main-container">
                <ChatListContainer />
                <ChatContainer options={this.props.options}
                    handleDeleteOptions={this.props.handleDeleteOptions} />
            </div>
        )
    }
}