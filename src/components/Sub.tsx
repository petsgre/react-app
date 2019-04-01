import * as React from 'react';
import Person from '../model/Person'
import bus from '@/plugins/bus'
import { ThemeContext } from '../context/theme-context';
interface IProps {
  name: string;
  cb(): void
  changeTheme(): void
}
// react 点击事件
class Sub extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'sub page'
  constructor(props: any, context: any) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.getContext = this.getContext.bind(this);
  }
  public componentDidMount() {
    console.log(this);
  }
  public getContext(context: any) {
    console.log(context);
    console.log(this);
    this.props.changeTheme()

  }
  public clickHandle() {
    bus.emit('add')
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

        <ThemeContext.Consumer>
          {context => (
            <h1 onClick={this.getContext.bind(this, context)} style={{ background: context.background, color: context.foreground }}>
              {this.props.name}
            </h1>
          )}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Sub;
