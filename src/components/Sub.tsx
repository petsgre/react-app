import * as React from 'react';
import Person from '../model/Person'

interface IProps {
  name: string;
  cb(): void
}
// react 点击事件
class Sub extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'sub page'
  constructor(props: any) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  public componentDidMount() {
    console.log(this.name);
  }
  public clickHandle() {
    console.log('点击了', this);
    this.props.cb()
  }
  public clickHandle1() {
    console.log('点击了');
  }
  public clickHandle2() {
    console.log('点击了:', this);
  }
  public clickHandle3(...paras: any[]) {
    console.log('点击了:', paras);
  }
  public clickHandle4 = () => {
    console.log('点击了');
  }
  public render() {
    return (
      <div className="about">
        <h3 onClick={this.clickHandle1}>纯点击事件</h3>
        <h3 onClick={this.clickHandle}>通过构造函数绑定this</h3>
        <h3 onClick={this.clickHandle4}>使用属性初始化器语法绑定this</h3>
        <h3 onClick={this.clickHandle2.bind(this, 1)}>获取this(但是要传多余的一个参数)</h3>
        <h3 onClick={this.clickHandle3.bind(this, 1, 2)}>传参</h3>
      </div>
    );
  }
}

export default Sub;
