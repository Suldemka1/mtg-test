import { Component, ReactNode } from "react";

interface IWatchProps { }

interface IWatch {
  time: string
}

class Watch extends Component<IWatchProps, IWatch> {
  constructor(props: IWatchProps) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000)
  }


  render(): ReactNode {
    return <div>{this.state.time}</div>
  }
}


export { Watch }