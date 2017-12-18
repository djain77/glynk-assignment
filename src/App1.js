import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!';
    const secondUser = "GLynk"
   
    return (
      <div className="App">
          <header className="App-header"> </header>
          <MainContainer  title={title} subtitle={subtitle} options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions} /> 
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
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
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}


class MainContainer extends Component {
  render() {
      return (
          <div className="Main-container">
            <ChatListContainer />
            <ChatContainer options={this.props.state.options}
          handleDeleteOptions={this.props.handleDeleteOptions} /> 
          </div>
      )
  }
}



class ChatContainer extends Component {
  render() {
      return (
          <div className="App-chat-container">
            <ChatHeader />  
            <ChatBody options={this.props.state.options}
          handleDeleteOptions={this.props.handleDeleteOptions} />    
            <NewMessageContainer />
          </div>
      )
  }
}

class ChatListContainer extends Component {
  render() {
      return (
          <div className="App-chatList-container">
              <ChatListHeader />
          </div>
      )
  }
}


class ChatHeader extends Component {
  render() {
      return (
          <div className="Chat-header">
            <div className="left-content">
              <img src="" alt="dp"/>
              <span>GLynk</span>
            </div>
            <div className="right-content" >
              <span>S1</span>
              <span>S2</span>
              <span>S3</span>
            </div>
          </div>
      )
  }
}

class ChatBody extends Component {
  render() {
      return (
          <div className="Chat-body">
       {/*    <h1>Chat Body</h1>
        */}
               <Options options={this.props.state.options}
          handleDeleteOptions={this.props.handleDeleteOptions} />
           </div>
      )
  }
}

class ChatListHeader extends Component {
  render() {
      return (
          <span className="Chat-list-header">
              <img src="" alt="dp"/>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
              <div className="right-content" >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"></path><path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg>
              </div>
          </span>
      )
  }
}

class ChatListBody extends Component {
  render() {
      return (
          <span className="Chat-list-header">
              <img src="" alt="dp"/>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
          </span>
      )
  }
}

class NewMessageContainer extends Component {
  render() {
      return (
          <div className="New-message-container">
        {/*       <input type="textarea" id="messageInput" />
         */}
               <AddOption
          handleAddOption={this.handleAddOption}
        />
          </div>
      )
  }
}


export default App;
