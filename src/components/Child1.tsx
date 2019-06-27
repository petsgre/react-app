import * as React from 'react';
import Child1_1 from '@/components/Child1_1';
import eventProxy from '@/plugins/eventProxy'

class Child1 extends React.Component<any, any>{
  constructor(props: any) {
    super(props)
    this.state = {
      test: 'default'
    }
  }
  transferMsg(self: Child1, other: any) {
    eventProxy.trigger('msg', 'end');
    console.log(self);
    self.setState({
      test: other
    });
  }
  render() {
    return (
      <div>
        <Child1_1 {...this.props} fun={this.transferMsg.bind('ok', this)} />
        <div>{this.props.msg}</div>
        <div>{this.state.test}</div>
      </div>
    )
  }
}
export default Child1