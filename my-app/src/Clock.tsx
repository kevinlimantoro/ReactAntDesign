import * as React from 'react';
interface IObject{
time:string;  
}
interface IUserInterface{
  Age:number;
  Name:string;
}
// enum direction {
// Up = 1,
// Down,
// Left,
// Right,  
// }
class Clock extends React.Component<IUserInterface,IObject> {
  private intervalID : NodeJS.Timer;
  constructor(props:IUserInterface){
    super(props);
    this.state = {
      time: new Date().toLocaleString()
    };
  }
  public componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  public componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  public tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
  }
    public render() {
        return (
          <p className="App-clock">
            Hello {this.props.Name}
            <br/>
            Your age {this.props.Age}
            <br/>
            The time is {this.state.time}.
          </p>
        );
      }
}

export default Clock;