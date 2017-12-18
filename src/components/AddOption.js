import React, { Component } from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });
        document.getElementById("new-message-form").reset();
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form id="new-message-form" onSubmit={this.handleAddOption}>
                    <input className="message-input" type="text" name="option" placeholder="Type a message" />
                </form> 
            </div>
        );
    }
}