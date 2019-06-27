import * as React from 'react';

function Test(){
  return (
    <div>123</div>
  )
}

// 高阶组件，时间上就是一个方法，接受一个react组件，在返回一个react组件
export default function (InnerComponent: any) {
  return class Box extends React.Component<any, object> {
    public name = 'Box'
    constructor(props: any) {
      super(props)
    }
    public render() {
      const { type, ...other } = this.props
      return (
        <div className="box">
          这是高阶组件容器
          <InnerComponent type={type} {...other} />
          <Test/>
        </div>
      )
    }
  }
}