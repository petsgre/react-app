import * as React from 'react';

import Box from '@/components/HOC/Box';

class Inner extends React.Component<any, object> {
  public name = 'Inner'
  constructor(props: any) {
    super(props)
  }
  public render() {
    return (
      <div className="Inner">
        这是内容
        <div>type: {this.props.type}</div>
        <div>height: {this.props.height}</div>
      </div>
    )
  }
}

export default Box(Inner)