import React, { Component } from 'react';
import Options from './Options';

export default class ChatBody extends Component {

    render() {
        return (
            <div className="Chat-body">
                <Options options={this.props.options}
                />
            </div>
        )
    }
}