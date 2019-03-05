import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './App';
import Home from './Home';
// import Messages from './Message';
import './index.css';
import Wel from './Wel';

/**
 * name
 */
// function name(val: any, oVal: any) {
//   console.log('*****************');
//   console.log(val);
// }
// const enterTab = () => {
//   console.log('进入路由做一些事情，嘿嘿嘿')
// }
export default (
  <Router>
    <div>
      {/* <ul className="nav">
          <li><Link to="/">App</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Inbox">Inbox</Link></li>
        </ul> */}
      {/* <hr /> */}
      <Route exact={false} path="/" component={App} />
      {/* <Route exact={true} path="/" component={App} /> */}
      <Route path="/About" component={Wel} />
      <Route path="/Inbox" component={Home}/>
      {/* <Route path="/inbox/messages/:id" component={Messages} /> */}
    </div>
  </Router>
)