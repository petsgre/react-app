import * as React from 'react';
import Person from './Person'
interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

class Wel extends React.Component<IProps, object> {
  public my: string = '1';
  public str: number = 123;
  public p: Person = new Person()
  constructor(props: any) {
    super(props);
    this.my = '123'
  }
  public show() {
    this.p.name = '18'
    console.log(this.p)
    this.p.getName()
    const someValue: any = "this is a string";
    const strLength: number = someValue.length;
    console.log(strLength)
  }
  public componentDidMount() {
    this.show()
  }
  public render() {
    return (
      <div className="Wel">
        <h3>{this.props.name}</h3>
        <h3>{this.my}</h3>
      </div>
    );
  }
}

export default Wel;
