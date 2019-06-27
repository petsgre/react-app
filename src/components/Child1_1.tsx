import * as React from 'react';
import eventProxy from '@/plugins/eventProxy'

class Child11 extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
  }
  componentDidMount() {
    eventProxy.on('msg', (msg: string) => {
      console.log(msg);
    });
    this.props.fun('update')
  }
  render() {
    return (
      <div>
        Child11
      <div>{this.props.msg}</div>
      </div>
    )
  }
}
export default Child11