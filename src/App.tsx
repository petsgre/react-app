import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import Wel from './Wel'

class App extends React.Component {
  public name: string = '666';
  public aaa: number = 1;
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload1.
        </p>
        <Wel name={this.name}/>
      </div>
    );
  }
}

export default App;
