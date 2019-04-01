import * as React from 'react';
import Person from '../model/Person'
import Sub from '@/components/Sub';

interface IProps {
  name: string;
}

class Wel extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'about page'
  constructor(props: any) {
    super(props);
  }
  public componentDidMount() {
    console.log(this.name);

  }
  public show() {
    console.log('子组件触发了回调');

  }
  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
        <Sub name={'sub'} cb={this.show} />
      </div>
    );
  }
}

export default Wel;
