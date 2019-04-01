import * as React from 'react';
import Person from '../model/Person'
import Sub from '@/components/Sub';
import bus from '@/plugins/bus'
import { ThemeContext, themes } from '@/context/theme-context';

interface IProps {
  name: string;
}

class About extends React.Component<IProps, object> {
  public p: Person = new Person()
  public name = 'about page'
  constructor(props: any) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = this.toggleTheme.bind(this)
  }
  public componentDidMount() {
    console.log(this.name);
    bus.on('add', () => {
      console.log('触发了事件总线');

    })
  }
  public toggleTheme = () => {
    this.setState((state: any) => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };
  public show() {
    console.log('子组件触发了回调');
  }
  public render() {
    return (
      <div className="about">
        <h3>{this.name}</h3>
        <ThemeContext.Provider value={(this.state as any).theme}>
          <Sub name={'sub'} cb={this.show} changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default About;
