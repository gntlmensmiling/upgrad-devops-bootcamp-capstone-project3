
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    message: ''
  };

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => this.setState({ message: data.message }));
  }

  render() {
    return (
      <div>
        <h1>Hello from React!</h1>
        <p>Message from server: {this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
