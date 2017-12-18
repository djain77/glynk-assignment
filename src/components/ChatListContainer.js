import React, { Component } from 'react';
import ChatListHeader from './ChatListHeader';
import ChatListBody from './ChatListBody';

export default class ChatListContainer extends Component {
    render() {
        return (
            <div className="App-chatList-container">
                <ChatListHeader />
                <ChatListBody />
            </div>
        )
    }
}