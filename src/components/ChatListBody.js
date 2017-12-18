import React, { Component } from 'react';
import ChatList from './ChatList';

export default class ChatListBody extends Component {
    render() {
        return (
            <div className="Chat-list-body">
                <ChatList />
            </div>
        )
    }
}
