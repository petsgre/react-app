import * as React from 'react';
import Person from '../model/Person'

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
  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
      </div>
    );
  }
}

export default Wel;
