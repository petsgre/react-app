import * as React from 'react';
import Person from '../model/Person'
import {
  Route, withRouter
} from 'react-router-dom';
import About from '@/pages/About';
import Sub from '@/components/Sub';
interface IProps {
  name: string;
  match: any;
  [propName: string]: any
}

class Help extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'help page'
  public flag = true
  constructor(props: any) {
    super(props);
    this.tab = this.tab.bind(this)
  }
  public componentDidMount() {
    console.log(this.name);

  }
  public tab(e: any) {
    this.flag = !this.flag
    if (this.flag) {
      this.props.history.push('/Help/One')
      return
    }
    this.props.history.push('/Help/Two')
  }
  public render() {
    const match = this.props.match
    return (
      <div className="help">
        <h3 onClick={this.tab}>{this.name}</h3>
        <Route path="/Help/One" exact component={About} />
        <Route path="/Help/Two" exact component={Sub} />
        <Route path={`${match.url}/:userId`} component={Sub} />
      </div>
    );
  }
}

export default withRouter(Help);
