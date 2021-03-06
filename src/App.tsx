import * as React from 'react';
import './App.css';
import logo from './logo.svg';
import bus from '@/plugins/bus'
import { store } from '@/store/store'

class App extends React.Component {
  public name: string = '666';
  public aaa: number = 1;
  constructor(props: any) {
    super(props)
    this.toMsg = this.toMsg.bind(this);
  }
  public componentDidMount() {

    bus.on('add', () => {
      console.log('触发了事件总线');

    })
  }
  /**
   * toMsg
   */
  public toMsg(e: any) {
    store.dispatch({ type: 'INCREMENT' })
    this.aaa++
    // console.log(e);
    if (this.aaa % 2 === 0) {
      (this.props as any).history.push('/Help')
      return
    }
    this.setState(prevState => ({
      ok: true
    }));
    // console.log(this);
    (this.props as any).history.push('/About')
  }
  public routerWillLeave(nextLocation: any) {
    console.log('******************');

    console.log(nextLocation);
    if (!(this.state as any).isSaved) {
      console.log(this);

    }
  }
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 onClick={this.toMsg} className="App-title">Welcome to React</h1>
        </header>
        <p onClick={this.toMsg} className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload1.
        </p>
      </div>
    );
  }
}

export default App;
